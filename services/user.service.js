const TwitterService = require("./twitter.service");

class UserService {
    constructor() { }

    async getUserByID(id) {
        //traer datos de BD
        const username = 'petrogustavo';
        const twitterService = new TwitterService();
        const userId = await twitterService.getUserIdByUsername(username);
        const twits = await twitterService.getTwitsById(userId);
        return twits;

    }

}

module.exports = UserService;