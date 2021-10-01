const bars = document.getElementById("bars");
const nav = document.querySelector("nav");

const toggleFunction = () => {
    nav.classList.toggle("activeNavbar")
}
bars.addEventListener("click", toggleFunction);