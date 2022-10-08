const para=document.createElement("p");
para.textContent="this is created using DOM API."
para.classList.add("one")
para.classList.add("secondclass")

para.setAttribute("id","js-para")
//console.log(para.getAttribute("id"));

const span=document.createElement("span");
span.id="span-id";
span.className="blue red";
span.textContent="this is span created using dom API.";
span.innerHTML="<em>This is emphasisized text.</em>";
span.style.backgroundColor="yellow";

para.appendChild(span);

document.body.appendChild(para);

const hobbies = ["coding","swimming","jogging"];
const lis = document.createElement("ul");
for(let hobby of hobbies){
    lis.innerHTML += "<li class='blue'>" + hobby + "</li>";
}

document.body.appendChild(lis);

//console.log(document.getElementById("js-para").textContent)
//console.log(document.getElementsByClassName("blue"));

//console.log(document.querySelectorAll("p"))

console.log(document.querySelector("#first-para"));

console.log(document.querySelector(".one"))