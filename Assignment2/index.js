const express = require("express")

const app = express()

const studentRoutes = require("./routes/studentRoutes")
const logger = require("./middleware/logger")

app.use(express.json())

app.use(logger)

app.use("/api", studentRoutes)

app.use((req, res) => {
    res.status(404).send("Route Not Found")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Internal Server Error")
})

app.listen(3000, () => {
    console.log("Server is running on PORT 3000")
})
