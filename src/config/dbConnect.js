import mongoose from "mongoose";
import config from './config.json' with {type: "json"};

async function connectToDatabase() {
    mongoose.connect(config.database_url);

    return mongoose.connection;
}

export default connectToDatabase;


