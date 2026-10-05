const express = require("express");
const router = express.Router();
const user = require("../models/userModel");
const {createUser, showUser, singleUser, deleteUser, updateUser} = require("../controllers/userController");

// Create Request
router.post("/", createUser);

// Read Request 
router.get("/", showUser);

// Get Single User Request
router.get("/:id", singleUser);

// Delete Single User Request
router.delete("/:id", deleteUser);

// Update Single User Request
router.patch("/:id", updateUser);


module.exports = router;
