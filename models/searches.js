//imports
const axios = require('axios');

//definition of the class Searches 
class Searches {

    constructor() {
    }

    get headersTwitter() {
        return {
            //usually the variables of enviroment are not push into GitHub, we just indicate the example.env with the require variables.
            'Authorization': `Bearer ${process.env.Authorization}`
        }
    }

    async userID(user = '') {
        //try the search of the userID with the username
        try {
            //http requirement
            const { data: response } = await axios.get(`https://api.twitter.com/2/users/by?usernames=${user}`,
                {
                    //we add the header that we previously return in the get hedersTwitter
                    headers: this.headersTwitter
                });

            //returns the user that matches the search
            return response.data.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username,
            }));

        } catch (error) {
            //throw ends the app, while return allows the app to continue
            console.log(error);
            throw [error];
        }
    }

    async twits(id = null) {
        try {
            //http requirement
            const {data:response} = await axios.get(`https://api.twitter.com/2/users/${id}/tweets`,
                {
                    headers: this.headersTwitter
                });
            //Returns the last 10 twits of the userID that we provided
            return response.data;
        } catch (error) {
            console.log(error);
            return [error];
        }
    }


}

module.exports = Searches;