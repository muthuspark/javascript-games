#!/bin/bash

quarto render
cp CNAME docs/CNAME
git add .
current_date=$(date +"%Y-%m-%d")
git commit -m "release $current_date"
git push