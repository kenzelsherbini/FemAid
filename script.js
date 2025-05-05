function openPopup() {
    document.getElementById('learnMorePopup').style.display = 'flex';
  }

 
  function closePopup() {
    document.getElementById('learnMorePopup').style.display = 'none';
  }


  
  const quotes = [
    "“A woman is the full circle. Within her is the power to create, nurture and transform.” – Diane Mariechild",
    "“There is no limit to what we, as women, can accomplish.” – Michelle Obama",
    "“I am not free while any woman is unfree, even when her shackles are very different from my own.” – Audre Lorde",
    "“The most courageous act is still to think for yourself. Aloud.” – Coco Chanel",
    "“You don’t have to play masculine to be a strong woman.” – Mary Elizabeth Winstead"
  ];
  
  let quoteIndex = 0;

  function displayQuote(index) {
    const quoteBox = document.getElementById("quoteBox");
    if (index >= 0 && index < quotes.length) {
      quoteBox.textContent = quotes[index];
    } else {
      quoteBox.textContent = "No more quotes to show.";
    }
  }
  
  


  
  
  