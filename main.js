let burgerBtn = document.querySelector(".burger");
let dropDown = document.querySelector(".nav-links");

burgerBtn.addEventListener("click", () => {
	// console.log("MENI OTVORI SE");
	dropDown.classList.toggle("showNav");
});
