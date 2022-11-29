const pokemon_container = document.getElementById("pokemon-container");

async function catchEmAll(count) {
    // const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    // const data = await response.json();
    // console.log(data);

    for (let i = 1; i <= count; i++) {
        await catchPokemon(i)
    }

    // fetch("https://pokeapi.co/api/v2/pokemon/")
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));
}

async function catchPokemon(id) {
    // fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     .then((response) => response.json())
    //     .then((data) => createCard(data));

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    createCard(data);
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("data");
    card.style.backgroundColor = colors[data.types[0].type.name];

    const imgContainer = document.createElement("div");
    card.classList.add("img-container");
    imgContainer.innerHTML = `<img src = "https//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"
    alt = "${data.name}" >`;

    card.appendChild(imgContainer);
    pokemon_container.appendChild(card);

    let types = "";
    data.types.forEach((type) => {
        types += capitalizeFirstLetter(types.type.name()) + ", ";
    });

    types = types.slice(0, -2);


    const infoContainer = `
    <div class="info">
        <span class="number">#${data.id}</span>
        <h3 class="name">${capitalizeFirstLetter(data.name)}</h3>
        <p class="type">Type: ${types}</p>
        
    </div>
    `;

    card.innerHTML += (infoContainer);
}

        const pokemon_count = 151;
        catchEmAll(pokemon_count);