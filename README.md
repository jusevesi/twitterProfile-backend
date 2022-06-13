# Test Zemoga Backend

This repository contains the backend in node.js for the Zemoga development test.

## Steps to excecute the project
1. Install node js
2. Clone the project
```sh
git clone https://github.com/jusevesi/testZemoga-backend
```
3. Install node modules
```sh
npm install
```   
4. Create a .env file with the following information, adding the credentials for AWS DynamoDB
```sh
#Twitter API credential - BEARER TOKEN 
AUTHORIZATION = AAAAAAAAAAAAAAAAAAAAAPwMdgEAAAAAtipRTiEgNh8IzvGdxHYgSqjjG6Q%3DBsQIb5HKaad8eAx31Pii29hx1NkuSyeyS4gbTsyzd7QHjaFP4F
#PORT
PORT = 8080
#AWS Credentials - **Please insert your credentials**
AWS_region: us-east-1
AWS_ACCESS_KEY_ID: #Your_AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY: #Your_AWS_SECRET_ACCESS_KEY
```   
5. Execute the project
```sh
npm start
```  