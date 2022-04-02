let pokemonRepository = (function () {
    let pokemonList = [
    {
        name: "Ivysaur",
        height: 1.0,
        type: ["Grass"]
    },
    {
        name: "Charmander",
        height: 0.6,
        type: ["Fire"]
    },
    {
        name: "Stonjourner",
        height: 2.5,
        type: ["Rock"]
    },
    {
        name: "Spectrier",
        height: 2.0,
        tpe: ["Ghost"]
    },
    {
        name: "Copperajah",
        height: 3.0,
        type: ["Steel"]
    },
    {
        name: "Eiscue",
        height: 1.4,
        type: ["Ice"]
    }
    ];
  
  function add(pokemon) {
     if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
    ) {
    pokemonList.push(pokemon);
  } else {
    console.log('Sorry Ash, the Pokémon isn\'t correct!');
  }
  }

  function getAll() {
    return pokemonList;
  }

function addItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let item = document.createElement('p');
    if (pokemon.height <= 1) {
      document.write(pokemon.name + ' (height: ' + pokemon.height + ' m) - Oh my! you look itty bitty!');
      document.write('<br />');
    } else if (pokemon.height >= 3) {
      document.write(pokemon.name + ' (height: ' + pokemon.height + ' m) - Whoa there big fella!');
      document.write('<br />');
    } else {
      document.write(pokemon.name + ' (height: ' + pokemon.height + ' m)');
      document.write('<br />');
    };
    pokemonList.appendChild(item);
  }

  return {
    add: add,
    getAll: getAll,
    addItem: addItem
  };  

})();


// Add Pokemon
pokemonRepository.add({
  name: 'Tentacool',
  height: 2.9,
  types: ['Poison', 'Water']
});

pokemonRepository.add({
  name: 'Butterfree',
  height: 3.5,
  types: ['Bug', 'Flying']
});

pokemonRepository.add({
  name: 'Metapod',
  height: 2.3,
  types: ['Bug']
});



console.log(pokemonRepository.getAll());

// add item to Pokemon repository
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addItem(pokemon);
});