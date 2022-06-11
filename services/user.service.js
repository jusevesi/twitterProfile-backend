const { getUserFromDb, updateUserInDb } = require("./dynamo.service");
const TwitterService = require("./twitter.service");

class UserService {
    constructor() { }

    async getUserById(id) {
        try {
            const user = await getUserFromDb(id);
            const { username } = user;
            const twitterService = new TwitterService();
            const userId = await twitterService.getUserIdByUsername(username);
            const twits = await twitterService.getTwitsById(userId);
            return {
                ...user,
                twits
            };
        } catch (error) {
            throw error;
        }
    }

    async updateUser(user) {
        try {
            await updateUserInDb(user);
            return {
                message: `User with id: ${user.id} successfully updated.`
            }

        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserService;