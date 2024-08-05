import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URL =`mongodb://karthik:karthikfordatabaseeasyshareapp@ac-7dxcixq-shard-00-00.svzgtlj.mongodb.net:27017,ac-7dxcixq-shard-00-01.svzgtlj.mongodb.net:27017,ac-7dxcixq-shard-00-02.svzgtlj.mongodb.net:27017/?ssl=true&replicaSet=atlas-h93e9w-shard-0&authSource=admin&retryWrites=true&w=majority&appName=EasyShareApp`;
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;