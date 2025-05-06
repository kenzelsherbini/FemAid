// Function to open the "Learn More" popup by making it visible
function openPopup() {
    document.getElementById('learnMorePopup').style.display = 'flex';
  }
  
  // Function to close the "Learn More" popup by hiding it
  function closePopup() {
    document.getElementById('learnMorePopup').style.display = 'none';
  }
  
  // Array of empowering quotes about women and strength
  const quotes = [
    "“A woman is the full circle. Within her is the power to create, nurture and transform.” – Diane Mariechild",
    "“There is no limit to what we, as women, can accomplish.” – Michelle Obama",
    "“I am not free while any woman is unfree, even when her shackles are very different from my own.” – Audre Lorde",
    "“The most courageous act is still to think for yourself. Aloud.” – Coco Chanel",
    "“You don’t have to play masculine to be a strong woman.” – Mary Elizabeth Winstead"
  ];
  
  // Keeps track of which quote is currently being displayed
  let quoteIndex = 0;
  
  // Function to display the current quote in the HTML element with id "quoteBox"
  function displayQuote(index) {
    const quoteBox = document.getElementById("quoteBox");
    if (index >= 0 && index < quotes.length) {
      quoteBox.textContent = quotes[index]; // Show the quote at the given index
    } else {
      quoteBox.textContent = "No more quotes to show."; // Fallback message
    }
  }
  
  // Function to go to the next quote (if not already at the end)
  function showNext() {
    if (quoteIndex < quotes.length - 1) {
      quoteIndex++;
      displayQuote(quoteIndex);
    } else {
      alert("You've reached the last quote.");
    }
  }
  
  // Function to go to the previous quote (if not already at the beginning)
  function showPrevious() {
    if (quoteIndex > 0) {
      quoteIndex--;
      displayQuote(quoteIndex);
    } else {
      alert("You're at the beginning.");
    }
  }
  
  