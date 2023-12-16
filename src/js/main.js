const burger = document.querySelector(".nav__menuBurger");
const menu = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");
// const links = document.querySelectorAll(".header__menu-link");

document.addEventListener("DOMContentLoaded", function () {
	const stars = document.querySelectorAll(".header__star");

	const resetAnimation = (star) => {
		star.className = "";
		setTimeout(function () {
			star.className = "header__star";
			// startShootingStarAnimation(star); // Dodaj to, aby natychmiast uruchomić nową animację
		}, 0);
	};

	stars.forEach((star) => {
		star.addEventListener("animationend", () => {
			resetAnimation(star);
		});
	});
});

const handleBurger = () => {
	burger.classList.toggle("active");
	menu.classList.toggle("showMenu");
};

const changeBackgroundColor = () => {
	if (window.scrollY >= 20) {
		nav.style.backgroundColor = "#688ae603";
		nav.style.transition = "all .3s";
	} else {
		nav.style.backgroundColor = "transparent";
	}
};

burger.addEventListener("click", handleBurger);
window.addEventListener("scroll", changeBackgroundColor);

// links.forEach((item) => {
// 	item.addEventListener("click", () => {
// 		burger.classList.remove("active");
// 		menu.classList.remove("show-menu");
// 	});
// });
