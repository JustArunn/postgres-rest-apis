const pool = require("../config/db");
const {
  getStudentsQuery,
  getStudentsByIdQuery,
  checkEmailExistsQuery,
  createStudentQuery,
  removeStudentQuery,
  updateStudentQuery,
} = require("../queries/students");

const getStudents = (req, res) => {
  pool.query(getStudentsQuery, (err, students) => {
    if (err) throw err;
    res.status(200).json(students.rows);
  });
};

const getStudentsById = (req, res) => {
  const { id } = req.params;
  pool.query(getStudentsByIdQuery, [id], (err, student) => {
    if (err) throw err;
    res.status(200).json(student.rows);
  });
};

const createStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(checkEmailExistsQuery, [email], (err, student) => {
    if (err) throw err;
    else if (student.rows.length) {
      res.status(401).json({
        error: "Email already exists.",
      });
    } else {
      pool.query(createStudentQuery, [name, email, age, dob], (err) => {
        if (err) throw err;
        res.status(201).json({
          message: "User created successfully.",
        });
      });
    }
  });
};

const deleteStudentsById = (req, res) => {
  const { id } = req.params;
  pool.query(getStudentsByIdQuery, [id], (err, student) => {
    if (err) throw err;
    else if (!student.rows.length) {
      res.status(401).json({
        error: "User does not exists in the database.",
      });
    } else {
      pool.query(removeStudentQuery, [id], (err, student) => {
        if (err) throw err;
        res.status(200).json({
          message: "User deleted successfully",
        });
      });
    }
  });
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  pool.query(getStudentsByIdQuery, [id], (err, student) => {
    if (err) throw err;
    if (!student.rows.length) {
      res.status(404).json({
        message: "User does not exists.",
      });
    } else {
      pool.query(updateStudentQuery, [name, id], (err, student) => {
        if (err) throw err;
        else {
          res.status(202).json({
            message: "User updated successfully",
          });
        }
      });
    }
  });
};
module.exports = {
  getStudents,
  getStudentsById,
  createStudent,
  deleteStudentsById,
  updateStudent,
};
