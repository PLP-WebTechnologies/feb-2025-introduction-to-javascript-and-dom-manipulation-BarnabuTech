function changeText() {
  const paragraph = document.getElementById("info-text");
  paragraph.textContent = "The text has been successfully changed!";
}

function toggleStyle() {
  const heading = document.getElementById("main-heading");
  heading.classList.toggle("highlight");
}

function addElement() {
  const newDiv = document.createElement("div");
  newDiv.textContent = "New dynamic element!";
  newDiv.className = "highlight";
  newDiv.id = "dynamic-element";
  document.getElementById("dynamic-area").appendChild(newDiv);
}

function removeElement() {
  const element = document.getElementById("dynamic-element");
  if (element) {
    element.remove();
  } else {
    alert("No element to remove!");
  }
}
