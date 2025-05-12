/* // løs opgaverne her


### opgave 8
Saml de to objekter "checkeredGiantBasic" og "checkeredGiantTraits" til et samlet objekt "checkeredGiantInfo" ved hjælp af spread-operatoren.


// Opgave 1 

const dog1 = dogs[1];
const dog2 = dogs[2];
console.log(dog1, dog2);

// Opgave 2

const {name, breed, owner:{contact}} = cat; 
console.log(name, breed, contact);*/

// Opgave 3 

function individualData({name, favoriteToys}) {
    console.log(name, favoriteToys); 
}
individualData(cat);

// Opgave 4

const [dogA, dogB, ...otherDogs] = dogs;
console.log(dogA, dogB, otherDogs);


// Opgave 5 


const dogsWithC = otherDogs.filter(dog => dog.startsWith('C'));
console.log(dogsWithC);

// Opgave 6 
const {breed, ...rest} = cat;
console.log(breed, rest);

// Opgave 7 
const rabbitBreeds = [...smallRabbitBreeds, ...largeRabbitBreeds];
console.log(rabbitBreeds);

// Opgave 8 

const checkeredGiantInfo = {
    ...checkeredGiantBasic,
    ...checkeredGiantTraits
  };
  
  console.log(checkeredGiantInfo);

  // Opgave 9

  westernMovies.forEach((westernMovie) => {
    const director = westernMovie?.details?.director;
    console.log(director ?? "Ukendt instruktør");
  })

  // Opgave 10

const username = "Sofie"; 
username ? console.log(`Velkommen tilbage, ${username}!`) : console.log("Velkommen gæst – log ind for en personlig oplevelse.");


