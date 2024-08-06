import { OpenAI } from "openai";
import { APIPromise } from "openai/core";
import { ChatCompletion } from "openai/resources/chat";

const openaiApiKey = process.env.OPENAI_API_KEY;

let client = new OpenAI({
  openaiApiKey,
});

const completions = client.chat.completions.create({
  model: "gpt-4o-mini",
  max_tokens: 200,
  messages: [
    {
      role: "system",
      content: `You are a color palette generating assistant that responds to text prompt for color palettes.
        JSON array length should be between 2 and 8.`,
    },
    {
      role: "user",
      content:
        "Convert the following verbal description of a color palette into list of color: desert sunset",
    },
    {
      role: "assistant",
      content: '["#F2C447", "#F76218", "#FF1D68", "#B10065"]',
    },
    {
      role: "user",
      content:
        "Convert the following verbal description of a color palette into list of color: beautiful rose petals",
    },
    {
      role: "assistant",
      content: '["#C21E56", "#DC143C", "#9B111E", "#FF2400", "#D2042D"]',
    },
    {
      role: "user",
      content: `Convert the following verbal description of a color palette into list of color: ${search}`,
    },
  ],
});

completions.then((res) => {
    console.log(res.choices[0].message.content);
})

// export async function createReview(fileContent) {
//   const response = await axios.post(
//     "https://api.openai.com/v1/engines/davinci-codex/completions",
//     {
//       prompt: `Review the following code for issues, improvements, and best practices:\n\n${fileContent}`,
//       max_tokens: 150,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${openaiApiKey}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   return response.data.choices[0].text.trim();
// }
