const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");


//handling uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exceptions`);
    process.exit(1);
});


dotenv.config({path: "backend/config/config.env"});

//Connecting the database
connectDatabase(); 
    
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//unhandled promise rejection -> closing the server

process.on("unhandledRejection", (err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});

/**
 * various errors like uncaught exceptions, unhandled promise rejection, wrong mongodb id error and duplicate key entered 
 * errors have been handled gracefully
 */