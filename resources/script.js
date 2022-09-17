// Closes offcanvas sidebar when user clicks one of its links.
document.querySelectorAll(".nav-link").forEach(element => {
    element.addEventListener("click", () => {
        bootstrap.Offcanvas.getInstance(document.querySelector("#offcanvasDarkNavbar")).hide()
    })
})
