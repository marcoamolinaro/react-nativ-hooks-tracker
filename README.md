# react-nativ-hooks-tracker

Setup Express API
1. mkdir tracker-server
2. cd tracker-server
3. npm init -y
4. npm install bcrypt express jsonwebtoken mongoose nodemon
5. mkdir src
6. Create index.js
7. node src/index.js

MongoDB Setup
1. Go to www.cloud.mongodb.com
2. Create a cluster, user and then get the uri connection string
3. Edit package.json
    "scripts": {
    "dev": "nodemon src/index.js"
    }
4. npm run dev 

Install Postman
1. https://www.getpostman.com/
2. Download, unzip and then ./Postman