console.log("behavior.js is running");

// Listener 1: the click WRITES into the page
const title = document.querySelector(".page-title");
const shoutButton = document.querySelector(".shout-button");

function changeTitle() {
  title.textContent = "Hello!";
}

shoutButton.addEventListener("click", changeTitle);

// Listener 2: the click READS from the page and copies to the clipboard
const email = document.querySelector(".email");
const copyButton = document.querySelector(".copy-email");

function copyEmail() {
  navigator.clipboard.writeText(email.textContent);
  copyButton.textContent = "Copied!";

  // Bonus: put the label back after 2 seconds
  setTimeout(function () {
    copyButton.textContent = "Copy my email";
  }, 2000);
}

copyButton.addEventListener("click", copyEmail);