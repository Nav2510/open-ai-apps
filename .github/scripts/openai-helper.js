import { OpenAI } from "openai";

const openaiApiKey = process.env.OPENAI_API_KEY;

let client = new OpenAI({
    openaiApiKey,
  });

export function createReview(fileContent) {
  const completions = client.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 1000,
    // Review the following code for issues, improvements, and best practices:\n\n${fileContent}
    messages: [
      {
        role: "system",
        content: `You are a code reviewer assistant. You will provide the issues, improvements and best practices to the code provided to you.
        You will also provide the links for any best practices that can be followed.
        `,
      },
      {
        role: "user",
        content: `Review the given code: ${fileContent}`,
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
