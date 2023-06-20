import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// this route gets all the prompts.
export const GET = async (request) => {
  try {
    await connectToDB();

    // getting all the prompts and the creators.
    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", {
      status: 500,
    });
  }
};
