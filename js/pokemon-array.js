let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass'] },
    { name: 'Charmander', height: 0.6, types: ['fire'] },
    { name: 'Golbat', height: 1.6, types: ['flying', 'poison'] },
    { name: 'Alakazam', height: 1.5, types: ['psychic'] },
  ];
  
  let pokemonList2 = [
    {name:'Ivysaur', height: 1.0, type: [ 'Grass' ] },
    {name:'Stonjourner', height: 2.5, type: [ 'Rock'] },
    {name:'Spectrier', height:2.0, type: [ 'Ghost' ] },
    {name:'Copperajah', height:3.0, type: [ 'Steel' ] },
    {name:'Eiscue', height:1.4, type: [ 'Ice' ] },
  ];
  
  function printArrayDetails(list){
    for (let i = 0; i < list.length; i++){
      document.write('<p>' + list[i].name + '</p>')
      console.log(list[i].name);
    }
  }
  
  printArrayDetails(pokemonList2);
  printArrayDetails(pokemonList);
  