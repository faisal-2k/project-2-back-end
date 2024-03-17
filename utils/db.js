require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
var uri = `mongodb://${process.env.USER_NAME}:${process.env.USER_PASS}@ac-xuepfyf-shard-00-00.clcysqq.mongodb.net:27017,ac-xuepfyf-shard-00-01.clcysqq.mongodb.net:27017,ac-xuepfyf-shard-00-02.clcysqq.mongodb.net:27017/?ssl=true&replicaSet=atlas-q3ra8i-shard-0&authSource=admin&retryWrites=true&w=majority&appName=project-2`;
const client = new MongoClient(uri, {  useNewUrlParser: true,  useUnifiedTopology: true,  serverApi: ServerApiVersion.v1});


async function connectDB(databaseName) {
    try {
        await client.connect();
        return client.db(databaseName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = connectDB;
