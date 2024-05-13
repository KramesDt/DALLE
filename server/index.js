import express from "express";
import cors from "cors";
import "dotenv/config";
import { connect } from "./db/connect.js";
import dalleRouter from "./routes/dalleRoutes.js"
import postRouter from "./routes/postRoutes.js"

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/dalle", dalleRouter);
app.use("/api/post", postRouter);


app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Hello from DALL-E AI" });
});

const start = () => {
  try {
    connect(process.env.DBURL);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on localhost://${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error)
  }
};

start();
