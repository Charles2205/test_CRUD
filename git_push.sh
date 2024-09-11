#!/bin/bash

# Navigate to the repository directory
cd "C:\Users\charles\Documents\test_CRUD" || exit

# Define the start and end dates for the range
START_DATE="2024-09-11"
END_DATE="2024-10-09"

# Function to get a random date within the range
random_date() {
  start=$(date -d "$START_DATE" +%s)
  end=$(date -d "$END_DATE" +%s)
  random=$((start + RANDOM % (end - start)))
  date -d "@$random" +"%Y-%m-%dT%H:%M:%S"
}

# Check if there are any changes to commit
if [[ -n $(git status --porcelain) ]]; then
  # Stage all changes
  git add .

  # Commit changes with a random date in the specified range
  COMMIT_DATE=$(random_date)
  GIT_COMMITTER_DATE="$COMMIT_DATE" git commit -m "${1:-'Auto commit'}" --date "$COMMIT_DATE"

  # Push to the main branch on GitHub
  git push origin main
  echo "Changes have been committed and pushed to GitHub with date $COMMIT_DATE."

else
  echo "No changes to commit."
fi
