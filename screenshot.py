#!/usr/bin/env python3
import sys
from playwright.sync_api import sync_playwright

def screenshot_element(url: str, selector: str, output_dir: str):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(url)
        page.locator(selector).screenshot(path=f"{output_dir}/thumbnail.png")
        browser.close()

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python screenshot.py <url> <css_selector> <output_dir>")
        sys.exit(1)
    
    screenshot_element(sys.argv[1], sys.argv[2], sys.argv[3])