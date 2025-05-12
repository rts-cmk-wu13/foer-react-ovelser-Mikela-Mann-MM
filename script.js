// løs opgaverne her 

//parameters = placeholders 
//arguments : actual values


// Opgave 1 

const dog1 = dogs[1];
const dog2 = dogs[2];
console.log(dog1, dog2);

// andet eksempel(resultatet bliver det samme): 
// let [, dog1, dog2] = dogs
// console.log(dog1, dog2)

// Opgave 2

const {name, breed, owner:{contact}} = cat; 
console.log(name, breed, contact);

// Opgave 3 

function individualCatData({name, favoriteToys}) {
    console.log(name, favoriteToys); 
}
individualCatData(cat);



// Opgave 4

const [dogA, dogB, ...otherDogs] = dogs;
console.log(dogA, dogB, otherDogs);


// Opgave 5 


const dogsWithC = otherDogs.filter(dog => dog.startsWith('C'));
/* det kan også skrives sådan:
 const dogsWithC = otherDogs.filter(function(dog)
{return dog.startsWith('C')
}); */
console.log(dogsWithC);

// Opgave 6 
//breed: catBreed (her omdøber jeg bare breed til catBreed)
const {breed: catBreed, ...otherInformation} = cat;
console.log(catBreed, otherInformation);

// Opgave 7 //..spread efter =, når det som i opg 6 står før = er det ...rest
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
    //console.log(westernMovie?.details?.director || "Ukendt instruktør");
  })

  // Opgave 10

const username = "Sofie"; 
username ? console.log(`Velkommen tilbage, ${username}!`) : console.log("Velkommen gæst – log ind for en personlig oplevelse.");


