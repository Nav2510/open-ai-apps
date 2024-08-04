# Color Palette Generator

The **Color Palette Generator** is a simple web application that generates beautiful color palettes. It uses artificial intelligence to suggest harmonious color combinations based on user input.

## Features

- **Palette Generation**: Enter a context or any text in input, and the AI will create a palette of complementary colors.
- **Export Options**: Copy the hex code provided in each of the color in palette generated.

## Installation

1. This project is a sub-project of project suite, clone parent repository:
   ```bash
   git clone https://github.com/Nav2510/open-ai-apps.git
   cd open-ai-apps
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root.

4. Start the dev color-palette-generator server:
   ```bash
   npm run dev:palette
   ```

### Environment Variables

1. Copy the `.env.example` file to a new file named `.env`:
    ```sh
    cp .env.example .env
    ```

2. Fill in the required environment variables in the `.env` file:
    ```dotenv
    PORT=3001
    API_KEY=your-api-key-here
    ```

3. Save the `.env` file.

## Usage

1. Open your browser and navigate to `http://localhost:3001`.
2. Enter any text or context (e.g., "blue color shades", "google logo colors").
3. Click "Submit"
4. Explore the suggested color.
6. Get your favorite palette color.

## Contributing

Contributions are welcome! If you find a bug or have an idea for improvement, feel free to open an issue or submit a pull request.

## Credits

- AI integration powered by OpenAI.
- Built with Express.js, EJS, and love.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.