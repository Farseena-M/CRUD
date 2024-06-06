const User = require("../model/userSchema")

const createUser = async (req, res) => {
    const createuser = await User.create(req.body)
    res.status(201).json({
        status: 'created',
        data: createuser
    })
}

const getUser = async (req, res) => {
    const userId = req.params.id
    const getuser = await User.findById(userId)
    res.status(200).json({
        message: 'Success',
        data: getuser
    })
}


const updateUser = async (req, res) => {
    const updateuser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({
        message: 'Success',
        data: updateuser
    })
}


const deleteUser = async (req, res) => {
    const userId = req.params.id
    const deleteuser = await User.findByIdAndDelete(userId)
    res.status(200).json({
        message: 'deleted',
        data: deleteuser
    })
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}