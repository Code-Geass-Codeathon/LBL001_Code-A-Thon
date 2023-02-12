# LBL001_Code-A-Thon

   Environment setup
   Install Nodejs on your environment
   After successfully adding this to your vscode run npm i , npm i -g nodemon


   To run our app in your local system, you need to create .env file in your Server folder
   Templete for .env file
      
       MONGO_URL=""
       DATABASE_PASSWORD=""
       JWT_SECRET="some super hard sting to guess  add your own"
       PORT=3001
       
  
  Add mongoDB connect application URL to the MONGO_URL quotations. Similary add database password.
  
  To run the server go to server folder and write nodemon server.js
  
  To test the backend Routes  go to your Postman
  
  start the server
  
  For Registring give the post request , add inurl localhost:Port/auth/register and give the following JSON object
  
                 {
                   "firstName": "Rahul",
                   "lastName": "Singh",
                 "email": "Rahul@gmail.com",
                  "password": "123ss4dtr5kjlee"
    
  
                  }
 
       
 
