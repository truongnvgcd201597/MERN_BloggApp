const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://truongnvgcd201597:maverickong962002@blogapp.zjdaruo.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

class DatabaseConnect {
  constructor() {
    this.client = new MongoClient(uri);
    this.db = this.client.db("Blog");
  }
  async connect() {
    try {
      await this.client.connect();
      await this.db.command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } catch (err) {
      console.error(err);
    }
  }

  get usersCollection() {
    return this.db.collection("users");
  }
}

const databaseConnect = new DatabaseConnect();
module.exports = databaseConnect;
