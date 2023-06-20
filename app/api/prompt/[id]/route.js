import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(prompt));
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = request.json();

  try {
    await connectToDB();
    // find the existing prompt with new data.
    const existingPrompt = await Prompt.findById(params?.id);

    if (!existingPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    // update the prompt with new data.
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response("Successfully updated the prompts", { status: 200 });
  } catch (error) {
    return new Response("Error updating Prompt", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // find the prompt with the id and remove it.

    await Prompt.findByIdAndDelete(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
