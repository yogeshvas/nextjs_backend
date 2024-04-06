import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDb connected");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDb connection error, please make sure connection is running",
        err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wroing in connecting the database");
    console.log(error);
  }
}
