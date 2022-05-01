let pokemonRepository = (function() {

  //Pokemon List Array with nested Objects
  let pokemonList = [];
  // API link for the Pokemon repository
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  // Modal container
  let modalContainer = document.querySelector('#modal-container');

  // Public functions
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('Sorry, Ash! The Pokémon isn\'t correct.');
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    listItem.classList.add('.list-group-item');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button', 'w-100');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    // Event Listener added that reveals object details when button is clicked
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = [];
      details.types.forEach(function(detail) {
        item.types.push(' ' + detail.type.name);
      });
    }).catch(function(e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      showModal(item);
    });
  }

  // showModal function
  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');

    modalTitle.empty();
    modalBody.empty();

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + pokemon.height + 'm';

    let typesElement = document.createElement('p');
    typesElement.innerText = 'Types: ' + pokemon.types;

    // Modal image container
    let container = document.querySelector('.pokemon-image-details-container');
    let pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.imageUrl;

    //modal.appendChild(closeButtonElement);
    modalTitle.append(titleElement);
    modalBody.append(contentElement);
    modalBody.append(typesElement);
    modalBody.append(pokemonImage);
  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

// Add Pokemon function
pokemonRepository.loadList().then(function() {
  // forEach() Loop with DOM manipulation
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});