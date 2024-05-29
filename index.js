import "dotenv/config";

import OpenAI from "openai";

const openai = new OpenAI();

openai.chat.completions.create({
  messages: [
    {
      role: "system",
      content:
        "You are an AI assistant, answer any questions to the best of your ability.",
    },
  ],
  model: "gpt-4o",
});
