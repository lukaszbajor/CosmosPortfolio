const burger = document.querySelector(".nav__menuBurger");
const menu = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav__link");
const paragraphs = document.querySelectorAll(".projects__desc--hidden");
const btnsMore = document.querySelectorAll(".projects__btnMore");

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

btnsMore.forEach((button, index) => {
	button.addEventListener("click", () => {
		paragraphs[index].classList.toggle("projects__desc--more");
		if (button.textContent.trim() === "Czytaj więcej...") {
			button.textContent = "Zwiń";
		} else {
			button.textContent = "Czytaj więcej...";
		}
	});
});

burger.addEventListener("click", handleBurger);
window.addEventListener("scroll", changeBackgroundColor);
