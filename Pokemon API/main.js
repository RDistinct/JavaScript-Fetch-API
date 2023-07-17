document.getElementById('search').addEventListener('click', getPokemonDetails);

// make the first letter of the pokemon name capital
function makeFirstLetterCapital(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// APIs don't understand uppercase letters so the input should be in lowercase.Use a function to convert input to lowercase.
function setToLowercase(string){
    return string.toLowerCase();
}

// Fetch data from pokemon API
/* function getPokemonDetails(e){
    const pokemonName = document.getElementById('pokemonName').value;
    console.log(pokemonName);
    const nameValue = setToLowercase(pokemonName);

    // here we are using backticks to enable us to write JS code on the api URL.If you use quotes, it wont work
    fetch(`https://pokeapi.co/api/v2/pokemon/${nameValue}`)
    .then(response => {
        //handle error
        console.log(response);
        if(!response.ok){
            throw new Error(`Sorry. Error ${response.status}`)
        }else
           return response.json()
        })
    .then((data) => {
        console.log(data);
         document.querySelector('.pokemonBox').innerHTML = 
                ` <div>
                    <img src="${data.sprites.other["official-artwork"]["front_default"]}" 
                    alt="${makeFirstLetterCapital(data.name)}">
                 </div>

                 <div class="pokemonInfo">
                    <h1>${makeFirstLetterCapital(data.name)}</h1>
                    <p>Weight description: ${data.weight} </p>
                </div>` 
        })
    .catch(err => console.log(`Error! Pokemon not found,${err}`))

        e.preventDefault();
} */

//async version getPokemonDetails
async function getPokemonDetails(e){
    const pokemonName = document.getElementById('pokemonName').value;
    console.log(pokemonName);
    const nameValue = setToLowercase(pokemonName);

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameValue}`)

        if(!response.ok){
            throw new Error(`response.status`)
        }

        const data = await response.json();
        document.querySelector('.pokemonBox').innerHTML = 
                ` <div>
                    <img src="${data.sprites.other["official-artwork"]["front_default"]}" 
                    alt="${makeFirstLetterCapital(data.name)}">
                 </div>

                 <div class="pokemonInfo">
                    <h1>${makeFirstLetterCapital(data.name)}</h1>
                    <p>Weight description: ${data.weight} </p>
                </div>`

    } catch(error){}
}