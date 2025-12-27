#!/usr/bin/env python3
import sys
import os
# Get the current working directory as a string
current_directory = os.getcwd()

print(current_directory)

from playwright.sync_api import sync_playwright

def screenshot_element(selector: str, output_dir: str):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(f"http://localhost:5173/posts/{output_dir}")
        page.locator(selector).screenshot(path=f"{current_directory}/public/posts/{output_dir}/thumbnail.png")
        browser.close()

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python screenshot.py <url> <css_selector> <output_dir>")
        sys.exit(1)
    
    screenshot_element(sys.argv[1], sys.argv[2])