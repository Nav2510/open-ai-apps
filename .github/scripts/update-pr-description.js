import { Octokit } from "@octokit/rest";
import { context } from "@actions/github";
import { createSummary } from "./openai-helper.js";

// Function to update PR description
export async function updatePRDescription(filePath, content) {
  // Get the context of the pull request
  const token = process.env.GITHUB_TOKEN;
  const { owner, repo } = context.repo;
  const prNumber = context.payload.pull_request.number;

  const octokit = new Octokit({
    auth: token,
  });

  const response  = await createSummary(content);
  const summary = response.choices[0].message.content;

  // Fetch the current PR description
  const { data: pr } = await octokit.pulls.get({
    owner,
    repo,
    pull_number: prNumber,
  });

  const updatedBody = `${filePath}\n${summary}\n\n${pr.body}`;

  // Update the PR description
  await octokit.pulls.update({
    owner,
    repo,
    pull_number: prNumber,
    body: updatedBody,
  });

  console.log(`Updated PR #${prNumber} description with summary.`);
}