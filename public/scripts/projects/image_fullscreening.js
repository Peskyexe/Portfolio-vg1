// Henter inn alle elementene 
const images = document.querySelectorAll(".project-image, .project-image-active");
const modal = document.querySelector(".image-modal-hidden")
const modal_image = document.querySelector(".image-modal-image-hidden")

// Variabel for å holde følge på om modalen er åpnet eller ikke
var modal_active = false;

// For hvert bilde, legg til en eventlistener som putter bilde in i modalen og viser den når du klikker
images.forEach(element => {
    element.addEventListener('click', (event) => {
        modal_active = true;
        event.stopPropagation();

        // Setter popup bildet sin src attribute til det samme som bilde som ble trykket på
        modal_image.src = element.src;
        
        // Legger til aktiv klassene til containeren og selve bilde
        modal.classList.add("image-modal-active");
        modal_image.classList.add("image-modal-image-active");
    })
});

// Når du klikker mens modalen er åpen så vil modalen lukkes igjen
window.addEventListener('click', (event) => {
    if (modal_active) {
        // Fjerner aktiv klassene fra containeren og bilde
        modal.classList.remove("image-modal-active");
        modal_image.classList.remove("image-modal-image-active");

        modal_active = false;
    }
})