import { drawResults, characterInfo, filterData } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

let search = document.querySelector(".search");
let drawSearch = document.getElementsByClassName("drawSearch");

function searchName() {
  drawSearch.innerHTML = "";
  const boxValue = search.value.toLowerCase();
  if (boxValue === "") {
    alert("¡Escribe algo!");
  } else {
    for (let names of data.results) {
      let drawName = names.name.toLowerCase();
      if (drawName.indexOf(boxValue) !== -1) {
        // console.log(drawResults(names));

        drawSearch.innerHTML += drawResults(names);
      }
    }
  }
}

search.addEventListener("keyup", searchName);

function onSpecieSelect(event){
  document.getElementById("specieSection").innerHTML = '';
  const filter = filterData(event.target.id, data);
  document.getElementById("specieSection").innerHTML = filter;
  data.results.forEach(dataRM =>{
    if(dataRM.species == event.target.id){
      const idImage = "image" + dataRM.id;
      const img = document.getElementById(idImage);
      img.addEventListener("click", onOverlay, true); 
      img.dataRM = dataRM;
    }
  });
}
let buttons = document.getElementsByClassName("subcategories");
Array.from(buttons).forEach(element=>{element.addEventListener("click", onSpecieSelect)});

const overlay = document.getElementById("overlay");

function onOverlay(event) {
  overlay.innerHTML = ""
  overlay.style.display = "block";
  const overlayFilter = data.results.filter(dataRM => "image"+dataRM.id === event.target.id )
  overlay.innerHTML += characterInfo(overlayFilter[0]); 
    // console.log(event.target.dataRM);
}
function offOverlay() {
  overlay.style.display = "none";
}
overlay.addEventListener("click", offOverlay);