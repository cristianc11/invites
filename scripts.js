document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const gifContainer = document.getElementById("gif-container");
    const invitationText = document.querySelector(".invitation > h1");
    const invitationMessage = document.querySelectorAll(".invitation > p");
    const gifImage = document.getElementById("gif-image");
    const thankYouText = document.getElementById("thank-you-text");
    const hiddenText = document.getElementById("hidden-text");
    let noClickCount = 0;
  
    noButton.addEventListener("click", function () {
      noClickCount++;
  
      if (noClickCount === 1) {
        noButton.textContent = "¿Segura?";
      } else if (noClickCount === 2) {
        noButton.textContent = "¿Estás segura de acabar esto?";
      } else if (noClickCount === 3) {
        noButton.textContent = "Última oportunidad...";
      } else {
        noButton.remove();
      }
  
      yesButton.classList.add("enlarge");
    });
  
    yesButton.addEventListener("click", function () {
      gifContainer.classList.remove("hidden");
      yesButton.remove();
      noButton.remove();
      invitationText.remove();
      invitationMessage.forEach(text => text.remove());
      gifImage.src = "/img/deadpool_heart.gif"; // Cambia el enlace por el nuevo GIF
      thankYouText.classList.remove("hidden");
      hiddenText.classList.remove("hidden");
    });
  });
  