// Wrap in setup function
function setup() {

  // Bot response function
  function generateResponse(userMessage) {
    if (userMessage == 'hi') {
      return 'Hello there!';
    }
    if (userMessage == 'how are you') {
      return "I'm doing great, thanks!";
    }
    return 'Hmm I\'m not sure how to respond to that yet!';
  }

  // Get references
  const messages = document.getElementById('chat-messages');
  const inputField = document.getElementById('user-input');
  const sendBtn = document.getElementById('send');

  // Add event listener
  sendBtn.addEventListener('click', function() {

    // Get message from input
    let userMessage = inputField.value;
    
    // Log for testing
    console.log(userMessage);

    // Clear input
    inputField.value = '';

    // Bot response 
    const botMessage = generateResponse(userMessage);

    // Create message containers
    const userMessageContainer = createMessageContainer(userMessage);
    const botMessageContainer = createMessageContainer(botMessage);

    // Add to chat
    messages.appendChild(userMessageContainer);
    messages.appendChild(botMessageContainer);

  });

}

// Helper to create message container  
function createMessageContainer(message) {
  const container = document.createElement('div');
  container.classList.add('mdc-list-item');

  const text = document.createElement('span');
  text.classList.add('mdc-list-item__text');
  text.textContent = message;

  container.appendChild(text);
  return container;
}

// Initialize
setup();