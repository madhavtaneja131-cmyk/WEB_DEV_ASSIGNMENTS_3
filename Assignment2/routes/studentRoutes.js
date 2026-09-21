const express = require("express");
const router = express.Router();
const students = require("../data/students");

// Helper: validate name & course
const isValid = (body) =>
  body &&
  typeof body.name === "string" && body.name.trim() !== "" &&
  typeof body.course === "string" && body.course.trim() !== "";

// GET /students - all students
router.get("/", (req, res) => {
  res.status(200).json(students);
});

// GET /students/:id - one student
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "ID must be a number" });
  }

  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json(student);
});

// POST /students - add student
router.post("/", (req, res) => {
  if (!isValid(req.body)) {
    return res
      .status(400)
      .json({ message: "Name and course are required" });
  }

  const newId =
    students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;

  const newStudent = {
    id: newId,
    name: req.body.name.trim(),
    course: req.body.course.trim(),
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT /students/:id - update student
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "ID must be a number" });
  }

  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (!isValid(req.body)) {
    return res
      .status(400)
      .json({ message: "Name and course are required" });
  }

  student.name = req.body.name.trim();
  student.course = req.body.course.trim();
  res.status(200).json(student);
});

// DELETE /students/:id - remove student
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "ID must be a number" });
  }

  const index = students.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deleted = students.splice(index, 1)[0];
  res.status(200).json({ message: "Student deleted", student: deleted });
});

module.exports = router;