const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.AWS_region,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'portfolio';

const getUserFromDb = async (id) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key:{
                id
            }
        };
        const user = await dynamoClient.scan(params).promise();
        return user.Items.find(element => element.id === +id) ;
    } catch (error) {
        throw error;
    }
};

const updateUserInDb = async (user) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Item: user,
        };
        const response = await dynamoClient.put(params).promise();
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports={
    getUserFromDb,
    updateUserInDb
}
