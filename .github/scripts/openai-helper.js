import axios from 'axios';

const openaiApiKey = process.env.OPENAI_API_KEY;

console.log('openai_key', openaiApiKey);

export async function createReview(fileContent) {
  const response = await axios.post(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      prompt: `Review the following code for issues, improvements, and best practices:\n\n${fileContent}`,
      max_tokens: 150
    },
    {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data.choices[0].text.trim();
}
