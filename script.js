function onLoad() {
  console.log("onLoad function executed.");

  // Initialize the PaLM API.
  var palm = require('palm');
  var palm = google.colab.kernel.invokeFunction('palm', [], {});

  // Initialize the message input field.
  var messageInput = document.getElementById('message');
  messageInput.value = '';

  // Add an event listener to the send button.
  var sendButton = document.getElementById('send');
  sendButton.onclick = function () {
    // Get the message from the message input field.
    var message = messageInput.value;
    console.log("Message to be sent:", message);

    // Send the message to the PaLM API.
    palm.call('generateText', {
      prompt: message,
      maxTokens: 100,
    }).then(function (response) {
      // Update the chatbox with the response from the PaLM API.
      updateChatbox(response.result);
    }).catch(function (error) {
      console.error("Error calling PaLM API:", error);
    });
  };

  // Define the updateChatbox() function.
  function updateChatbox(response) {
    // Get the chat messages container.
    var chatMessages = document.getElementById('chat-messages');

    // Create a new chat message element.
    var messageElement = document.createElement('div');
    messageElement.className = 'chat-message';
    messageElement.textContent = response;

    // Append the new chat message to the chat messages container.
    chatMessages.appendChild(messageElement);

    // Clear the input field after sending the message.
    messageInput.value = '';
  }
}
