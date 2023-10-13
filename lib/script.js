document.addEventListener("DOMContentLoaded", function() {
    const letters = document.querySelectorAll(".letter");
    const inputField = document.getElementById("input");

    
    inputField.addEventListener("keydown", function(event) {
        const keyPressed = event.key.toLowerCase();

        
        letters.forEach(letter => {
            const dataLetter = letter.getAttribute("data-letter");
            if (dataLetter === keyPressed) {
                letter.classList.add("active");
            }
        });
    });

  
    inputField.addEventListener("keyup", function(event) {
        const keyPressed = event.key.toLowerCase();

       
        letters.forEach(letter => {
            const dataLetter = letter.getAttribute("data-letter");
            if (dataLetter === keyPressed) {
                letter.classList.remove("active");
            }
        });
    });
});


