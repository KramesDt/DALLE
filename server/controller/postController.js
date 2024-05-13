import Post from "../model/postModel.js";

export const createPost = async (req, res) => {
  try {
    const { name, photo, prompt } = req.body;
    const post = await Post.create({
      name,
      photo,
      prompt,
    });

    res.status(200).json({ message: "completed" });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).exec();
    res.status(200).json({ posts });
  } catch (error) {
    res.status(404).json({ error });
  }
};
