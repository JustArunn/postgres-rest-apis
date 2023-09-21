const { Router } = require("express");
const router = Router();
const {
  getStudents,
  getStudentsById,
  createStudent,
  deleteStudentsById,
  updateStudent,
} = require("../controllers/students");
router.get("/", getStudents);
router.post("/", createStudent);
router.get("/:id", getStudentsById);
router.delete("/:id", deleteStudentsById);
router.put("/:id", updateStudent);
module.exports = router;
