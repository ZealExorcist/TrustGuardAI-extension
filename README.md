# Web Safety Analyzer

![Web Safety Analyzer Logo](images/icon128.png)

A browser extension that analyzes web content for potentially harmful content and protects users by identifying and redacting cyberbullying, hate speech, threats, and other concerning material.

## Features

- **Content Safety Analysis**: Automatically scans page content using Gemini AI to identify harmful text
- **Safety Score**: Provides a safety rating from 1-100 to indicate overall page safety
- **Smart Redaction**: Automatically redacts potentially harmful content from view
- **Content Preview**: Hover over redacted content to preview what's hidden
- **Unredaction**: Right-click redacted content to reveal it when needed
- **Detailed Reports**: View comprehensive safety analysis with issue details
- **Export Capability**: Export reports in HTML format for documentation or reporting purposes
- **Site-specific Toggle**: Enable or disable the extension on a per-site basis
- **Dark Mode Support**: Automatically adapts to your browser's light/dark theme preferences

## Installation

### Chrome/Edge/Brave Installation
1. Download or clone this repository
2. Open your browser and navigate to the extensions page:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
   - Brave: `brave://extensions/`
3. Enable "Developer mode" at the top-right corner
4. Click "Load unpacked" and select the directory containing this extension
5. The Web Safety Analyzer extension should now appear in your browser toolbar

## How to Use

### Basic Usage
1. Browse to any webpage
2. The extension will automatically analyze the page content after it loads
3. A notification will display the safety score in the top-right corner of the page
4. Potentially harmful content will be automatically redacted

### Working with Redacted Content
- **Preview Content**: Hover your mouse over any redacted text to see what's hidden
- **Reveal Content**: Right-click on redacted text and select "Reveal Redacted Content"
- **See Analysis Reason**: View detailed report to understand why content was flagged

### Extension Controls
Click the extension icon in your browser toolbar to:
- **Toggle Extension**: Enable or disable the extension for the current website
- **View Status**: See the current safety status and score
- **Analyze Page**: Manually trigger a new analysis of the current page
- **View Report**: See detailed safety analysis with specific issues identified
- **Export Report**: Generate an HTML report for documentation or reporting

## Privacy & Data Usage

This extension:
- Uses Gemini AI to analyze web page content
- Does not store or transmit your browsing history
- Only sends page content text to the AI for analysis
- Processes all redaction locally in your browser
- Stores only site-specific preferences in browser storage

## Technical Details

- Built with vanilla JavaScript, HTML, and CSS
- Uses Chrome Extension Manifest V3
- Leverages Google's Gemini AI for content analysis
- Content redaction happens entirely client-side

## Credits

- Powered by [Gemini AI](https://ai.google.dev/)
- Icons and design elements from Google Material Design

## License

This project is licensed under the MIT License - see the LICENSE file for details.