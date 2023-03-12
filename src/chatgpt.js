import axios from "axios";

const API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

export async function getChatResponse(prompt) {
  try {
    const response = await axios.post(
      API_URL,
      {
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.5,
        n: 1,
        stop: ["\n"],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
  }
}
