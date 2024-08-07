import { Octokit } from "@octokit/rest";
import fs from "fs";
import path from "path";
import { context } from "@actions/github";
import { minimatch } from "minimatch";

import { createLineSpecificReview, createFileReview } from "./openai-helper.js";

const LINE_COMMENTS_ENABLED = true;

// GitHub token is automatically provided by GitHub Actions
const token = process.env.GITHUB_TOKEN;
const includedFiles = process.env.SRC_FOLDER_PATTERN;
const octokit = new Octokit({ auth: token });

// Get the context of the pull request
const { owner, repo } = context.repo;
const pull_number = context.payload.pull_request.number;

// Fetch the list of files changed in the pull request
octokit.pulls
  .listFiles({
    owner,
    repo,
    pull_number,
  })
  .then((files) => {
    files.data.forEach((file) => {
      const filePath = path.resolve(file.filename);
      if (!isIncludedFilePath(filePath, includedFiles)) {
        return;
      }
      console.log(filePath);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, "utf8");
        console.log('LINE_COMMENT_ENABLED', LINE_COMMENTS_ENABLED);
        if (LINE_COMMENTS_ENABLED) {
          createLineComments(file, content)
        }
        createPRComment(content);
      }
    });
  })
  .catch((err) => {
    console.error("Error fetching pull request files:", err);
  });

function createLineComments(file, fileContent) {
  createLineSpecificReview(fileContent).then((reviewRes) => {
    const reviewList = reviewRes.choices[0].message.content;
    console.log('reviewList', reviewList);
    reviewList.forEach((review) => {
      octokit.pulls.createReviewComment({
        owner: owner,
        repo: repo,
        pull_number: pull_number,
        path: file.filename,
        line: review.line,
        body: `
        ${review.suggested_change}\n
        Explantion: ${review.explantions}
        `
      })
    })
  })
}
 
function createPRComment(fileContent) {
  createFileReview(fileContent)
    .then(reviewRes => {
      // Post a review comment to the pull request
      octokit.issues.createComment({
        owner,
        repo,
        issue_number: pull_number,
        body: `### OpenAI Code Review for ${file.filename}\n${reviewRes.choices[0].message.content}`,
      });
    })
    .catch((err) => {
      console.error("Error generating review:", err);
    });
}

function isIncludedFilePath(filePath, patterns = "**/*.js") {
  const patternList = patterns.split(",");
  return patternList.reduce((prev, pattern) => {
    return prev || minimatch(filePath, pattern.trim());
  }, false);
}
