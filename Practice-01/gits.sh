#!/bin/bash
git status
echo "enter file name:"
read file
git add $file

echo "enter commit message"
read msg
git commit -m "$msg"

git push origin main