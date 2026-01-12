function openFeatures() {
  let allElems = document.querySelectorAll(".elem");
  let fullElemPage = document.querySelectorAll(".fullElem");
  let fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "block";
    });
  });

  fullElemPageBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}

openFeatures();

function todoList() {
  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form input");
  let taskDetailsInput = document.querySelector(".addTask form textarea");
  let taskCheckbox = document.querySelector(".addTask form #check");

  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("hello");
  }

  function renderTask() {
    let allTask = document.querySelector(".allTask");

    let sum = "";

    currentTask.forEach(function (elem, id) {
      sum += `<div class="task">
              <h5>${elem.task} <span class=${elem.imp}>Imp</span></h5>
              <h4 class=details>${elem.details}</h4>
              <button id=${id}>Mark as Completed</button>
          </div>
                `;
    });

    allTask.innerHTML = sum;

    localStorage.setItem("currentTask", JSON.stringify(currentTask));
  }

  renderTask();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    currentTask.push({
      task: taskInput.value,
      details: taskDetailsInput.value,
      imp: taskCheckbox.checked,
    });

    taskInput.value = "";
    taskDetailsInput.value = "";
    taskCheckbox.checked = false;

    renderTask();
  });

  let allTask = document.querySelector(".allTask");

  allTask.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const id = e.target.id;
      currentTask.splice(id, 1);
      renderTask();
    }
  });
}

todoList();
