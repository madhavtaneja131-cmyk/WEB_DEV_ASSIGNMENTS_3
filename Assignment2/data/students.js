const students = [

  {
    "studentId": "STU001",
    "name": "Aarav Sharma",
    "age": 20,
    "gender": "Male",
    "course": "CSE",
    "semester": 4,
    "city": "Delhi",
    "email": "aarav@example.com",
    "marks": {
      "math": 88,
      "dbms": 76,
      "web": 92
    },
    "attendance": 91,
    "feesPaid": true,
    "skills": [
      "JavaScript",
      "MongoDB",
      "React"
    ],
    "isActive": true
  },
  {
    "studentId": "STU002",
    "name": "Priya Verma",
    "age": 19,
    "gender": "Female",
    "course": "CSE",
    "semester": 2,
    "city": "Gurgaon",
    "email": "priya@example.com",
    "marks": {
      "math": 95,
      "dbms": 89,
      "web": 94
    },
    "attendance": 96,
    "feesPaid": true,
    "skills": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "isActive": true
  },
  {
    "studentId": "STU003",
    "name": "Rahul Singh",
    "age": 21,
    "gender": "Male",
    "course": "BCA",
    "semester": 4,
    "city": "Noida",
    "email": "rahul@example.com",
    "marks": {
      "math": 72,
      "dbms": 68,
      "web": 81
    },
    "attendance": 78,
    "feesPaid": false,
    "skills": [
      "Python",
      "SQL"
    ],
    "isActive": true
  },
  {
    "studentId": "STU004",
    "name": "Sneha Gupta",
    "age": 20,
    "gender": "Female",
    "course": "BCA",
    "semester": 6,
    "city": "Delhi",
    "email": "sneha@example.com",
    "marks": {
      "math": 84,
      "dbms": 91,
      "web": 87
    },
    "attendance": 88,
    "feesPaid": true,
    "skills": [
      "Java",
      "SQL",
      "React"
    ],
    "isActive": true
  },
  {
    "studentId": "STU005",
    "name": "Mohit Kumar",
    "age": 22,
    "gender": "Male",
    "course": "BBA",
    "semester": 6,
    "city": "Faridabad",
    "email": "mohit@example.com",
    "marks": {
      "math": 65,
      "dbms": 59,
      "web": 70
    },
    "attendance": 72,
    "feesPaid": false,
    "skills": [
      "Excel",
      "Power BI"
    ],
    "isActive": false
  },
  {
    "studentId": "STU006",
    "name": "Ananya Mehta",
    "age": 19,
    "gender": "Female",
    "course": "CSE",
    "semester": 2,
    "city": "Jaipur",
    "email": "ananya@example.com",
    "marks": {
      "math": 91,
      "dbms": 85,
      "web": 89
    },
    "attendance": 94,
    "feesPaid": true,
    "skills": [
      "React",
      "Node.js",
      "MongoDB"
    ],
    "isActive": true
  },
  {
    "studentId": "STU007",
    "name": "Vikram Yadav",
    "age": 23,
    "gender": "Male",
    "course": "BCA",
    "semester": 6,
    "city": "Gurgaon",
    "email": "vikram@example.com",
    "marks": {
      "math": 78,
      "dbms": 74,
      "web": 69
    },
    "attendance": 81,
    "feesPaid": true,
    "skills": [
      "PHP",
      "MySQL"
    ],
    "isActive": true
  },
  {
    "studentId": "STU008",
    "name": "Ishita Jain",
    "age": 20,
    "gender": "Female",
    "course": "CSE",
    "semester": 4,
    "city": "Noida",
    "email": "ishita@example.com",
    "marks": {
      "math": 87,
      "dbms": 93,
      "web": 90
    },
    "attendance": 89,
    "feesPaid": true,
    "skills": [
      "JavaScript",
      "Node.js",
      "Express"
    ],
    "isActive": true
  },
  {
    "studentId": "STU009",
    "name": "Karan Malhotra",
    "age": 21,
    "gender": "Male",
    "course": "BBA",
    "semester": 4,
    "city": "Delhi",
    "email": "karan@example.com",
    "marks": {
      "math": 82,
      "dbms": 71,
      "web": 66
    },
    "attendance": 85,
    "feesPaid": true,
    "skills": [
      "Excel",
      "SQL"
    ],
    "isActive": true
  },
  {
    "studentId": "STU010",
    "name": "Neha Kapoor",
    "age": 18,
    "gender": "Female",
    "course": "CSE",
    "semester": 1,
    "city": "Faridabad",
    "email": "neha@example.com",
    "marks": {
      "math": 76,
      "dbms": 80,
      "web": 85
    },
    "attendance": 90,
    "feesPaid": false,
    "skills": [
      "HTML",
      "CSS"
    ],
    "isActive": true
  },
  {
    "studentId": "STU011",
    "name": "Aditya Joshi",
    "age": 24,
    "gender": "Male",
    "course": "MCA",
    "semester": 2,
    "city": "Delhi",
    "email": "aditya@example.com",
    "marks": {
      "math": 89,
      "dbms": 86,
      "web": 91
    },
    "attendance": 87,
    "feesPaid": true,
    "skills": [
      "Java",
      "Spring",
      "SQL"
    ],
    "isActive": true
  },
  {
    "studentId": "STU012",
    "name": "Riya Chawla",
    "age": 22,
    "gender": "Female",
    "course": "MCA",
    "semester": 4,
    "city": "Noida",
    "email": "riya@example.com",
    "marks": {
      "math": 96,
      "dbms": 92,
      "web": 95
    },
    "attendance": 97,
    "feesPaid": true,
    "skills": [
      "React",
      "Node.js",
      "MongoDB"
    ],
    "isActive": true
  },
  {
    "studentId": "STU013",
    "name": "Nitin Saini",
    "age": 20,
    "gender": "Male",
    "course": "CSE",
    "semester": 4,
    "city": "Jaipur",
    "email": "nitin@example.com",
    "marks": {
      "math": 69,
      "dbms": 73,
      "web": 77
    },
    "attendance": 74,
    "feesPaid": false,
    "skills": [
      "C",
      "C++"
    ],
    "isActive": false
  },
  {
    "studentId": "STU014",
    "name": "Pooja Agarwal",
    "age": 21,
    "gender": "Female",
    "course": "BCA",
    "semester": 4,
    "city": "Gurgaon",
    "email": "pooja@example.com",
    "marks": {
      "math": 88,
      "dbms": 79,
      "web": 83
    },
    "attendance": 92,
    "feesPaid": true,
    "skills": [
      "Python",
      "Django",
      "SQL"
    ],
    "isActive": true
  },
  {
    "studentId": "STU015",
    "name": "Harsh Vardhan",
    "age": 19,
    "gender": "Male",
    "course": "BBA",
    "semester": 2,
    "city": "Delhi",
    "email": "harsh@example.com",
    "marks": {
      "math": 74,
      "dbms": 62,
      "web": 71
    },
    "attendance": 79,
    "feesPaid": false,
    "skills": [
      "Excel",
      "Power BI",
      "SQL"
    ],
    "isActive": false
  }
]

module.exports = students