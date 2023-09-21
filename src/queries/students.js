const getStudentsQuery = "SELECT * FROM students";
const getStudentsByIdQuery = "SELECT * FROM students WHERE id = $1";
const checkEmailExistsQuery = "SELECT s FROM students s WHERE s.email = $1";
const createStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const removeStudentQuery = "DELETE FROM students WHERE id = $1";
const updateStudentQuery = "UPDATE students SET name = $1 WHERE id = $2";
module.exports = {
  getStudentsQuery,
  getStudentsByIdQuery,
  checkEmailExistsQuery,
  createStudentQuery,
  removeStudentQuery,
  updateStudentQuery,
};
