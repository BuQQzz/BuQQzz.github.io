function generateInformation() {
  console.log("Button clicked!"); // Check if the button click event is firing

  const apiKey = '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'; // Replace with your Hugging Face API key
  const model = 'EleutherAI/gpt-neo-2.7B'; // Hugging Face model for text generation

  const prompts = [
    "What is artificial intelligence?",
    "How does AI learn?",
    "What are the applications of AI?",
    "The future of AI",
    "AI in healthcare",
    "Ethical considerations in AI",
    // Add more prompts here as desired
  ];

  // Choose a random prompt from the array
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

  console.log("Random Prompt:", randomPrompt); // Check if a random prompt is chosen

  fetch(`https://api-inference.huggingface.co/models/${model}/generate/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: randomPrompt,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Generated Data:", data); // Check the generated data
      displayInformation(data);
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
      // Handle the error gracefully and display an appropriate message to the user.
      const infoContainer = document.querySelector(".info-container");
      infoContainer.innerHTML = "<p>Error fetching data. Please try again later.</p>";
    });
}

function displayInformation(data) {
  const infoContainer = document.querySelector(".info-container");
  infoContainer.innerHTML = ""; // Clear previous information, if any.

  // Create a paragraph element to display the generated text.
  const infoElement = document.createElement("p");
  infoElement.textContent = data[0].generated_text;
  infoContainer.appendChild(infoElement);
}
