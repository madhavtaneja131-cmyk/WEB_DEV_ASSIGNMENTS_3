const express = require("express")

const students = require("../data/students")

const router = express.Router()


// GET all students
router.get("/students", (req, res) => {
    res.status(200).send(students)
})


// GET student by ID
router.get("/students/:id", (req, res) => {

    let { id } = req.params

    let student = students.find(student => student.studentId === id)

    if (!student) {
        return res.status(404).send("Student Not Found")
    }

    res.status(200).send(student)
})


// POST new student
router.post("/students", (req, res) => {

    let newStudent = req.body

    if (!newStudent.name || !newStudent.email) {
        return res.status(400).send("Name and email are required")
    }

    students.push(newStudent)

    res.status(201).send("Student Added Successfully")
})


// PUT update student
router.put("/students/:id", (req, res) => {

    let { id } = req.params

    let student = students.find(student => student.studentId === id)

    if (!student) {
        return res.status(404).send("Student Not Found")
    }

    Object.assign(student, req.body)

    res.status(200).send("Student Updated Successfully")
})


// DELETE student
router.delete("/students/:id", (req, res) => {

    let { id } = req.params

    let student = students.find(student => student.studentId === id)

    if (!student) {
        return res.status(404).send("Student Not Found")
    }

    let index = students.indexOf(student)

    students.splice(index, 1)

    res.status(200).send("Student Deleted Successfully")
})


module.exports = router