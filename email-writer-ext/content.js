console.log("Email Writer Assistant extension loaded successfully!");

function getEmailContent() {
    const selectors = ['.h7', '.a3s.aiL', '.gmail_quote', '[role="presentation"]'];
    for (const selector of selectors) {
        const content = document.querySelector(selector);
        if (content) {
            return content.innerText.trim();
        }
    }
    return '';  // ← Move outside loop
}

function findComposeToolbar() {
    const selectors = ['.aDh', '.btC', '[role="toolbar"]', '.gU.Up'];  // ← Add dot to .gU.Up
    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        if (toolbar) {
            return toolbar;
        }
    }
    return null;  // ← Move outside loop
}

function createAIButton() {
    const button = document.createElement('div');
    button.className = 'T-I J-J5-Ji aoO v7 T-I-atl L3';
    
    // Add these styles for proper alignment
    button.style.cssText = `
        margin-right: 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        padding: 0 16px;
        font-size: 13px;
        font-weight: 500;
        border-radius: 4px;
        cursor: pointer;
        color: white;
        box-sizing: border-box;
    `;
    
    button.innerHTML = 'AI Reply';
    button.setAttribute('role', 'button');
    button.setAttribute('data-tooltip', 'Generate AI Reply');
    
    // Add hover effect
    
    
    return button;
}

function injectButton() {
     const existingButton = document.querySelector('.ai-reply-button');
     if (existingButton) existingButton.remove();

      const toolbar = findComposeToolbar();
      if (!toolbar) {
          console.log("Compose toolbar not found.");
          return;
      }

      console.log("Compose toolbar found. Injecting AI Reply button...");
      const button = createAIButton();
      button.classList.add('ai-reply-button');

      button.addEventListener('click', async () => {
          try {
               button.innerHTML = 'Generating...';
               button.disabled = true;

               const emailContent = getEmailContent();
               const response = await fetch('http://localhost:8080/api/email/generate', {
                   method: 'POST',
                   headers: {
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify({ emailContent: emailContent,
                    tone: "professional"
                    })
               });

                if (!response.ok) {
                    throw new Error('API request failed');
                }

                const generatedReply = await response.text();
                const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');
                if (composeBox) {
                    composeBox.focus();
                    document.execCommand('insertText', false, generatedReply);
                } else {
                    console.error("Compose box not found.");
                }

          } catch (error) {
            console.error("Error generating AI reply:", error);
            alert("Failed to generate AI reply. Please try again.");
          }
              finally {
                button.innerHTML = 'AI Reply';
                button.disabled = false;
              }
      });

      // Find Send button and insert AI button after it
      const sendButton = toolbar.querySelector('[data-tooltip="Send [Tab]"], [aria-label*="Send"]');
      if (sendButton && sendButton.parentNode) {
          sendButton.parentNode.insertBefore(button, sendButton);
      } else {
          // Fallback: insert as first child if Send button not found
          toolbar.insertBefore(button, toolbar.firstChild);
      }
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(node => 
            node.nodeType === Node.ELEMENT_NODE &&
            (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector('.aDh, .btC, [role="dialog"]'))
        );

        if (hasComposeElements) {
            console.log("Compose window detected. Initializing Email Writer Assistant...");
            setTimeout(injectButton, 500);
        }
    }
});


observer.observe(document.body, { childList: true, subtree: true });