export const drawResults = (character) => {
  return `<section class="card">
   <img src="${character.image}" alt="" id="image${character.id}" class="imagen">
   <h3>${character.name}</h3>
  </section>`;
};

export const characterInfo = (information) => {
  return `<section id="info">
  <img src="${information.image}" alt="" class="img">
  <div><h2>Name:</h2> <h3>${information.name}</h3></div>
  <div><h2>Specie:</h2><h3>${information.species}</h3></div>
  <div><h2>Gender:</h2> <h3>${information.gender}</h3></div>
  <div><h2>Status:</h2> <h3>${information.status}</h3></div>
  <div><h2>Type:</h2> <h3>${information.type}</h3></div>
  <div><h2>Origin:</h2> <h3>${information.origin.name}</h3></div>
  <div><h2>Location:</h2> <h3>${information.location.name}</h3></div>
  <div><h2>Episode:</h2> <h3>${information.episode.length}</h3></div>
  </section>`;
};

export function filterData(specieId, data){
  let result = '';
  data.results.forEach(dataRM =>{
    if(dataRM.species == specieId){
      result += drawResults(dataRM);
     }
  });
  console.log(result);
  return result;
}

// export const example = (letter) => {
//   return "a" + letter;
// };