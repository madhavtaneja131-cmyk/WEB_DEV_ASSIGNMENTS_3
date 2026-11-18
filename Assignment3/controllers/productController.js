const Product = require("../models/Product");

const httpError = (status, message) => Object.assign(new Error(message), { status });

// POST /api/products
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) { next(err); }
};

// GET /api/products?category=&search=&minPrice=&maxPrice=&sort=&page=&limit=
exports.getProducts = async (req, res, next) => {
  try {
    const { category, search, minPrice, maxPrice, sort, page = 1, limit = 10 } = req.query;
    const filter = {};

    if (category) filter.category = new RegExp(`^${category}$`, "i");
    if (search) filter.name = new RegExp(search, "i");
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // sort=price,-quantity  ->  "price -quantity"
    const sortBy = sort ? sort.split(",").join(" ") : "-createdAt";
    const pageNum = Math.max(Number(page), 1);
    const limitNum = Math.max(Number(limit), 1);

    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .sort(sortBy)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);

    res.json({
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      count: products.length,
      products,
    });
  } catch (err) { next(err); }
};

// GET /api/products/:id
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw httpError(404, "Product not found");
    res.json(product);
  } catch (err) { next(err); }
};

// PUT /api/products/:id
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) throw httpError(404, "Product not found");
    res.json(product);
  } catch (err) { next(err); }
};

// PATCH /api/products/:id/stock   body: { "change": 10 } or { "change": -5 }
exports.adjustStock = async (req, res, next) => {
  try {
    const change = Number(req.body.change);
    if (!Number.isFinite(change) || change === 0)
      throw httpError(400, "'change' must be a non-zero number");

    // Atomic: decrement only if enough stock exists (no negative stock)
    const filter = { _id: req.params.id };
    if (change < 0) filter.quantity = { $gte: -change };

    const product = await Product.findOneAndUpdate(
      filter,
      { $inc: { quantity: change } },
      { new: true }
    );

    if (!product) {
      const exists = await Product.exists({ _id: req.params.id });
      throw exists ? httpError(400, "Insufficient stock") : httpError(404, "Product not found");
    }
    res.json({ message: "Stock updated", product });
  } catch (err) { next(err); }
};

// DELETE /api/products/:id
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) throw httpError(404, "Product not found");
    res.json({ message: "Product deleted", id: product._id });
  } catch (err) { next(err); }
};

// GET /api/products/low-stock   (quantity <= reorderLevel)
exports.getLowStock = async (req, res, next) => {
  try {
    const items = await Product.aggregate([
      { $match: { $expr: { $lte: ["$quantity", "$reorderLevel"] } } },
      { $sort: { quantity: 1 } },
    ]);
    res.json({ count: items.length, lowStockItems: items });
  } catch (err) { next(err); }
};

// GET /api/products/summary   (category-wise aggregation)
exports.getSummary = async (req, res, next) => {
  try {
    const summary = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          totalItems: { $sum: 1 },
          totalQuantity: { $sum: "$quantity" },
          totalStockValue: { $sum: { $multiply: ["$price", "$quantity"] } },
          avgPrice: { $avg: "$price" },
        },
      },
      { $sort: { totalStockValue: -1 } },
    ]);
    res.json({ categories: summary.length, summary });
  } catch (err) { next(err); }
};