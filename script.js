// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  document.getElementById("responseMsg").textContent = `Thanks, ${name}! Your message has been sent.`;

  this.reset(); // Clear form
});