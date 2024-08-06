import { Octokit } from "@octokit/rest";
import { generateColor } from "./openai-helper.js";
import fs from 'fs';
import path from 'path';
import { context } from '@actions/github';

// GitHub token is automatically provided by GitHub Actions
const token = process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

// Get the context of the pull request
const { owner, repo } = context.repo;
const pull_number = context.payload.pull_request.number;

console.log(owner, repo, pull_number);
// Fetch the list of files changed in the pull request
octokit.pulls.listFiles({
  owner,
  repo,
  pull_number
}).then(files => {
    console.log(files);
  files.data.forEach(file => {
    const filePath = path.resolve(file.filename);
    console.log('filePath', filePath);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      generateColor(fileContent).then(review => {
        // Post a review comment to the pull request
        console.log(review.choices[0].message.content);
        // octokit.issues.createComment({
        //   owner,
        //   repo,
        //   issue_number: pull_number,
        //   body: `### OpenAI Code Review for ${file.filename}\n${review}`
        // });
      }).catch(err => {
        console.error('Error generating review:', err);
      });
    }
  });
}).catch(err => {
  console.error('Error fetching pull request files:', err);
});
