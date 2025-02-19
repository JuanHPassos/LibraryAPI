import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const connection = await connectToDatabase();

// waits for the error event
connection.on("error", (error) => {
    console.error("connection error", error);
});

// waits for the connection event
connection.once("open", () => {
    console.log("Sucessfully connection with database");
});

// Initializes an Express server
const app = express();
routes(app);

// error middleware (executed every request)
app.use(errorHandler);

export default app;