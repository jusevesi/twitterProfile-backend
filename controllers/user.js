const UserService = require("../services/user.service");

const getUserByID = async (req, res) => {
    try {
        const {id} = req.params;
        const userService = new UserService();
        const response = await userService.getUserByID(id);
        res.json(response)
    } catch (error) {
        res.status(error.status || 500)
        res.json({message: error.message || 'Internal Server Error'})
    }

}

module.exports = getUserByID;
