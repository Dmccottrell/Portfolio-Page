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

// Initialize EmailJS
emailjs.init("your_user_id"); // Replace "your_user_id" with your EmailJS user ID

// Handle form submission
// Initialize EmailJS with your public key
emailjs.init("WM3UeOGX9YYa3NdpV"); // Your actual public key

// Handle form submission
document
	.getElementById("contactForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		// Get the form values
		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const message = document.getElementById("message").value;

		// Validate the form
		if (!name || !email || !message) {
			alert("Please fill in all fields.");
			return;
		}

		// Create the template parameters
		const templateParams = {
			from_name: name,
			from_email: email,
			message: message,
		};

		// Send the email using the Darryl_email template
		emailjs.send("service_ji6e7bl", "Darryl_email", templateParams).then(
			function (response) {
				alert("Message sent successfully!");
			},
			function (error) {
				alert("Error sending message: " + error.text);
			},
		);

		// Optionally reset the form after submission
		document.getElementById("contactForm").reset();
	});
