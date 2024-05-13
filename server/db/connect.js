import mongoose from "mongoose";
import "dotenv/config";

export const connect = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(process.env.DBURL)
    .then(() => {
      console.log("Database is connecetd");
    })
    .catch((err) => {
      console.log(err);
    });
};
