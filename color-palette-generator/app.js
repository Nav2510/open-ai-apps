import express from 'express';
import { config } from 'dotenv';
import { resolve } from 'path';

import { initOpenAi, renderPalette } from './ai.js';

// Load environment variables from the parent project's .env file
config({ path: resolve(process.cwd(), '../.env') });

// Define the port from environment variables
const port = process.env.PORT;
const app = express();

initOpenAi(process.env.API_KEY);

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({extended: true}));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(resolve(process.cwd(), 'public')));

// Define a route for the root URL
app.get('/', renderPalette);
app.post('/generate', renderPalette);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Color-palette-generator listening at: http://localhost:${port}`);
});
