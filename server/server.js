// Vytvorenie Express aplikacie
const express = require("express");
const {student} = require("./student/student");
const app = express();
app.use(express.json());     // midware req.body
student.initAppServices(app);

const PORT = 5000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));