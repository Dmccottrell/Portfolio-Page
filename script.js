// JavaScript code to add fade-in animation to images when they come into view

// Wait for the entire HTML document to load
document.addEventListener("DOMContentLoaded", () => {
	// Select all <img> elements on the page
	const images = document.querySelectorAll("img");

	// Create an Intersection Observer to track when images are visible in the viewport
	const fadeInObserver = new IntersectionObserver(
		(entries) => {
			// Loop through each observed element (entry)
			entries.forEach((entry) => {
				// Check if the element is currently visible
				if (entry.isIntersecting) {
					// Add the "fade-in" class to trigger the CSS animation
					entry.target.classList.add("fade-in");
					// Stop observing this element since the animation has been applied
					fadeInObserver.unobserve(entry.target);
				}
			});
		},
		// Trigger when 10% of the image is visible
		{ threshold: 0.1 },
	);

	// Observe each image on the page
	images.forEach((img) => fadeInObserver.observe(img));
});
