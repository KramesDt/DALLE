import "dotenv/config";
import  OpenAI from "openai";


const openai = new OpenAI({
  apikey: process.env.OPENAI_API_KEY
});

export const createPost = async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
    });
    // const image = aiResponse.data.data[0].b64_json;
    const image = aiResponse.data[0].url;
    console.log("IMAGE: ",image);
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log("Error is: ", error.message);
        // res.status(500).send(error);

    // res.status(500).send(error?.response.data.error.message);
  }
};
