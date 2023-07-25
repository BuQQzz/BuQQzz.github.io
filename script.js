
document.getElementById("generateBtn").addEventListener("click", generateInformation);

function generateInformation() {
  // Replace "YOUR_PROJECT_ID" and "YOUR_AGENT_ID" with your actual Dialogflow CX project and agent IDs
  const projectId = "shining-booth-393816";
  const agentId = "ddcdabe6-710a-4e5d-a793-66cbec1cbedf";

  // Replace this function with your Dialogflow CX webhook integration code.
  // You need to send a request to your webhook, and the webhook should return the generated information.
  // For this example, we'll simply display a fixed response.
  const generatedText = "Artificial Intelligence is revolutionizing various industries and changing the way we live.";

  displayInformation(generatedText);
}

function displayInformation(generatedText) {
  const infoContainer = document.querySelector(".info-container");
  infoContainer.innerHTML = ""; // Clear previous information, if any.

  // Create a paragraph element to display the generated text.
  const infoElement = document.createElement("p");
  infoElement.textContent = generatedText;
  infoContainer.appendChild(infoElement);
}