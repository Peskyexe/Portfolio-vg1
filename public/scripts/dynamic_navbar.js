const menu_close_button = document.querySelector(".menu-close-button")
const menu_open_button = document.querySelector(".menu-open-button")

menu_close_button.addEventListener("click", hideSidebar)
menu_open_button.addEventListener("click", showSidebar)

function showSidebar() {
	const sidebar = document.querySelector(".nav-links-sidebar");
	sidebar.style.display = "flex";
}

function hideSidebar() {
	const sidebar = document.querySelector(".nav-links-sidebar");
	sidebar.style.display = "none";
}