// Henter in knapp elementene for sidebaren
const menu_close_button = document.querySelector(".menu-close-button")
const menu_open_button = document.querySelector(".menu-open-button")

// Legger til EventListeners som lytter etter om brukeren trykker på en av knappene, å kjører den tilsvarene funksjonen for den knappen
menu_close_button.addEventListener("click", hideSidebar)
menu_open_button.addEventListener("click", showSidebar)

// Funksjoner for å åpne og lukke sidebaren
function showSidebar() {
	const sidebar = document.querySelector(".nav-links-sidebar");
	sidebar.style.display = "flex";
}
function hideSidebar() {
	const sidebar = document.querySelector(".nav-links-sidebar");
	sidebar.style.display = "none";
}