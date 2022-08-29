document.getElementById('search').addEventListener('click', getPokemonDetails);

// mAKE the first letter of the pokemon name capital
function makeFirstLetterCapital(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// APIs dont understand uppercase letters so the input should be in lowercase.Use a function to convert input to lowercase.
function setToLowercase(string){
    return string.toLowerCase();
}
// Fetch data from pokemon API
function getPokemonDetails(e){
    const pokemonName = document.getElementById('pokemonName').value;
    const nameValue = setToLowercase(pokemonName);

    // here we are using backticks to enable us to write JS code on the api URL.If you use qutes, it wont work
    fetch(`https://pokeapi.co/api/v2/pokemon/${nameValue}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.pokemonBox').innerHTML = 
                ` <div>
                    <img src="${data.sprites.other["official-artwork"]["front_default"]}" 
                    alt="${makeFirstLetterCapital(data.name)}">
                 </div>

                <div class="pokemonInfo">
                    <h1>${makeFirstLetterCapital(data.name)}</h1>
                    <p>Weight description: ${data.weight} </p>
                </div>
                
                <div>
                    <p>Ability: ${data.abilities[0].ability.name}<p/>
                <div/>`
        })
        .catch(err => console.log("Error! Pokemon not found",err))

        e.preventDefault();
}

