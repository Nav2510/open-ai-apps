import express from 'express';
import { config } from 'dotenv';
import { resolve } from 'path';

import { initOpenAi, renderPalette } from './ai';

// Load environment variables from the parent project's .env file
config({ path: resolve(process.cwd(), '.env') });

// Define the port from environment variables
const port = process.env.PORT || 3001;
const app = express();
const apiKey = process.env['API_KEY'] || '';

initOpenAi(apiKey);

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({extended: true}));

// Set EJS as the view engine
app.set('views', resolve(process.cwd(), './src/views'));
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(resolve(process.cwd(), './src/public')));

// Define a route for the root URL
app.get('/', renderPalette);
app.post('/generate', renderPalette);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Color-palette-generator listening at: http://localhost:${port}`);
});
