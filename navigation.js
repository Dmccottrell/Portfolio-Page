// Universal Navigation Delay with Loading Spinner
document.addEventListener("DOMContentLoaded", () => {
	// Select all navigation links
	document.querySelectorAll("a.nav-link").forEach((link) => {
		link.addEventListener("click", (event) => {
			event.preventDefault(); // Prevent default navigation
			const targetUrl = link.getAttribute("href"); // Get the target URL

			// Show the loading spinner
			document.getElementById("loading-spinner").style.display = "flex";

			// Add fade-out effect
			document.body.classList.add("fade-out");

			// Delay navigation by 1 second
			setTimeout(() => {
				window.location.href = targetUrl; // Navigate to the URL
			}, 350); // Adjust delay here (1000ms = 1 second)
		});
	});
});
