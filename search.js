let words = []; // To hold the data from the JSON

// Load the JSON data
fetch('food.json') // Replace with the actual path to your JSON file
  .then(response => response.json())
  .then(data => {
    words = data; // Assign the data to the `words` variable
  })
  .catch(error => {
    console.error("Error loading JSON data:", error);
  });

const inputElement = document.getElementById("find");
const container = document.getElementById("input");

inputElement.addEventListener("input", () => {
  const query = inputElement.value.toLowerCase();

  // Clear previous content
  container.innerHTML = "";

  // Filter words based on the query and create elements
  words
    .filter(item => item.word.toLowerCase().startsWith(query))
    .forEach(item => {
      const block = document.createElement("div");
      block.className = "word-block";

      // Create and add the image
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.word;
      block.appendChild(img);

      // Add the text
      const text = document.createElement("span");
      text.textContent = item.word;
      block.appendChild(text);

      container.appendChild(block);
    });

  // Show the container if matches are found
  container.style.display = container.hasChildNodes() ? "block" : "none";
});

// Hide the container when clicking outside
document.addEventListener("click", (event) => {
  if (!inputElement.contains(event.target) && !container.contains(event.target)) {
    container.style.display = "none";
  }
});

// Prevent hiding when clicking inside the input or container
inputElement.addEventListener("click", (event) => {
  event.stopPropagation();
});





