import { drawResults } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

let search = document.querySelector("#search");

let drawSearch = document.getElementById("drawSearch");
const test = document.getElementById("overlay");

function searchName() {
  drawSearch.innerHTML = "";
  const boxValue = search.value.toLowerCase();
  if (boxValue === "") {
    alert("¡Escribe algo!");
  } else {
    for (let names of data.results) {
      let drawName = names.name.toLowerCase();
      if (drawName.indexOf(boxValue) !== -1) {
        drawSearch.innerHTML += drawResults(names);
      }
    }
  }
}

search.addEventListener("keyup", searchName);

let filterMale = document.getElementById("male");
let genderMale = document.getElementById("genderMale");

function btnMale() {
  genderFemale.innerHTML = "";
  genderMale.innerHTML = "";
  genderUnknown.innerHTML = "";
  genderGenderless.innerHTML = "";

  data.results.forEach((dataRM) => {
    if (dataRM.gender == "Male") {
      genderMale.innerHTML += drawResults(dataRM);
    }
  });
}

filterMale.addEventListener("click", btnMale);

let filterFemale = document.getElementById("female");
let genderFemale = document.getElementById("genderFemale");

function btnFemale() {
  genderFemale.innerHTML = "";
  genderMale.innerHTML = "";
  genderUnknown.innerHTML = "";
  genderGenderless.innerHTML = "";

  data.results.forEach((dataRM) => {
    if (dataRM.gender == "Female") {
      genderFemale.innerHTML += drawResults(dataRM);
    }
  });
  data.results.forEach((dataRM) => {
    if (dataRM.gender == "Female") {
      let prueba = "image" + dataRM.id;
      console.log(prueba);
      document.getElementById(prueba).addEventListener("click", Overlay, true);
    }
  });
}

filterFemale.addEventListener("click", btnFemale);

let filterUnknown = document.getElementById("unknown");
let genderUnknown = document.getElementById("genderUnknown");

function btnUnknown() {
  genderFemale.innerHTML = "";
  genderMale.innerHTML = "";
  genderUnknown.innerHTML = "";
  genderGenderless.innerHTML = "";

  data.results.forEach((dataRM) => {
    if (dataRM.gender == "unknown") {
      genderUnknown.innerHTML += drawResults(dataRM);
    }
  });
}

filterUnknown.addEventListener("click", btnUnknown);

let filterGenderless = document.getElementById("genderless");
let genderGenderless = document.getElementById("genderGenderless");

function btnGenderless() {
  genderFemale.innerHTML = "";
  genderMale.innerHTML = "";
  genderUnknown.innerHTML = "";
  genderGenderless.innerHTML = "";

  data.results.forEach((dataRM) => {
    if (dataRM.gender == "Genderless") {
      genderGenderless.innerHTML += drawResults(dataRM);
    }
  });
}

filterGenderless.addEventListener("click", btnGenderless);

function Overlay() {
  test.style.display = "block";
}

function offOverlay() {
  test.style.display = "none";
}
test.addEventListener("click", offOverlay);

function onSpecieSelect(event){
  document.getElementById("specieSection").innerHTML = ""
  data.results.forEach(dataRM =>{
    if(dataRM.species == event.target.id){
      document.getElementById("specieSection").innerHTML += drawResults(dataRM);   
     }
  })
}
      
let buttons = document.getElementsByClassName("subcategories");
Array.from(buttons).forEach(element=>{element.addEventListener("click", onSpecieSelect)});

// window.onload = function bringImg(){
//   const images = document.getElementsByClassName("image");
//   for(var i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", openImage.bind(images[i], i), false);
//   }
// }

// function openImage(image) {
//   console.log(image);
//   document.getElementById("overlay").style.display = "block";
// }
// console.log(images);

