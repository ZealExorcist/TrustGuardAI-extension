# Trust Guard AI

![Trust Guard AI Logo](images/icon128.png)

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

### Chrome Web Store Installation (Recommended)
1. Visit the [Trust Guard AI Chrome Web Store page](https://chrome.google.com/webstore/detail/trust-guard-ai/extensionid)
2. Click the "Add to Chrome" button
3. Review the permissions and click "Add extension" when prompted
4. The Trust Guard AI extension will appear in your browser toolbar

### Manual Installation (Advanced)
1. Download or clone this repository
2. Add your api key in the .env file
3. Open your browser and navigate to the extensions page:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
   - Brave: `brave://extensions/`
4. Enable "Developer mode" at the top-right corner
5. Click "Load unpacked" and select the directory containing this extension
6. The Trust Guard AI extension should now appear in your browser toolbar

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

## Chrome Web Store Description

The following extended description is provided for Chrome Web Store submission:

---

# Trust Guard AI: Web Content Safety Analyzer

## Overview

Trust Guard AI is an advanced browser extension designed to protect users from harmful online content through real-time analysis and intelligent content filtering. Using state-of-the-art AI technology from Google's Gemini platform, the extension scans web pages for potentially harmful content, including cyberbullying, hate speech, threats, and other concerning materials. Trust Guard AI provides a comprehensive safety rating system, automated content redaction, and detailed reports to help users navigate the web safely.

The extension offers a balanced approach to online safety by allowing users to preview redacted content when needed while maintaining protection by default. With its intuitive interface, customizable settings, and thoughtful design, Trust Guard AI is suitable for individual users concerned about online safety, parents monitoring children's browsing, educators creating safe learning environments, and organizations maintaining professional online spaces.

## Detailed Features

### Content Safety Analysis

Trust Guard AI employs advanced natural language processing through Google's Gemini 1.5 Pro model to analyze web page content with exceptional accuracy. The system evaluates text for multiple categories of potentially harmful content:

- **Cyberbullying**: Identifies personal attacks, degrading language, and intimidation
- **Hate Speech**: Detects discriminatory content targeting race, gender, religion, sexuality, or other protected characteristics
- **Threats**: Recognizes explicit or implied threats of violence or harm
- **Self-Harm Content**: Identifies content promoting or discussing self-harm behaviors
- **Misinformation**: Flags potentially false or misleading information
- **Adult Content**: Detects sexually explicit or inappropriate material
- **Substance Abuse**: Identifies content promoting illegal drug use or substance abuse
- **Personal Information**: Detects exposed personal identifiable information
- **Extremism**: Recognizes violent extremist content or radicalization materials

The analysis engine processes content contextually, understanding nuances in language that might indicate harmful intent beyond simply identifying keywords. This sophisticated approach minimizes false positives while maintaining high detection accuracy.

### Safety Score System

Every analyzed page receives a comprehensive safety score from 1-100:

- **80-100**: Safe - Content appears to be free from harmful material
- **60-79**: Moderate - Some potentially concerning content detected
- **0-59**: Potentially Unsafe - Significant harmful content detected

The score is calculated based on multiple factors:
- The quantity of concerning content detected
- The severity of detected issues
- The context in which concerning terms appear
- The overall proportion of problematic to non-problematic content

A visual indicator in the extension popup and on the page displays this score with color-coding (green, yellow, or red) for instant assessment of a page's safety.

### Smart Content Redaction

Trust Guard AI implements intelligent content redaction that automatically obscures potentially harmful content from view:

- **Precise Targeting**: Only specific harmful segments are redacted rather than entire paragraphs or sections
- **Visual Distinction**: Redacted content appears as black bars (adjusts to light/dark mode) for clear identification
- **Content Preview**: Users can hover over redacted content to briefly preview what's hidden
- **Context Preservation**: Surrounding content remains visible to maintain comprehension
- **Reason Indication**: Tooltips explain why specific content was flagged when hovering
- **Manual Control**: Right-click options allow users to permanently reveal specific redacted segments when needed

The redaction system is designed to be minimally intrusive while maximizing protection, preserving the overall reading experience while shielding users from harmful content.

### Detailed Safety Reports

Trust Guard AI generates comprehensive safety reports that provide in-depth information about detected issues:

- **Issue Categorization**: Organizes detected problems by type and severity
- **Specific Examples**: Lists exact text segments that were flagged
- **Contextual Explanation**: Provides reasoning for why each segment was identified
- **Safety Metrics**: Includes overall safety score and category-specific assessments
- **Time Stamping**: Records when analysis was performed for documentation purposes
- **Visualizations**: Includes charts and graphs showing the distribution of issues
- **Recommendations**: Suggests safety measures based on detected content

These reports can be viewed directly in the browser or exported for external reference, making them valuable for documentation, education, and reporting purposes.

### Export Capability

Trust Guard AI allows users to export comprehensive safety reports in professionally formatted HTML:

- **Complete Data**: Includes all analyzed content, issues, and safety scores
- **Professional Formatting**: Clean, well-organized layout suitable for official use
- **Time and Date Stamping**: Documents exactly when the report was generated
- **URL Documentation**: Records the specific web address that was analyzed
- **System Information**: Includes browser and extension version details
- **Evidence Preservation**: Maintains original problematic content for reference
- **Print-Friendly Design**: Optimized for both digital sharing and physical printing

This feature is particularly valuable for:
- Parents documenting concerning online content
- Educators monitoring classroom-appropriate materials
- Workplace safety compliance
- Law enforcement documentation
- Research and analysis purposes

### Site-specific Controls

Trust Guard AI provides granular control over which websites the extension analyzes:

- **Per-Site Toggle**: Enable or disable the extension for specific domains
- **Persistent Settings**: Site preferences are remembered across browsing sessions
- **Quick Access**: Toggle controls accessible directly from the extension popup
- **Status Indicator**: Clear visual confirmation of whether protection is active
- **Default Behavior**: Option to set global default (enabled/disabled) for new sites
- **Bulk Management**: Import/export site lists for managing multiple preferences

This allows users to customize their protection based on trusted sites and personal needs, balancing safety with convenience.

### Dark Mode Support

The extension features full dark mode integration for visual comfort in all lighting conditions:

- **Automatic Detection**: Recognizes browser/system dark mode settings
- **Seamless Transition**: Smoothly adapts all extension elements to match theme
- **Consistent Design**: Maintains readability and visual hierarchy in both modes
- **Reduced Eye Strain**: Optimized contrast ratios for comfort during extended use
- **Battery Efficiency**: Dark mode helps conserve battery on OLED/AMOLED displays

All UI elements—including the popup interface, notifications, reports, and redacted content—adapt to the user's preferred visual mode.

### API Integration Options

For users who require custom analysis capabilities, Trust Guard AI offers flexible API integration:

- **Custom API Keys**: Enter your own Google Gemini API key for personalized usage
- **Rate Limit Control**: Manage analysis frequency based on your API tier
- **Default Fallback**: Built-in API key available for immediate use (with limitations)
- **Status Monitoring**: Visual indicators of API connection health
- **Usage Tracking**: Option to monitor your API credit consumption
- **Error Handling**: Clear notifications when API issues occur

This flexibility allows for both casual use with the built-in capabilities and professional integration with custom API accounts for enhanced performance.

## Privacy & Data Handling

### Privacy-First Design

Trust Guard AI is built with privacy as a core principle:

- **Local Processing**: Whenever possible, content is processed directly in your browser
- **Minimal Data Transmission**: Only the text content needed for analysis is sent to the AI service
- **No User Tracking**: The extension does not collect browsing history or user identification
- **No Data Retention**: Analysis results are temporary and not stored on external servers
- **Transparent Operation**: Clear documentation of all data handling practices
- **No Monetization of Data**: User data is never sold or shared with third parties
- **API Security**: All communication with AI services uses secure, encrypted connections

The extension only requests the minimum permissions necessary to function effectively, respecting user privacy while providing robust protection.

### Data Usage Transparency

When using Trust Guard AI, here's exactly what happens with your data:

1. **Page Content**: The text content of web pages is temporarily processed for analysis. This includes visible text, comments, and user-generated content. No form data, passwords, or sensitive information is accessed.

2. **API Interactions**: Text is sent to Google's Gemini AI via secure API calls for analysis. These transmissions follow Google's data handling policies.

3. **Local Storage**: Your extension settings, site preferences, and API keys are stored locally in your browser using Chrome's storage API.

4. **Report Generation**: When exporting reports, data is formatted into HTML files saved directly to your device without intermediate server storage.

5. **AI Processing**: Content analysis is performed by the AI model and results are returned without persistent storage of your browsing data.

The extension is designed to function without requiring account creation, login, or any form of user identification.

## Technical Implementation

### Architecture Overview

Trust Guard AI utilizes a modern extension architecture following Chrome Extension Manifest V3 guidelines:

- **Background Service Worker**: Handles API communication, context menu creation, and extension lifecycle management
- **Content Scripts**: Interact with web page content for analysis, redaction, and UI overlay
- **Popup Interface**: Provides user controls and displays analysis results
- **Storage API**: Manages persistent settings and site preferences
- **Context Menu Integration**: Enables right-click functionality for redacted content

This architecture ensures efficient performance while maintaining separation of concerns for security and maintainability.

### API Integration

The extension leverages Google's Gemini 1.5 Pro AI model through a well-structured API integration:

- **Prompt Engineering**: Carefully crafted prompts guide the AI to provide consistent, actionable safety analysis
- **Response Parsing**: Structured handling of AI responses for reliable data extraction
- **Error Management**: Comprehensive error handling for API limitations, rate limits, and service disruptions
- **Asynchronous Processing**: Non-blocking API calls maintain browser responsiveness
- **Configurable Endpoints**: Supports custom API endpoints for enterprise deployments

This implementation provides enterprise-grade AI analysis capabilities within a browser extension format.

### Performance Optimization

Trust Guard AI is engineered for efficient performance:

- **Delayed Initialization**: Analysis begins after page content has fully loaded
- **Progressive Enhancement**: Core browser functionality remains unaffected during analysis
- **Resource Management**: Careful memory usage and garbage collection
- **Batched Processing**: Content analysis is performed in optimized batches
- **Throttled API Calls**: Rate limiting prevents excessive API usage
- **Cached Results**: Results are cached to prevent redundant analysis of unchanged content
- **Efficient DOM Manipulation**: Minimized reflows and repaints for UI updates

These optimizations ensure the extension provides protection without significantly impacting browsing speed or device performance.

### Cross-Browser Compatibility

While primarily designed for Chrome, the extension's architecture supports cross-browser compatibility:

- **Standards Compliance**: Uses standardized JavaScript, HTML, and CSS
- **Polyfill Integration**: Includes fallbacks for browser-specific features
- **Responsive Design**: Adapts to different browser UI layouts and dimensions
- **Feature Detection**: Gracefully handles missing browser capabilities
- **Consistent Experience**: Maintains uniform functionality across supported browsers

This design approach provides consistent protection regardless of the user's preferred browser environment.

## User Experience

### Intuitive Interface

Trust Guard AI features a carefully designed user interface that prioritizes clarity and ease of use:

- **Consistent Visual Language**: Uniform color coding, iconography, and layout patterns
- **Progressive Disclosure**: Information is presented in layers, from simple indicators to detailed reports
- **Contextual Controls**: Functions appear when and where they're most relevant
- **Status Visibility**: Clear indicators of the extension's current state and analysis results
- **Minimal Interference**: Unobtrusive design that complements rather than disrupts browsing
- **Accessibility Compliance**: Support for screen readers, keyboard navigation, and high-contrast modes
- **Responsive Layouts**: All interfaces adapt to different screen sizes and zoom levels

This design philosophy ensures that users of all technical levels can effectively utilize the extension's capabilities.

### Notification System

Trust Guard AI implements a thoughtful notification system to keep users informed without overwhelming them:

- **Initial Analysis**: Brief notification when page analysis completes, showing safety score
- **Safety Warnings**: More prominent alerts when significant safety concerns are detected
- **Content Changes**: Updates when new content appears on dynamic pages
- **Auto-Dismissal**: Temporary notifications that automatically fade after viewing
- **Action-Oriented**: Clear guidance on what actions users can take when issues are found
- **Priority-Based**: Visual styling reflects the importance and urgency of different notifications
- **Non-Disruptive**: Positioned to provide information without blocking content

This balanced approach keeps users informed about safety status without creating notification fatigue.

### Customization Options

The extension offers various customization options to adapt to individual preferences:

- **Analysis Sensitivity**: Adjust thresholds for content flagging
- **Redaction Behavior**: Control how and when content is automatically redacted
- **Notification Level**: Set the frequency and detail level of safety alerts
- **Default Actions**: Configure whether new sites are automatically analyzed
- **Visual Preferences**: Customize the appearance of extension elements
- **Report Content**: Select what information is included in detailed reports
- **API Configuration**: Set custom API endpoints and credentials

These options allow users to tailor the extension to their specific safety needs and browsing habits.

## Use Cases

### Personal Safety

For individual users concerned about encountering harmful content:

- **Content Filtering**: Automatically redact disturbing, hateful, or traumatic content
- **Trigger Warnings**: Get advance notice of potentially upsetting material
- **Safe Browsing**: Identify unsafe websites before engaging with content
- **Mental Health Protection**: Reduce exposure to negative content that affects wellbeing
- **Information Verification**: Identify potential misinformation or manipulated media
- **Learning Tool**: Understand what makes certain content problematic
- **Documentation**: Save evidence when encountering concerning material

Trust Guard AI acts as a personal filter that helps users maintain control over the content they consume.

### Parental Controls

For parents monitoring children's online activities:

- **Age-Appropriate Filtering**: Shield children from adult content, violence, and inappropriate language
- **Bullying Detection**: Identify potential cyberbullying on social platforms
- **Activity Reports**: Generate logs of safety issues encountered during browsing
- **Conversation Starters**: Use reports as foundations for discussions about online safety
- **Educational Support**: Ensure research sources are appropriate and accurate
- **Graduated Protection**: Adjust settings as children mature and develop media literacy
- **Evidence Collection**: Document concerning interactions when intervention is needed

These capabilities help parents create safer online environments while teaching children about responsible internet use.

### Educational Environments

For educators and educational institutions:

- **Classroom Safety**: Ensure educational resources are appropriate for students
- **Research Guidance**: Help students identify reliable versus problematic sources
- **Media Literacy**: Demonstrate how to recognize harmful or manipulated content
- **Safe Discussion Spaces**: Monitor online forums and discussion boards for inappropriate content
- **Documentation**: Maintain records of content issues for administrative purposes
- **Policy Enforcement**: Support implementation of school online safety policies
- **Inclusive Environments**: Reduce exposure to content that may alienate or harm students

Trust Guard AI supports educational goals while helping maintain appropriate digital learning environments.

### Workplace Settings

For professional environments:

- **Policy Compliance**: Ensure browsed content adheres to workplace acceptable use policies
- **Hostile-Free Environment**: Reduce exposure to content that could create hostile work conditions
- **Research Protection**: Allow necessary research into sensitive topics with appropriate safeguards
- **Client Interaction**: Ensure client-facing presentations and materials are appropriate
- **Documentation**: Maintain records of policy violations when they occur
- **Productivity Support**: Reduce distractions from inappropriate content
- **Professional Development**: Support safe exploration of industry content and resources

These features help organizations maintain professional standards while allowing necessary access to online resources.

### Content Moderation

For those responsible for monitoring online communities:

- **Automated Screening**: Quickly identify potentially problematic user-generated content
- **Consistent Evaluation**: Apply uniform standards to content review processes
- **Evidence Preservation**: Document policy violations with timestamped reports
- **Efficiency Tools**: Focus human review on content flagged by the AI
- **Pattern Recognition**: Identify concerning trends across multiple posts or users
- **Rapid Response**: Quickly assess newly posted content for immediate action if needed
- **Documentation**: Generate reports suitable for moderation team handoff

Trust Guard AI can significantly improve moderation efficiency while maintaining thorough content oversight.

## Installation and Setup

### Chrome Installation

1. Visit the Chrome Web Store and search for "Trust Guard AI"
2. Click "Add to Chrome" to install the extension
3. When prompted, review the requested permissions and click "Add extension"
4. The Trust Guard AI icon will appear in your browser toolbar
5. Click the icon to access the extension popup and begin using the features

### Manual Installation (For Developers)

For testing or customization purposes:

1. Download the source code from the official repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top-right corner
4. Click "Load unpacked" and select the directory containing the extension files
5. The extension will be installed in development mode

### Initial Configuration

After installation, consider these initial setup steps:

1. **API Key Setup** (Optional):
   - Click the settings icon in the extension popup
   - Enter your personal Google Gemini API key if you have one
   - Click "Save API Key"

2. **Site Preferences**:
   - Visit websites where you want to enable or disable the extension
   - Open the extension popup and use the toggle switch to set your preference for each site

3. **Test Run**:
   - Browse to a web page with varied content
   - Click "Analyze Page" in the extension popup
   - Review the safety analysis results to understand how the extension works

These steps will prepare the extension for regular use according to your preferences.

## Usage Guide

### Everyday Browsing

For normal day-to-day web browsing:

1. Navigate to any web page as you normally would
2. Trust Guard AI will automatically analyze the page after it fully loads
3. A brief notification will appear showing the safety score
4. Any potentially harmful content will be automatically redacted
5. Continue browsing with protection active

The extension is designed to work unobtrusively in the background, only becoming noticeable when potential issues are detected.

### Working with Redacted Content

When you encounter redacted content:

1. **Preview Content**: Hover your mouse over any redacted text to see what's hidden
2. **Understand Why**: The hover tooltip includes the reason the content was flagged
3. **Reveal Content**: Right-click on redacted text and select "Reveal Redacted Content" if you want to view it
4. **Restore Redaction**: Once revealed, content will remain visible but highlighted for awareness

This approach allows you to maintain protection while having the flexibility to view content when needed.

### Viewing Detailed Reports

To see comprehensive safety analysis:

1. Click the Trust Guard AI icon in your browser toolbar
2. Select "View Detailed Report" in the popup
3. Review the safety score, detected issues, and specific examples
4. Use the information to make informed decisions about the page's content
5. Close the report when finished or export it if needed

Detailed reports provide deeper insights into why certain content was flagged and the overall safety assessment of the page.

### Exporting Evidence

When you need to document safety concerns:

1. Click the Trust Guard AI icon in your browser toolbar
2. Select "Export for Law Enforcement" in the popup
3. An HTML report will be automatically downloaded to your device
4. The report includes the page URL, timestamp, safety score, and all detected issues
5. Open the HTML file in any browser to view the professionally formatted report

This feature is particularly useful for documentation, reporting, or educational purposes.

### Troubleshooting

If you encounter issues with the extension:

1. **Analysis Not Working**:
   - Check if the extension is enabled for the current site
   - Ensure you have a valid API key configured or are using the default key
   - Try refreshing the page and manually triggering analysis

2. **Missing Redaction**:
   - Some harmful content might not be detected if it's in an unusual format
   - Try manually analyzing the page to catch recent content changes
   - Adjust sensitivity settings if available

3. **Performance Issues**:
   - Temporarily disable the extension on very large or complex pages
   - Close unused tabs to free up browser resources
   - Check for conflicts with other extensions that modify page content

4. **API Errors**:
   - Verify your API key is entered correctly in settings
   - Check if you've exceeded your API usage quota
   - Temporarily use the default key while troubleshooting

In most cases, refreshing the page or restarting the browser will resolve temporary issues.

## Privacy Commitment

Trust Guard AI is built with a strong commitment to user privacy:

1. **Data Minimization**: Only the specific text needed for analysis is processed
2. **Local Processing**: Whenever possible, operations occur directly in your browser
3. **No User Profiles**: The extension doesn't create or maintain user profiles or histories
4. **No Analytics Collection**: No usage statistics are gathered from your browsing
5. **Transparent Operation**: All data handling is clearly documented
6. **No Advertising**: User data is never used for advertising or marketing purposes
7. **No Third-Party Sharing**: Content is only shared with the AI service for analysis
8. **Secure Transmission**: All external communication uses encrypted connections

The extension follows privacy-by-design principles, collecting only what's necessary for its core functionality.

## Development Plans

Trust Guard AI continues to evolve with planned enhancements:

### Near-Term Updates

- **Performance Optimization**: Further refinements to analysis speed and efficiency
- **Enhanced Detection**: Improved recognition of subtle forms of harmful content
- **Mobile Support**: Extended functionality for mobile browsers
- **Advanced Customization**: More granular control over protection settings
- **Accessibility Improvements**: Enhanced support for users with disabilities
- **Expanded Language Support**: Analysis capabilities for additional languages
- **UI Refinements**: Ongoing interface improvements based on user feedback

### Future Roadmap

- **Enhanced Media Analysis**: Expanded capabilities for image and video content
- **Community Protection**: Optional anonymous threat intelligence sharing
- **Advanced Redaction Options**: More customizable redaction styles and behaviors
- **Enterprise Features**: Centralized management for organizational deployments
- **Educational Resources**: Integrated guidance for digital literacy
- **API Expansion**: Support for additional AI service providers
- **Cross-Platform Synchronization**: Consistent protection across devices

Trust Guard AI is committed to continuous improvement, balancing enhanced protection with performance and usability.

## Frequently Asked Questions

### General Questions

**Q: Is Trust Guard AI free to use?**
A: The extension is free to install and use with the default API key. For advanced users, there's an option to use your own Google Gemini API key, which may incur costs based on Google's pricing.

**Q: How accurate is the content analysis?**
A: Trust Guard AI uses Google's Gemini 1.5 Pro, one of the most advanced AI models available. However, no AI system is perfect, and there may occasionally be false positives (safe content flagged as harmful) or false negatives (harmful content not detected). The extension provides tools to manage these situations.

**Q: Will Trust Guard AI slow down my browsing?**
A: The extension is designed to minimize performance impact. Analysis occurs after page content loads and is optimized to run efficiently. On very large pages, you might notice a brief delay during analysis, but general browsing speed should not be significantly affected.

**Q: Does Trust Guard AI work on all websites?**
A: The extension works on most standard websites. However, some sites with unusual structures, heavy client-side rendering, or content loaded through complex JavaScript might present challenges. Additionally, sites that actively block extensions may limit functionality.

**Q: Can I use Trust Guard AI on mobile devices?**
A: Currently, Trust Guard AI is available for desktop browsers. Mobile support is on our development roadmap.

### Privacy Questions

**Q: Can Trust Guard AI see my passwords or personal information?**
A: No. The extension only analyzes visible text content on web pages. It does not access form data, passwords, or other sensitive information.

**Q: Does the extension track my browsing history?**
A: No. Trust Guard AI does not track, store, or transmit your browsing history. It only analyzes the current page when active.

**Q: Who can see the content I'm analyzing?**
A: The text sent for analysis is processed by Google's Gemini AI service according to their privacy policies. No personally identifiable information is attached to these requests, and the data is not used to build user profiles.

**Q: Are my exported reports stored anywhere besides my device?**
A: No. Exported reports are generated locally and saved directly to your device. They are not uploaded to any server or cloud storage.

### Technical Questions

**Q: Why do I need to provide API permissions?**
A: The extension requires certain permissions to function properly:
- "activeTab" to access and analyze the current page content
- "storage" to save your preferences and settings
- "contextMenus" to provide right-click functionality
- Host permissions to communicate with the AI service

**Q: How can I use my own API key?**
A: Click the settings icon in the extension popup, enter your Google Gemini API key in the field provided, and click "Save API Key." Your key will be stored locally in your browser.

**Q: Why might content analysis fail?**
A: Analysis might fail due to:
- API key issues (invalid or quota exceeded)
- Network connectivity problems
- Very large pages exceeding processing limits
- Compatibility issues with specific page structures
- Service disruptions with the AI provider

**Q: How often is content reanalyzed on a page?**
A: By default, content is analyzed once when the page loads. You can manually trigger reanalysis by clicking "Analyze Page" in the popup, which is useful for dynamic pages that load new content.

### Feature Questions

**Q: Can Trust Guard AI block ads or popups?**
A: Trust Guard AI focuses on content safety analysis rather than ad blocking. While it may identify harmful content within ads, it is not designed as an ad blocker.

**Q: Does the extension work with password-protected or private content?**
A: The extension can only analyze content that is visible in your browser. If you're logged into a site and can see protected content, Trust Guard AI can analyze it when active.

**Q: Can I temporarily disable protection?**
A: Yes. You can disable the extension for specific sites using the toggle in the popup, or disable it completely through your browser's extension management.

**Q: How do I report false positives or missed harmful content?**
A: Currently, feedback is handled through the Chrome Web Store reviews and feedback channels. A dedicated feedback mechanism is planned for future updates.

## Support Information

### Getting Help

If you need assistance with Trust Guard AI:

- **Documentation**: Refer to the extension's help documentation accessible from the popup menu
- **FAQs**: Review the Frequently Asked Questions section on our website
- **Troubleshooting Guide**: Follow the step-by-step troubleshooting instructions for common issues
- **Email Support**: Contact our support team at support@trustguardai.example.com
- **Community Forum**: Join discussions with other users at forums.trustguardai.example.com

Our team is committed to providing timely and helpful assistance to ensure you get the most out of Trust Guard AI.

### Providing Feedback

We value your input on how to improve Trust Guard AI:

- **Feature Requests**: Submit suggestions for new capabilities
- **Bug Reports**: Help us identify and fix issues
- **User Experience**: Share your thoughts on the interface and workflows
- **Detection Accuracy**: Report false positives or missed harmful content
- **Performance Concerns**: Let us know about any impact on browsing experience

Feedback can be submitted through the extension's support page or via email to feedback@trustguardai.example.com.

### Updates and Maintenance

Trust Guard AI is actively maintained with regular updates:

- **Version History**: Full changelog available on our website
- **Automatic Updates**: The extension updates automatically through the Chrome Web Store
- **Security Patches**: Critical security fixes are prioritized for rapid deployment
- **Feature Releases**: New capabilities are added based on user feedback and technology advances
- **API Compatibility**: Updates to maintain compatibility with the Gemini AI service

We recommend keeping the extension updated to the latest version for optimal performance and security.

## Commitment to Safety

Trust Guard AI was developed with a core mission of making the internet safer for everyone. We believe in:

- **Universal Access**: Safety tools should be accessible to all users
- **User Control**: Protection should be powerful but customizable to individual needs
- **Balance**: Safety features should complement rather than hinder the browsing experience
- **Education**: Tools should help users understand online risks, not just hide them
- **Continuous Improvement**: Safety technology must evolve with emerging threats
- **Transparency**: Users deserve clear information about how protection works
- **Privacy Respect**: Safety should never come at the cost of user privacy

In an online world filled with potential hazards, Trust Guard AI aims to be a reliable guardian of your digital well-being, providing peace of mind without sacrificing the open nature of the internet.
