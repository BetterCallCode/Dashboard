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

let form = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form input");
let taskDetailsInput = document.querySelector(".addTask form textarea");
let taskCheckbox = document.querySelector(".addTask form #check");

var currentTask = [];

if(localStorage.getItem('currentTask')){
  currentTask = JSON.parse(localStorage.getItem('currentTask'))
}else{
  console.log('hello');
}

function renderTask() {
  let allTask = document.querySelector(".allTask");

  let sum = "";

  currentTask.forEach(function (elem) {
    sum += `<div class="task">
              <h5>${elem.task} <span class=${elem.imp}>Imp</span></h5>
              <button>Mark as Completed</button>
          </div>
                `;
  });

  allTask.innerHTML = sum;
}

renderTask();


form.addEventListener("submit", function (e) {
  e.preventDefault();
  currentTask.push({
    task: taskInput.value,
    details: taskDetailsInput.value,
    imp: taskCheckbox.checked
  })

  localStorage.setItem('currentTask', JSON.stringify(currentTask))  
  taskInput.value = ''
  taskDetailsInput.value = ''
  taskCheckbox.checked = false

  renderTask();
});

