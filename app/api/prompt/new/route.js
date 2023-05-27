import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  // get the userId, prompt and tag from the user body.
  const { userId, prompt, tag } = await req.json();

  try {
    // connecting to the database.
    await connectToDB();
    // creating a new prompt
    const newPrompt = new Prompt({ creator: userId, prompt, tag });
    await newPrompt.save();
    console.log("we reach here.");
    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
