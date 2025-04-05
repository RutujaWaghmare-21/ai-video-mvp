function generateScript() {
    const topic = document.getElementById('topicInput').value;
    const result = document.getElementById('scriptResult');
  
    if (!topic) {
      result.textContent = "Please enter a topic!";
      return;
    }
  
    // Simulate AI script generation
    result.textContent = `Generating script for "${topic}"...\n\n`;
    
    setTimeout(() => {
      result.textContent = `Hello students! Today, we're learning about "${topic}".\n\n` +
                           `Here's an engaging and fun way to understand it...\n\n` +
                           `1. Key Concepts\n2. Real-life Examples\n3. Interactive Quiz\n\n` +
                           `Let's dive in! 📚✨`;
    }, 1500);
  }
  