import { OpenAI } from "openai";

const openaiApiKey = process.env.OPENAI_API_KEY;

let client = new OpenAI({
    openaiApiKey,
  });

export function generateColor(search) {
  const completions = client.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 100,
    messages: [
      {
        role: "system",
        content: `You are a color palette generating assistant that responds to text prompt for color palettes.
        JSON array length should be 2.`,
      },
      {
        role: "user",
        content: `Convert the following verbal description of a color palette into list of color: ${search}`,
      },
    ],
  });
  return completions;
};


// export async function createReview(fileContent) {
//   const response = await axios.post(
//     'https://api.openai.com/v1/engines/davinci-codex/completions',
//     {
//       prompt: `Review the following code for issues, improvements, and best practices:\n\n${fileContent}`,
//       max_tokens: 150
//     },
//     {
//       headers: {
//         'Authorization': `Bearer ${openaiApiKey}`,
//         'Content-Type': 'application/json'
//       }
//     }
//   );
//   return response.data.choices[0].text.trim();
// }
