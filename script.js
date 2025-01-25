// JavaScript code to add fade-in animation to images when they come into view

document.addEventListener("DOMContentLoaded", () => {
	const fadeInElements = document.querySelectorAll(".fade-in");

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("fade-in-visible");
					observer.unobserve(entry.target); // Trigger only once
				}
			});
		},
		{ threshold: 0.1 }, // Trigger when 10% of the element is visible
	);

	fadeInElements.forEach((element) => observer.observe(element));
});
document.addEventListener("scroll", () => {
	const scrollPercentage =
		window.scrollY / (document.body.scrollHeight - window.innerHeight);

	// Define gradient colors (start and end)
	const startColor = [18, 18, 18]; // Dark color (RGB format)
	const endColor = [240, 240, 240]; // Light color (RGB format)

	// Interpolate between start and end colors based on scroll percentage
	const r = Math.round(
		startColor[0] + (endColor[0] - startColor[0]) * scrollPercentage,
	);
	const g = Math.round(
		startColor[1] + (endColor[1] - startColor[1]) * scrollPercentage,
	);
	const b = Math.round(
		startColor[2] + (endColor[2] - startColor[2]) * scrollPercentage,
	);

	// Apply the gradient to the body background
	document.body.style.background = `rgb(${r}, ${g}, ${b})`;
});
