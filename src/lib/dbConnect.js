const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;
const dbName = process.env.DBNAME;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = (cName) => {
  return client.db(dbName).collection(cName);
};
