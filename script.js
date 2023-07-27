async function onLoad() {
  console.log("onLoad function executed.");

  // Initialize the PaLM API.
  const palm = require('palm');
  const client = new palm.Client({
    keyFile: './Users\isic\Documents\GitHub\shining-booth-393816-6872f102e5a3.json',
  });

  // Initialize the message input field.
  const messageInput = document.getElementById('message');
  messageInput.value = '';

  // Add an event listener to the send button.
  const sendButton = document.getElementById('send');
  sendButton.onclick = async () => {
    // Get the message from the message input field.
    const message = messageInput.value;
    console.log("Message to be sent:", message);

    // Send the message to the PaLM API.
    const response = await client.generateText({
      prompt: message,
      maxTokens: 100,
    });

    // Update the chatbox with the response from the PaLM API.
    updateChatbox(response.result);
  };

  // Define the updateChatbox() function.
  function updateChatbox(response) {
    // Get the chat messages container.
    const chatMessages = document.getElementById('chat-messages');

    // Create a new chat message element.
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message';
    messageElement.textContent = response;

    // Append the new chat message to the chat messages container.
    chatMessages.appendChild(messageElement);

    // Clear the input field after sending the message.
    messageInput.value = '';
  }
}