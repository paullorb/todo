const nilInputBox = document.getElementById("nilInputBox");

const nilul = document.getElementById("nilul");

const nilAdd = document.getElementById("nilAdd");

const nilSelect = document.querySelector(".nilPriority");
console.log(nilSelect.value);

nilAdd.addEventListener("click", () => {
  if (nilInputBox.value === "") {
    alert("you must add a task");
  } else {
    console.log(nilInputBox.value);
    let nilLi = document.createElement("li");
    nilLi.innerText = nilInputBox.value;
    nilLi.classList.add(nilSelect.value);
    nilul.appendChild(nilLi);
    let nilSpan = document.createElement("span");
    nilSpan.innerHTML = "\u00d7";
    nilLi.appendChild(nilSpan);
  }
  nilInputBox.value = "";
  saveData();
});

nilul.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("nilChecked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", nilul.innerHTML);
}
function showTask() {
  nilul.innerHTML = localStorage.getItem("data");
}
showTask();
