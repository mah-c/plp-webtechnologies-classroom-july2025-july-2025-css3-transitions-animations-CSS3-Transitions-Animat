// 📚 Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable (used for counting clicks)
let clickCount = 0;

// Function to add a class for animation and remove it after it ends
function triggerAnimation(elementId, animationClass) {
  const element = document.getElementById(elementId);

  // Add the animation class
  element.classList.add(animationClass);

  // Remove the class after animation ends so it can be reused
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, 600); // Match animation duration
}

// Function with parameters and return value
function updateClickCount(currentCount) {
  return currentCount + 1;
}

// Function demonstrating local scope
function changeBoxColor() {
  const colors = ["#2196F3", "#f44336", "#4CAF50", "#FF9800"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const newColor = colors[randomIndex]; // local variable
  document.getElementById("animatedBox").style.backgroundColor = newColor;
}

// 🎬 Part 3: Combine JS + CSS Animations

document.getElementById("animateBtn").addEventListener("click", () => {
  // Trigger the CSS bounce animation
  triggerAnimation("animatedBox", "bounce-animation");

  // Update the global click count
  clickCount = updateClickCount(clickCount);
  console.log("Box clicked", clickCount, "times");

  // Change box color every time it's clicked
  changeBoxColor();
});
