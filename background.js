// Gemini API configuration
const GEMINI_API_KEY = "AIzaSyDOpyx7Vq8Ng4S8IOVbOnMrWsi5DMCIXMA"; // Replace with your API key
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent";

// Initialize context menu
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "removeRedaction",
    title: "Remove Redaction",
    contexts: ["all"]
  });

  chrome.contextMenus.create({
    id: "exportEvidence",
    title: "Export Evidence for Law Enforcement",
    contexts: ["page"]
  });

  chrome.contextMenus.create({
    id: "revealRedactedContent",
    title: "Reveal Redacted Content",
    contexts: ["all"]
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "removeRedaction") {
    chrome.tabs.sendMessage(tab.id, { action: "removeRedaction" });
  } else if (info.menuItemId === "exportEvidence") {
    chrome.tabs.sendMessage(tab.id, { action: "exportEvidence" });
  } else if (info.menuItemId === "revealRedactedContent") {
    chrome.tabs.sendMessage(tab.id, { action: "removeRedaction" });
  }
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "analyzeContent") {
    analyzeContentWithGemini(request.content)
      .then(analysis => sendResponse(analysis))
      .catch(error => sendResponse({ error: error.message }));
    return true; // Indicates async response
  } else if (request.action === "createContextMenu") {
    // Remove existing menu if it exists
    chrome.contextMenus.remove(request.id, () => {
      // Create the context menu item
      chrome.contextMenus.create({
        id: request.id,
        title: request.title,
        contexts: ["all"]
      });
    });
    sendResponse({ success: true });
    return true;
  }
});

// Function to analyze content using Gemini AI
async function analyzeContentWithGemini(content) {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Analyze the following web content for safety issues like cyberbullying, 
                  hate speech, threats, or other harmful content. Provide:
                  1. A safety score from 1-100 (100 being completely safe)
                  2. Identified issues with specific text segments
                  3. Reasons why these segments are concerning
                  
                  Content to analyze: ${content}`
          }]
        }]
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to analyze content");
    }

    return processGeminiResponse(data);
  } catch (error) {
    console.error("Error analyzing content:", error);
    throw error;
  }
}

// Process and structure the Gemini API response
function processGeminiResponse(apiResponse) {
  // Extract the text from the response
  const responseText = apiResponse.candidates[0]?.content?.parts[0]?.text || "";
  
  // Parse the response to extract structured information
  // This is a simple parsing example - you might need more sophisticated parsing
  const safetyScoreMatch = responseText.match(/safety score:?\s*(\d+)/i);
  const safetyScore = safetyScoreMatch ? parseInt(safetyScoreMatch[1]) : 50;
  
  // Extract identified issues
  const issues = [];
  const segments = responseText.split(/issue|concern|problem/i).slice(1);
  
  segments.forEach(segment => {
    const textMatch = segment.match(/"([^"]+)"/);
    if (textMatch) {
      issues.push({
        text: textMatch[1],
        reason: segment.split('"')[2]?.trim() || "Potentially harmful content"
      });
    }
  });
  
  return {
    safetyScore,
    issues,
    fullAnalysis: responseText
  };
}
