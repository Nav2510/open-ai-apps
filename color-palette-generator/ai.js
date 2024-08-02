import { OpenAI } from "openai";

let client;
export const initOpenAi = (apiKey) => {
  client = new OpenAI({
    apiKey,
  });
};

const generateColor = (search) => {
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
  return completions;
};

export const renderPalette = (req, res, next) => {
  try {
    const search = req.body?.search || "a beautiful rose petal";
    generateColor(search).then((response) => {
      console.log("---------------------------");
      console.log(response.choices[0].message.content);
      console.log("---------------------------");
      let generatedColors;
      try {
        generatedColors = JSON.parse(response.choices[0].message.content.trim());
      } catch (error) {
        console.log("Invalid JSON response:", error);
        res.redirect("/");
        return;
      }
      res.render("index", {
        title: "Color Palette Generator",
        items: generatedColors,
      });
    });
  } catch (e) {
    console.error(
      "Some error occured with parsing response. Please try again.!!"
    );
    res.redirect("/");
  }
};
