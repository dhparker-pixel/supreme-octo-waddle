    // Check if the screen width is greater than or equal to 768 pixels (adjust this breakpoint as needed)
    if (window.matchMedia("(min-width: 768px)").matches) {
      // Get all the flip cards
      let flipCards = document.querySelectorAll(".flip-card");

      // Loop through each flip card and add a click event listener
      flipCards.forEach((flipCard) => {
        flipCard.addEventListener("click", function () {
          // Toggle the 'stay-flipped' class when the card is clicked
          this.classList.toggle("stay-flipped");
        });
      });
    }
