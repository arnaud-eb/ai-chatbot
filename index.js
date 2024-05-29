import { openai } from "./openai.js";

const results = await openai.chat.completions.create({
  messages: [
    {
      role: "system",
      content:
        "You are an AI assistant, answer any questions to the best of your ability.",
    },
    {
      role: "user",
      content: "Hi! how is the weather in summer?",
    },
  ],
  model: "gpt-4o",
});

console.log(results.choices);
