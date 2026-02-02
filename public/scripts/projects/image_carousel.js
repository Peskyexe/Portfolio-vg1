// Funksjon for å sette opp / initialisere en bilde karusell
function initializeCarousel(container) {
    // Henter inn alle knappene og bildene I karusellen
    const buttons = container.querySelectorAll('.project-button');
    const images = container.querySelectorAll('.project-image');

    // Setter den første knappen og første bilde som aktiv
    var current_index = 0;
    buttons[current_index].classList.add('project-button-active');
    images[current_index].classList.add('project-image-active');

    // For hver knapp i karusellen, set opp EventListener
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            // Henter in knappen sin index i "buttons" arrayen
            let clicked_index = Array.from(buttons).indexOf(event.currentTarget);

            // Fjerner aktiv klassene fra de forigje aktive elementene
            buttons[current_index].classList.remove('project-button-active');
            images[current_index].classList.remove('project-image-active');    

            // Legger til aktiv klassen til de nye elementene
            buttons[clicked_index].classList.add('project-button-active');
            images[clicked_index].classList.add('project-image-active');

            // Oppdaterer indeksen
            current_index = clicked_index;
        })
    });
}

// Henter inn containerene for alle bilde karusell elementene, å bruker initialisere funksjonen for hver karusell.
const carousels = document.querySelectorAll(".project-container");
carousels.forEach(carousel => {
    console.log("Initializing image carousel for: ", carousel);
    initializeCarousel(carousel);
});