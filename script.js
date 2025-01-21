// Sample project code snippets to display in the modal
const projectCode = {
	project1: `// Sample JavaScript code for Project 1
function greet() {
    console.log("Hello, world!");
}
greet();`,
	project2: `// Sample JavaScript code for Project 2
const taskList = ["Task 1", "Task 2", "Task 3"];
taskList.forEach(task => {
    console.log(task);
});`,
};

// Get all project cards and modal-related elements
const projectCards = document.querySelectorAll(".project-card");
const codeModal = document.getElementById("code-modal");
const codeDisplay = document.getElementById("code-display");
const closeBtn = document.getElementById("close-btn");

// Event listener to open modal and display the code when "View Code" is clicked
projectCards.forEach((card) => {
	card.addEventListener("click", () => {
		const projectCodeKey = card.getAttribute("data-code");
		codeDisplay.textContent = projectCode[projectCodeKey]; // Display code in modal
		codeModal.style.display = "flex"; // Show modal
	});
});

// Event listener to close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
	codeModal.style.display = "none"; // Hide the modal
});

// Event listener to close the modal when clicking outside the modal content
window.addEventListener("click", (e) => {
	if (e.target === codeModal) {
		codeModal.style.display = "none"; // Hide the modal if clicked outside
	}
});
