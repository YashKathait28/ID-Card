const user = require("../models/userModel");


// Create User
const createUser = async (req, res) => {
    try{

        const {name, email, age} = req.body;
        const userData = await user.create({
            name: name,
            email: email,
            age: age,
        });

        res.status(201).json(userData);

    } catch(error){
        res.status(500).json({
            message: "Failed to fetch the data!",
            error: error.message,
        })
    }
}

// Show User
const showUser = async (req,res) => {
    try {
        const showData = await user.find();
        res.status(200).json(showData);
    } catch (error) {
        res.status(500).json({
            message: "Not data found",
            error: error.message,
        })
    }
}

// Show Single User
const singleUser = async(req,res) => {
    try {
        const {id} = req.params
        const singleData = await user.findById({_id: id});
        res.status(200).json(singleData);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: "No data found",
            error: error.message,
        })
        
    }
}

// Update User
const updateUser = async(req,res) => {
    try {
        const {id} = req.params
        const {name, email, age} = req.body;
        const updateData = await user.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(updateData);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: "No data found",
            error: error.message,
        })
        
    }
}

// Delete User
const deleteUser = async(req,res) => {
    try {
        const {id} = req.params
        const deleteData = await user.findByIdAndDelete({_id: id});
        res.status(200).json(deleteData);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: "No data found",
            error: error.message,
        })
        
    }
}

module.exports = {
    createUser, showUser, singleUser, updateUser, deleteUser
};