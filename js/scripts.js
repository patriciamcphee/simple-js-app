let pokemonRepository = (function() {

  //Pokemon List Array with nested Objects
  let pokemonList = [];
  // API link for the Pokemon repository
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  // Modal container
  let modalContainer = document.querySelector('#modal-container');
  let pokemonImage = document.createElement('img');
  // Public functions
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
      //'height' in pokemon &&
      //'types' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('Pokémon is not correct');
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
    // Event Listener added that reveals object details when button is clicked
    button.addEventListener('click', function() {
      showDetails(pokemon);
    })
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
      })
    }).catch(function(e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      showModal(item);
    })
  }

  // showModal function
  function showModal(pokemon) {
    let modalContainer = document.querySelector('#modal-container');

    // clear any existing model content
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    // add new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';

    // close model 
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: '  + '\n' + pokemon.height + 'm';

    let typesElement = document.createElement('p');
    typesElement.innerText = 'Type: '  + '\n' + pokemon.types;
 
    pokemonImage.src = pokemon.imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(typesElement);
    modal.appendChild(pokemonImage);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  // hideModal function
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  // hideModal Esc key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  // hideModal click outside modal
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

// Add Pokemon function
pokemonRepository.loadList().then(function() {
  // forEach() Loop with DOM manipulation
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});