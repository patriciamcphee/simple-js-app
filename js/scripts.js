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

for (let x=0; x < pokemonList.length; x++){
if (pokemonList[x].height < 1) { //any pokemon smaller than 1 m
    document.write(pokemonList[x].name + ' (height: ' + pokemonList[x].height + ') - Oh my! you look itty bitty!');
    document.write("<br />");
} else if (pokemonList[x].height > 1.4) { //any Pokemon larger than 1.4 m
    document.write(pokemonList[x].name + ' (height: ' + pokemonList[x].height + ') - Whoa there big fella!');
    document.write("<br />");
} else {
        document.write(pokemonList[x].name + ' (height: ' + pokemonList[x].height + ')');
    document.write("<br />");
}
}

