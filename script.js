const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".add-note");
let notes1 = document.querySelectorAll(".input-box");

showNotes();
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes1");
}

function updateStorage() {
  localStorage.setItem("notes1", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  let trashIcon = document.createElement("i");
  trashIcon.className = "fa-solid fa-trash";
  // Make the trash icon non-editable:
  trashIcon.setAttribute("contenteditable", "false");
  // Append the icon to the inputBox
  inputBox.appendChild(trashIcon);

  // Then append the inputBox to the notes container
  notesContainer.appendChild(inputBox);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "I") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes1 = document.querySelectorAll(".input-box");
    notes1.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLinebreak");
    event.preventDefault();
  }
});
