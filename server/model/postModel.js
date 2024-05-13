import mongoose from "mongoose";

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
