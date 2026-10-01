const express = require("express")

const app = express()

const studentRoutes = require("./routes/studentRoutes")
const logger = require("./middleware/logger")

app.use(express.json())

app.use(logger)

app.use("/api", studentRoutes)

app.listen(3000, () => {
    console.log("Server is running on PORT 3000")
})