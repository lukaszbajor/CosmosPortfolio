const burger = document.querySelector(".nav__menuBurger");
const menu = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav__link");

document.addEventListener("DOMContentLoaded", function () {
	const stars = document.querySelectorAll(".header__star");

	const resetAnimation = (star) => {
		star.className = "";
		setTimeout(function () {
			star.className = "header__star";
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
		nav.style.backgroundColor = "#231f43";
		nav.style.transition = "all .3s";
	} else {
		nav.style.backgroundColor = "transparent";
	}
};

links.forEach((link) => {
	link.addEventListener("click", () => {
		menu.classList.remove("showMenu");
		burger.classList.remove("active");
	});
});

burger.addEventListener("click", handleBurger);
window.addEventListener("scroll", changeBackgroundColor);
