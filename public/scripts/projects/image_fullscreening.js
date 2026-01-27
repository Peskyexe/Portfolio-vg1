// Henter inn alle elementene 
images = document.querySelectorAll(".project-image, .project-image-active");
modal = document.getElementById("image-modal")
modal_image = modal.querySelector("img")

// Variabel for å holde følge på om modalen er åpnet eller ikke
var modal_active = false;

// For hvert bilde, legg til en eventlistener som putter bilde in i modalen og viser den når du klikker
images.forEach(element => {
    element.addEventListener('click', (event) => {
        modal_active = true;
        event.stopPropagation();

        let clicked_image_src = element.src;

        modal.style.display = "flex";
        modal_image.src = clicked_image_src;
        
        // Magisk copilot løsning
        // Force repaint so transform transition can work
        modal.offsetHeight;

        modal.style.backgroundColor = "#1c221c69";
        modal.style.backdropFilter = "blur(8px)"
        modal_image.style.transform = "scale(1)";
    })
});

// Når du klikker mens modalen er åpen så vil modalen lukkes igjen
window.addEventListener('click', (event) => {
    if (modal_active) {
        modal_image.style.transform = "scale(0)";
        modal.style.display = "none";

        modal_active = false;
    }
})