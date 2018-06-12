'use strict';
const express = require("express");
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const studentList = [
    {
        id: 1,
        name: "abc",
        age:21,
        dept:"IT"
    },
    {
        id: 2,
        name: "xyz",
        age:21,
        dept:"CS"
    },
    {
        id: 3,
        name: "def",
        age:20,
        dept:"IT"
    },
    {
        id: 4,
        name: "pvr",
        age:22,
        dept:"CS"
    }
];
// app.get('/api/index', (req, resp) => {
//     resp.json(studentList);
// });
// app.post('/api/create', (req, resp) => {
//     console.log(req);
// });
// app.Listen(5000); 
app.get('/api/index', (req, resp) => {
    resp.json(studentList);
});
app.post('/api/student', (req, resp) => {
    console.log(req);
    const newStudent ={
        id:studentList.length+1,
        name:req.body.name,
        age:req.body.age,
        dept:req.body.dept
    };
    // const newStudent = {
    //     ...req.body,
    //     id: studentsList.length + 1
    // }
    studentList.push(newStudent);
    resp.status(201);
    resp.json(newStudent.id);
});
app.delete('/api/delete/:id',(req,resp)=>{
    console.log(req);
    const idToBeDelete=parseInt(req.params.id);
    const studentToBeDeleted=studentList.findIndex(student=>student.id===idToBeDelete);
   const delet= studentList.splice(studentToBeDeleted, 1);
    resp.json(delet);
});
app.listen(5000);
