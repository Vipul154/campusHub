import mongoose from "mongoose";
// mongoose is just an elegent mongoDB object modeling for node.js. So it allows to quickly create the data for mongoDB.
// mongoDB is an document oriented database.

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("Missing MongoDB_URL");

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "campusHubProject",
    });

    isConnected = true;
    console.log("MongoDB is connected successfully.");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
};
