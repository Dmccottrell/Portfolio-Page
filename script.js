// Example animation when user scrolls
document.addEventListener("DOMContentLoaded", () => {
	let sections = document.querySelectorAll("section");
	window.addEventListener("scroll", () => {
		sections.forEach((section) => {
			if (window.scrollY + window.innerHeight >= section.offsetTop) {
				section.classList.add("fade-in");
			}
		});
	});
});
