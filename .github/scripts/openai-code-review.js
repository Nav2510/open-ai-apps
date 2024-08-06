import { Octokit } from "@octokit/rest";
import { createReview } from "./openai-helper.js";
import fs from 'fs';
import path from 'path';
import { context } from '@actions/github';

// GitHub token is automatically provided by GitHub Actions
const token = process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

console.log('github_token', token);
console.log('openai_key', process.env.OPENAI_API_KEY);

// Get the context of the pull request
const { owner, repo } = context.repo;
const pull_number = context.payload.pull_request.number;

// Fetch the list of files changed in the pull request
octokit.pulls.listFiles({
  owner,
  repo,
  pull_number
}).then(files => {
  files.data.forEach(file => {
    const filePath = path.resolve(file.filename);
    console.log('filePath', filePath);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      createReview(fileContent).then(review => {
        // Post a review comment to the pull request
        octokit.issues.createComment({
          owner,
          repo,
          issue_number: pull_number,
          body: `### OpenAI Code Review for ${file.filename}\n${review}`
        });
      }).catch(err => {
        console.error('Error generating review:', err);
      });
    }
  });
}).catch(err => {
  console.error('Error fetching pull request files:', err);
});
