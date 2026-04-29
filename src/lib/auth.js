import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient('mongodb+srv://next-pixen:MoqQoRTJe297mT3Q@cluster0.peiv3ql.mongodb.net/?appName=Cluster0');
const db = client.db('next-pixen');

export const auth = betterAuth({
 emailAndPassword: { 
    enabled: true, 
  }, 
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});