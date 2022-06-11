const UserService = require("../services/user.service");

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const userService = new UserService();
        const response = await userService.getUserById(id);
        res.json(response)
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500)
        res.json({ message: error.message || 'Internal Server Error' })
    }

}

const updateUser = async (req, res) => {
    try {
        const userService = new UserService();
        const response = await userService.updateUser(req.body);
        res.json(response);
    } catch (error) {
        res.status(error.statusCode || 500)
        res.json({ message: error.message || 'Internal Server Error' })
    }
}

module.exports = {
    getUserById,
    updateUser
}
