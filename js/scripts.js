let pokemonRepository = (function () {
    //original Pokemon list
    let pokemonList = [
    {
        name: 'Ivysaur',
        height: 1.0,
        type: ['Grass'],
        description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    },
    {
        name: 'Charmander',
        height: 0.6,
        type: ['Fire'],
        description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    },
    {
        name: 'Stonjourner',
        height: 2.5,
        type: ['Rock'],
        description: 'It stands in grasslands, watching the sun\’s descent from zenith to horizon. This Pokémon has a talent for delivering dynamic kicks.',
    },
    {
        name: 'Spectrier',
        height: 2.0,
        tpe: ['Ghost'],
        description: 'It probes its surroundings with all its senses save one—it doesn\’t use its sense of sight. Spectrier\’s kicks are said to separate soul from body.',
    },
    {
        name: 'Copperajah',
        height: 3.0,
        type: ['Steel'],
        description: 'They came over from another region long ago and worked together with humans. Their green skin is resistant to water.',
    },
    {
        name: 'Eiscue',
        height: 1.4,
        type: ['Ice'],
        description: 'It drifted in on the flow of ocean waters from a frigid place. It keeps its head iced constantly to make sure it stays nice and cold.',
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



  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    // Reveals object details when button is clicked
    button.addEventListener('click', function() {
      showDetails(pokemon);
    })
  }

  function showDetails(pokemon) {
    console.clear();
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };  

})();


// Add Pokemon
pokemonRepository.add({
  name: 'Tentacool',
  height: 2.9,
  types: ['Poison', 'Water'],
  description: 'Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.',
});

pokemonRepository.add({
  name: 'Butterfree',
  height: 3.5,
  types: ['Bug', 'Flying'],
  description: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
});

pokemonRepository.add({
  name: 'Metapod',
  height: 2.3,
  types: ['Bug'],
  description: 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.',
});



console.log(pokemonRepository.getAll());

// add item to Pokemon repository
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});




