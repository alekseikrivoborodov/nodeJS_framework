const User = require('./user-model')

const getUsers = async (req, res) => {
    let users
    if (req.params._id){
        users = await User.findById(req.params._id)
    }
    else {
        users = await User.find()
    }
    res.send(users)
}

const createUser = async (req, res) => {
    const user = await User.create(req.body)
    res.send(user)
}

const deleteUser = async (req, res) => {
    if (req.params._id){
        response = await User.deleteOne({_id: req.params._id})
    }
    res.send(response)
}

const putUser = async (req, res) => {
    if (req.params._id){
        response = await User.findByIdAndUpdate({_id: req.params._id}, req.body)
    }
    res.send(response)
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    putUser
}