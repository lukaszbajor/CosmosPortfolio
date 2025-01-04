emailjs.init("2KRDlTDnUgHRt0NPQ"); // Podaj swój User ID z EmailJS

document
	.getElementById("contactForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const formData = {
			name: document.getElementById("name").value,
			user_email: document.getElementById("email").value,
			message: document.getElementById("message").value,
		};

		emailjs.send("service_3efhinw", "template_wwvi0se", formData).then(
			function (response) {
				document.getElementById("name").value = "";
				document.getElementById("email").value = "";
				document.getElementById("message").value = "";
				console.log("Sukces:", response);
				alert("Wiadomość została wysłana!");
			},
			function (error) {
				console.log("Błąd:", error);

				alert("Wystąpił błąd. Spróbuj ponownie.");
			}
		);
	});
