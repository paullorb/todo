const nilInputBox = document.getElementById("nilInputBox");

const nilul = document.getElementById("nilul");

const nilAdd = document.getElementById("nilAdd");

const nilSelect = document.querySelector(".nilPriority");

const nilEditBtn = document.getElementById("nilEdit");

let edited = null;
//clearStorage();

nilAdd.addEventListener("click", () => {
  if (nilInputBox.value === "") {
    alert("you must add a task");
  } else {
    if (edited) {
      edited.innerHTML = nilInputBox.value;
      edited.classList = [nilSelect.value];
      let nilSpan = document.createElement("span");
      nilSpan.classList.add("delSpan");
      nilSpan.innerHTML = "\u00d7";
      let nilSpanEdit = document.createElement("span");
      nilSpanEdit.innerHTML = "&#9998;";
      nilSpanEdit.classList.add("ediSpan");
      edited.appendChild(nilSpanEdit);
      edited.appendChild(nilSpan);
      edited = null;
      nilAdd.innerHTML = "+";
    } else {
      console.log(nilInputBox.value);
      let nilLi = document.createElement("li");
      nilLi.innerText = nilInputBox.value;
      nilLi.classList.add(nilSelect.value);
      nilul.appendChild(nilLi);
      let nilSpan = document.createElement("span");
      nilSpan.classList.add("delSpan");
      nilSpan.innerHTML = "\u00d7";
      let nilSpanEdit = document.createElement("span");
      nilSpanEdit.innerHTML = "&#9998;";
      nilSpanEdit.classList.add("ediSpan");
      nilLi.appendChild(nilSpanEdit);
      nilLi.appendChild(nilSpan);
    }
  }
  nilInputBox.value = "";
  saveData();
});

nilul.addEventListener(
  "click",
  (e) => {
    console.dir(e.target.parentElement);
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("nilChecked");
      saveData();
    } else if (e.target.classList[0] === "delSpan") {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.classList[0] === "ediSpan") {
      let oldData;
      let proiority;

      nilAdd.innerHTML = "&#9998;";
      oldData = e.target.parentElement.innerText.split("\n✎")[0];
      nilInputBox.value = oldData;

      proiority = e.target.parentElement.classList[0];
      nilSelect.value = proiority;

      edited = e.target.parentElement;

      nilInputBox.focus();
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

function clearStorage() {
  localStorage.clear();
}
