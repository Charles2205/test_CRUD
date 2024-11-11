#!/bin/bash

# Set the local repository path
REPO_PATH="C:/Users/charles/Documents/test_CRUD"
# Set your GitHub repository URL
REMOTE_URL="https://github.com/Charles2205/test_CRUD.git"

# Navigate to the repository path
cd "$REPO_PATH" || exit

# Start and end dates
START_DATE="2024-09-10"
END_DATE="2024-11-11"

# Convert dates to seconds for comparison
start_sec=$(date -d "$START_DATE" +%s)
end_sec=$(date -d "$END_DATE" +%s)

# Loop over each day from start to end date
for (( sec=start_sec; sec<=end_sec; sec+=86400 )); do
    # Convert seconds back to date
    current_date=$(date -d "@$sec" +%Y-%m-%d)

    # Create or modify a file to ensure there's something to commit
    echo "Auto commit for $current_date" >> "$REPO_PATH/daily_log.txt"

    # Stage all changes
    git add .

    # Commit with the current date
    git commit -m "Auto commit on $current_date"

    # Push changes to the GitHub repository
    git push "$REMOTE_URL" main

    # Pause for a second to prevent any race conditions with git push
    sleep 1
done

echo "All commits from $START_DATE to $END_DATE have been pushed."
