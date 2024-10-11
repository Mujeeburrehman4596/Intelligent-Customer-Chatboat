document.getElementById('send-btn').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value.trim();
    if (userInput !== "") {
      displayMessage(userInput, 'user');
      getBotResponse(userInput);
      document.getElementById('user-input').value = ""; // Clear input
    }
  });
  
  // Display messages in chat
  function displayMessage(message, sender) {
    var chatBody = document.getElementById('chat-body');
    var messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.innerText = message;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto scroll to bottom
  }
  
  // Simulate bot responses with predefined logic
  function getBotResponse(userInput) {
    var botMessage = "";
    var lowercaseInput = userInput.toLowerCase();
  
    if (lowercaseInput.includes("hello")) {
      botMessage = "Hello! How can I assist you?";
    } else if (lowercaseInput.includes("price")) {
      botMessage = "Our products range from $50 to $500. What specifically are you looking for?";
    } else if (lowercaseInput.includes("hours")) {
      botMessage = "We are open from 9 AM to 9 PM, Monday through Friday.";
    } else if (lowercaseInput.includes("thanks")) {
      botMessage = "You're welcome! Feel free to ask anything else.";
    } else {
      botMessage = "I'm not sure how to respond to that. Could you rephrase?";
    }
  
    setTimeout(function() {
      displayMessage(botMessage, 'bot');
    }, 1000); // Simulate typing delay
  }
  