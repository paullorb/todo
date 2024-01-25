const PaulSectionInsideLPContainer = document.querySelector(".pau");
const MoSectionInsideLPContainer = document.querySelector(".mo");
const NiloSectionInsideLPContainer = document.querySelector(".nil");

const focusMo = function () {
  PaulSectionInsideLPContainer.style.display = "none";
  NiloSectionInsideLPContainer.style.display = "none";
  MoSectionInsideLPContainer.style.display = "flex";
  MoSectionInsideLPContainer.style.width = "100%";
};

const unfocusMo = function () {
  PaulSectionInsideLPContainer.style.display = "flex";
  NiloSectionInsideLPContainer.style.display = "flex";
  MoSectionInsideLPContainer.style.width = "auto";
};

const focusPaul = function () {
  MoSectionInsideLPContainer.style.display = "none";
  NiloSectionInsideLPContainer.style.display = "none";
  PaulSectionInsideLPContainer.style.display = "flex";
  PaulSectionInsideLPContainer.style.width = "100%";
};

const unfocusPaul = function () {
  MoSectionInsideLPContainer.style.display = "flex";
  NiloSectionInsideLPContainer.style.display = "flex";
  PaulSectionInsideLPContainer.style.width = "auto";
};

const focusNilo = function () {
  MoSectionInsideLPContainer.style.display = "none";
  NiloSectionInsideLPContainer.style.display = "flex";
  PaulSectionInsideLPContainer.style.display = "none";
  PaulSectionInsideLPContainer.style.width = "100%";
};

const unfocusNilo = function () {
  MoSectionInsideLPContainer.style.display = "flex";
  PaulSectionInsideLPContainer.style.display = "flex";
  NiloSectionInsideLPContainer.style.width = "auto";
};

// Add List Item in the Work TDL-----------------------------------------------------------------------------------------------------------------------------------------------------

const moAddButtonWork = document.getElementById("moToDoDisplayFormWork"); // selects form element -> submit only works on the whole form not  just on the submit input
const moULWork = document.querySelector("#moToDoDisplayListWork"); // selects unordered list
const moTextInputWork = document.querySelector("#moToDoTextInputWork"); // selects text input

moAddButtonWork.addEventListener("submit", (createListItemWork) => {
  // adds submit event listener for the form and names the callback function
  createListItemWork.preventDefault(); // function prevents default behavior which in this case would be a page refresh

  const moWorkList = document.createElement("li"); // create a li tag
  moWorkList.classList.add("moCreatedListItemWork"); // add class to the created tag
  moULWork.appendChild(moWorkList); // tell the code where to put the created tag

  const moWorkListItemP = document.createElement("p"); // create a p tag
  moWorkListItemP.classList.add("moCreatedListItemWorkP"); // add class to the created tag
  moWorkListItemP.innerText = moTextInputWork.value; // defines the value of the tag -> sets it to the value from the text input field at the moment of submit
  moWorkList.appendChild(moWorkListItemP); // tell the code where to put the created tag

  const moWorkListItemDiv = document.createElement("div"); // create a div tag
  moWorkListItemDiv.classList.add("moCreatedListItemButtonContainer"); // add class to the created tag
  moWorkList.appendChild(moWorkListItemDiv); // tell the code where to put the created tag

  const moDoneButton = document.createElement("button"); // create a button tag
  moDoneButton.classList.add("moButtonDone"); // add class to the created tag
  moWorkListItemDiv.appendChild(moDoneButton); // puts the button inside the div buttoncontainer

  const moEditButton = document.createElement("button"); // create a button tag
  moEditButton.classList.add("moButtonEdit"); // add class to the created tag
  moWorkListItemDiv.appendChild(moEditButton); // puts the button inside the div buttoncontainer

  const moDelButton = document.createElement("button"); // create a button tag
  moDelButton.classList.add("moButtonDel"); // add class to the created tag
  moWorkListItemDiv.appendChild(moDelButton); // puts the button inside the div with the class moCreatedListItemButtonContainer

  moTextInputWork.value = ""; // resets the input field to an empty string / no text
});

// Delete function--------------------------------------------------------------------------------------------------------------------------------------------------

moULWork.addEventListener("click", moDoneEditDelete); // adds event listener for the unordered list to check if its clicked on and tells it what function to run if clicked on

function moDoneEditDelete(e) {
  // creates the function which will be called back on when the unordered list is clicked
  const moItemSelected = e.target; // selects what is clicked and assigns the element to a variable

  if (moItemSelected.classList[0] === "moButtonDel") {
    const moItemSelectedParent = moItemSelected.parentElement.parentElement;
    moItemSelectedParent.remove();
  }

  if (moItemSelected.classList[0] === "moButtonDone") {
    const moItemSelectedParent = moItemSelected.parentElement.parentElement;
    moItemSelectedParent.style.textDecoration = "line-through";
    moItemSelectedParent.style.opacity = "0.75";
    moItemSelectedParent.style.backgroundColor = "green";
    moItemSelectedParent.style.textShadow = "none";
  }

  if (moItemSelected.classList[0] === "moButtonEdit") {
    const moGrandparentContainer = moItemSelected.closest(
      ".moCreatedListItemWork"
    );

    if (moGrandparentContainer) {
      const moItemtoEditWork = moGrandparentContainer.querySelector("p");

      if (moItemtoEditWork) {
        moItemtoEditWork.textContent = moTextInputWork.value;
      }
    }
  }

  if (moItemSelected.classList[0] === "moButtonEdit") {
    const moGrandparentContainer = moItemSelected.closest(
      ".moCreatedListItemPrivate"
    );

    if (moGrandparentContainer) {
      const moItemtoEditPrivate = moGrandparentContainer.querySelector("p");

      if (moItemtoEditPrivate) {
        moItemtoEditPrivate.textContent = moTextInputPrivate.value;
      }
    }
  }
}

// Add List Item in the Private TDL--------------------------------------------------------------------------------------------------------------------------------------------------

const moAddButtonPrivate = document.getElementById("moToDoDisplayFormPrivate");
const moULPrivate = document.querySelector("#moToDoDisplayListPrivate");
const moTextInputPrivate = document.querySelector("#moToDoTextInputPrivate");

moAddButtonPrivate.addEventListener("submit", (createListItemPrivate) => {
  createListItemPrivate.preventDefault();

  const moPrivateList = document.createElement("li");
  moPrivateList.classList.add("moCreatedListItemPrivate");
  moULPrivate.appendChild(moPrivateList);

  const moPrivateListItemP = document.createElement("p");
  moPrivateListItemP.classList.add("moCreatedListItemPrivateP");
  moPrivateListItemP.innerText = moTextInputPrivate.value;
  moPrivateList.appendChild(moPrivateListItemP);

  const moPrivateListItemDiv = document.createElement("div");
  moPrivateListItemDiv.classList.add("moCreatedListItemButtonContainer");
  moPrivateList.appendChild(moPrivateListItemDiv);

  const moDoneButton = document.createElement("button");
  moDoneButton.classList.add("moButtonDone");
  moPrivateListItemDiv.appendChild(moDoneButton);

  const moEditButton = document.createElement("button");
  moEditButton.classList.add("moButtonEdit");
  moPrivateListItemDiv.appendChild(moEditButton);

  const moDelButton = document.createElement("button");
  moDelButton.classList.add("moButtonDel");
  moPrivateListItemDiv.appendChild(moDelButton);

  moTextInputPrivate.value = "";
});

moULPrivate.addEventListener("click", moDoneEditDelete);

// niloufar js part-----------------------------------------------------------------------//
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
