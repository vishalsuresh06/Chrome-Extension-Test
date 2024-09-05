# Chrome Extension: Content Replacer

This is a simple Chrome extension designed to replace specific elements on any webpage with predetermined text.

## Features

- Replaces all images with predefined text.
- Replaces `<h1>`, `<h2>`, and `<p>` elements with predefined text.

## How It Works

Once installed, this extension scans webpages for the following elements:
- **Images (`<img>`)**: Replaces all images with a predefined text placeholder.
- **Headings (`<h1>`, `<h2>`)**: Replaces all `<h1>` and `<h2>` tags with custom text.
- **Paragraphs (`<p>`)**: Replaces all paragraph elements with your selected text.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle in the top-right corner.
4. Click "Load unpacked" and select the folder containing this extension.
5. The extension is now installed and active!

## Usage

- Simply open any webpage, and the extension will automatically replace images, headings, and paragraphs with the predetermined text.
- You can customize the text by editing the extension's script.

## Notes

- This extension is for testing purposes and may not function correctly on all websites.
- You can modify the predefined text to suit your needs in the extension's script.
