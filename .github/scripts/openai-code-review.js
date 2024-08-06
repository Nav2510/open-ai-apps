const { Octokit } = require("@octokit/rest");
const { createReview } = require("./openai-helper");
const fs = require('fs');
const path = require('path');

// GitHub token is automatically provided by GitHub Actions
const token = process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

// Get the context of the pull request
const context = require('@actions/github').context;
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
