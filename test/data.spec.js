import { drawResults, characterInfo, filterData } from '../src/data.js';
import data from "./data/rickandmorty/rickandmorty.js";


describe('drawResults', () => {
  it('is a function', () => {
    expect(typeof drawResults).toBe('function');
  });

  it('Filtrado de datos drawResults', () => {
    const character = {"id": 1, "name": "Rick Sanchez", "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",}
    const results = `<section class="card">
   <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg" alt="" id="image1" class="imagen">
   <h3>Rick Sanchez</h3>
  </section>`
    expect(drawResults(character)).toEqual(results)
  })
});

describe('characterInfo', () => {
  it('is a function', () => {
    expect(typeof characterInfo).toBe('function');
  })
});

  it('Filtrado de datos characterInfo', () => {
    const information = {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31"
    ]}
    const info = `<section id="info">
  <img src="${information.image}" alt="" class="img">
  <h2>Name:</h2> <h3>${information.name}</h3>
  <p><h2>Specie:</h2><h3>${information.species}</h3></p>
  <h2>Gender:</h2> <h3>${information.gender}</h3>
  <h2>Status:</h2> <h3>${information.status}</h3>
  <h2>Type:</h2> <h3>${information.type}</h3>
  <h2>Origin:</h2> <h3>${information.origin.name}</h3>
  <h2>Location:</h2> <h3>${information.location.name}</h3>
  <h2>Episode:</h2> <h3>${information.episode.length}</h3>
  </section>`
    expect(characterInfo(information)).toBe(info);
 
});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Filtrado de datos filterData', () => {
    const vampResults = `<section class="card">
    <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/66.jpeg" alt="" id="image66" class="imagen">
    <h3>Coach Feratu (Balik Alistane)</h3>
   </section><section class="card">
    <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/374.jpeg" alt="" id="image374" class="imagen">
    <h3>Vampire Master</h3>
   </section><section class="card">
    <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/453.jpeg" alt="" id="image453" class="imagen">
    <h3>Vampire Master's Assistant</h3>
   </section>`
    expect(filterData(data.results)).toBe(vampResults)
  })
});

// const vampire = [{
//   "id": 66,
//   "name": "Coach Feratu (Balik Alistane)",
//   "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/66.jpeg",
// },
// {
// "id": 453,
// "name": "Vampire Master's Assistant",
// "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/453.jpeg",
// },
// {
// "id": 374,
// "name": "Vampire Master",
// "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/374.jpeg",
// }]