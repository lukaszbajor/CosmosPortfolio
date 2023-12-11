document.addEventListener("DOMContentLoaded", function () {
	const stars = document.querySelectorAll(".star");

	const resetAnimation = (star) => {
		star.className = "";
		setTimeout(function () {
			star.className = "star";
			// startShootingStarAnimation(star); // Dodaj to, aby natychmiast uruchomić nową animację
		}, 0);
	};

	stars.forEach((star) => {
		star.addEventListener("animationend", () => {
			resetAnimation(star);
		});
	});
});
