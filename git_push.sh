#!/bin/bash

# Navigate to the repository directory
cd "C:\Users\charles\Documents\test_CRUD" || exit

# Define the start and end dates for the range
START_DATE="2024-09-11"
END_DATE="2024-10-09"

# Convert the start and end dates to seconds since epoch
current_date=$(date -d "$START_DATE" +%s)
end_date=$(date -d "$END_DATE" +%s)

# Loop through each day in the date range
while [[ $current_date -le $end_date ]]; do
  # Format the current date for the commit
  COMMIT_DATE=$(date -d "@$current_date" +"%Y-%m-%dT%H:%M:%S")

  # Check if there are any changes to commit
  if [[ -n $(git status --porcelain) ]]; then
    # Stage all changes
    git add .

    # Commit changes with the current date
    GIT_COMMITTER_DATE="$COMMIT_DATE" git commit -m "${1:-'Auto commit on $COMMIT_DATE'}" --date "$COMMIT_DATE"

    # Push to the main branch on GitHub
    git push origin main
    echo "Changes committed and pushed to GitHub with date $COMMIT_DATE."
  else
    echo "No changes to commit on $COMMIT_DATE."
  fi

  # Move to the next day
  current_date=$((current_date + 86400)) # Add 86400 seconds (1 day)
done
