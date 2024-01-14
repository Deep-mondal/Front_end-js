var changeAction = document.querySelector("#changeAction");
var getAction = document.querySelector("#getAction");
var heading = document.querySelector("#heading");
var para = document.querySelector("#para");

getAction.addEventListener("click", function () {
  if (changeAction.style.background == "burlywood") {
    changeAction.style.background = "blue";
    heading.innerText = "Es5";
    heading.style.color = "white";
    para.innerText = "Older version";
  } else {
    changeAction.style.color = "black";
    heading.innerText = "Es6";
    heading.style.color = "black";
    changeAction.style.background = "burlywood";
    para.innerText =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, dicta!";
  }
});
