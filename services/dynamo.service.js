const AWS = require('aws-sdk');
// const credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
// AWS.config.credentials = credentials;

AWS.config.update({
    region: 'us-east-1',
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

// const user = {
//     id: 0,
//     profileImage: 'image',
//     name: 'Alexander',
//     experience: 'TEXTO DESARROLLADOR',
//     username: 'torrenegra'
// }

module.exports={
    getUserFromDb,
    updateUserInDb
}
