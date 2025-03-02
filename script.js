
let colors = ["red", "blue", "green", "purple", "orange"];
    let index = 0;
document.getElementById("colorChange-btn").addEventListener("click", function(event){
    document.body.style.backgroundColor = colors[index];
        index++;
    if (index >= colors.length) {
      index = 0; // 
    }
  });

const cDate = new Date();
document.getElementById("set-date").innerText = cDate.toDateString();

let complete = document.querySelectorAll(".btn-comp ");

for (let i = 0; i < complete.length; i++) {
  const completeBtn = complete[i];
  completeBtn.addEventListener("click", function (event) {
    let parent = event.target.parentElement.parentElement;
    console.log(parent);

    let title = parent.querySelector("h2").innerText;
    let time = getCurrentTime();

    // Task Assigned minus
    let taskValue = document.getElementById("taskValue").innerText;
    taskValue = parseInt(taskValue);
    taskValue -= 1;
    document.getElementById("taskValue").innerText = taskValue;

    // Total Task +
    let headValue = document.getElementById("headValue").innerText;
    headValue = parseInt(headValue);
    headValue += 1;
    document.getElementById("headValue").innerText = headValue;

    alert(`
        Board Updated Successfully `);

    if (taskValue == 0) {
      alert(`
        Congrats 🥳🥳🥳 You have completed the all task!!!
        `);
    }
    // Disable Button and Bg color change
    completeBtn.setAttribute("disabled", "true");
    completeBtn.style.backgroundColor = "rgb(211, 211, 211)";

    let history = `
        <div class="flex flex-col gap-2 bg-gray-100 p-4 rounded-md">
            <P>Completed Task : </P>
            <h2 class="text-[18px] font-semibold text-gray-600">${title} </h2>
            <p>Time : ${getCurrentTime()}</p>
        </div>
        `;


    document
      .getElementById("history-container")
      .insertAdjacentHTML("afterbegin", history);
  });
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;
}

document.getElementById("clear-btn").addEventListener("click", function(){
  document.getElementById("history-container").innerText = ""
})

document.getElementById("discover-btn").addEventListener("click", function(){
  window.location.href = ("../blogs.html")
})


