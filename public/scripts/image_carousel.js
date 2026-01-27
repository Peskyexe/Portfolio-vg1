const carousels = document.querySelectorAll(".project-container");
carousels.forEach(carousel => {
    console.log("Initializing image carousel for: ", carousel);
    initializeCarousel(carousel);
});

function initializeCarousel(container) {
    const buttons = container.querySelectorAll('.project-images-buttons button');
    const images = container.querySelectorAll('.project-image');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            // Henter in knappen sin index i "buttons" arrayen
            const clickedIndex = Array.from(buttons).indexOf(event.currentTarget);
            
            // Fjerner alle aktiv klassene til de forigje knappene og bildene
            changeClasses(buttons, "project-button-active", "project-button");
            changeClasses(images, "project-image-active", "project-image");

            // Legger til aktiv klassene til den nye knappen og bilde
            button.classList.add("project-button-active");
            images[clickedIndex].classList.add("project-image-active");
        })
    });

    // Setter det første bilde og den første knappen til å være aktiv
    buttons[0].classList.remove("project-button")
    images[0].classList.remove("project-image")
    buttons[0].classList.add("project-button-active")
    images[0].classList.add("project-image-active")
}

// Funksjon til å bytte mellom 2 forsjkelige klasser
function changeClasses(array_element, class_to_remove, class_to_add) {
    array_element.forEach(element => {
        if (element.classList.contains(class_to_remove)) {
            element.classList.remove(class_to_remove);
            element.classList.add(class_to_add)
        }
    });    
}

