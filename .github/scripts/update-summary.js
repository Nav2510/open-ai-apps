import { Octokit } from "@octokit/rest";
import { context } from "@actions/github";

// Function to update PR description
async function updatePRDescription() {
  // Get the context of the pull request
  const token = process.env.GITHUB_TOKEN;
  const { owner, repo } = context.repo;
  const prNumber = context.payload.pull_request.number;
  const summary = "This is summary updated";

  const octokit = new Octokit({
    auth: token,
  });

  // Fetch the current PR description
  const { data: pr } = await octokit.pulls.get({
    owner,
    repo,
    pull_number: prNumber,
  });

  const updatedBody = `${summary}\n\n${pr.body}`;

  // Update the PR description
  await octokit.pulls.update({
    owner,
    repo,
    pull_number: prNumber,
    body: updatedBody,
  });

  console.log(`Updated PR #${prNumber} description with summary.`);
}

updatePRDescription().catch((error) => {
  console.error(`Failed to update PR description: ${error.message}`);
  process.exit(1);
});
