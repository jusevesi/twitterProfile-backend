//imports
const axios = require('axios');

//definition of the class Searches 
class TwitterService {

    constructor() { }

    async getUserIdByUsername(username = '') {
        try {
            const { data: response } = await axios.get(`https://api.twitter.com/2/users/by?usernames=${username}`,
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.AUTHORIZATION}`
                    }
                });

            return response.data[0].id;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTwitsById(id = null) {
        try {
            const { data: response } = await axios.get(`https://api.twitter.com/2/users/${id}/tweets`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.AUTHORIZATION}`
                    },
                    params: {
                        max_results: 5
                    }
                });
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


}

module.exports = TwitterService;