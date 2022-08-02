import { characterInfo, filterData, filterGender, filterEpisode, filterSearch } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

let search = document.querySelector(".search");

function searchName(){
  document.getElementById("drawSearch").innerHTML = '';
  document.getElementById("episodeSection").innerHTML = '';
  document.getElementById("specieSection").innerHTML = '';
  document.getElementById("genderSection").innerHTML = '';
  const boxValue = search.value.toLowerCase();
  const filter = filterSearch(data);
  document.getElementById("drawSearch").innerHTML = filter;
  data.results.forEach(dataRM =>{
    if(dataRM.name.toLocaleLowerCase().includes(boxValue)){
      const idImage = "image" + dataRM.id;
      const img = document.getElementById(idImage);
      img.addEventListener("click", onOverlay, true); 
      img.dataRM = dataRM;
    }
  });
}

// function searchName() {
//   drawSearch.innerHTML = "";
//   document.getElementById("episodeSection").innerHTML = '';
//   document.getElementById("specieSection").innerHTML = '';
//   document.getElementById("genderSection").innerHTML = '';
//   const boxValue = search.value.toLowerCase();
//   console.log(boxValue)
//   data.results.forEach(dataRM =>{
//     if(dataRM.name.toLocaleLowerCase().includes(boxValue)){
//       console.log(dataRM.name)
//       drawSearch.innerHTML += drawResults(dataRM);
//      }
//   });
// for (let names of data.results) {
//     let drawName = names.name.toLowerCase();
//     console.log(names.name.toLowerCase())
//     if (drawName.includes(boxValue)) {
//       console.log(characterInfo(names));
//       drawSearch.innerHTML += characterInfo(names);
//     }
//   }
// }

search.addEventListener("keyup", searchName);

function onEpisodeSelect(event){
  document.getElementById("drawSearch").innerHTML = '';
  document.getElementById("episodeSection").innerHTML = '';
  document.getElementById("specieSection").innerHTML = '';
  document.getElementById("genderSection").innerHTML = '';
  const filter = filterEpisode(event.target.id, data);
  document.getElementById("episodeSection").innerHTML = filter;
  data.results.forEach(dataRM =>{
    if(dataRM.episode.includes(event.target.id)){
      const idImage = "image" + dataRM.id;
      const img = document.getElementById(idImage);
      img.addEventListener("click", onOverlay, true); 
      img.dataRM = dataRM;
    }else{
      console.log('no coincide')
    }
  });
}

function onSpecieSelect(event){
  document.getElementById("drawSearch").innerHTML = '';
  document.getElementById("episodeSection").innerHTML = '';
  document.getElementById("specieSection").innerHTML = '';
  document.getElementById("genderSection").innerHTML = '';
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
function onGenderSelect(event){
  document.getElementById("drawSearch").innerHTML = '';
  document.getElementById("episodeSection").innerHTML = '';
  document.getElementById("specieSection").innerHTML = '';
  document.getElementById("genderSection").innerHTML = '';
  const filter = filterGender(event.target.id, data);
  document.getElementById("genderSection").innerHTML = filter;
  data.results.forEach(dataRM =>{
    if(dataRM.gender == event.target.id){
      const idImage = "image" + dataRM.id;
      const img = document.getElementById(idImage);
      img.addEventListener("click", onOverlay, true); 
      img.dataRM = dataRM;
    }
  });
}
let buttons = document.getElementsByClassName("sub");
Array.from(buttons).forEach(element=>{element.addEventListener("click", onEpisodeSelect)});
let buttons1 = document.getElementsByClassName("subcat");
Array.from(buttons1).forEach(element=>{element.addEventListener("click", onGenderSelect)});
let buttons2 = document.getElementsByClassName("subcategories");
Array.from(buttons2).forEach(element=>{element.addEventListener("click", onSpecieSelect)});

const overlay = document.getElementById("overlay");

function onOverlay(event) {
  overlay.innerHTML = ""
  overlay.style.display = "block";
  const overlayFilter = data.results.filter(dataRM => "image"+dataRM.id === event.target.id )
  overlay.innerHTML += characterInfo(overlayFilter[0]); 
}
function offOverlay() {
  overlay.style.display = "none";
}
overlay.addEventListener("click", offOverlay);