var wakeDog = function wakeDog(dogName="Xerox", dogBreed="Border Collie") {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    // dogName ="Xerox";
    // dogBreed ="Border Collie";
    return `Wake ${dogName} the ${dogBreed}`;
}

var leashDog = function leashDog(dogName="Boo Radley", dogBreed="Pibble") {
    console.log(`Leash ${dogName} the ${dogBreed}`);
     //dogName ="Boo Radley";
    // dogBreed ="Pibble";
    return `Leash ${dogName} the ${dogBreed}`;
}

var walkToPark = function walkToPark(dogName="Bunny", dogBreed="Labrador") {
    console.log('Walk to the park with ${dogName} the ${dogBreed}');
    // dogName ="Bunny";
    // dogBreed ="Labrador";
    return `Walk to the park with ${dogName} the ${dogBreed}`;
}

var throwFrisbee = function throwFrisbee(dogName="Mary J. Blige", dogBreed="Papillon") {
    console.log('Throw the frisbee for ${dogName} the ${dogBreed}');
    // dogName ="Mary J. Blige";
    // dogBreed ="Papillon";
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

var walkHome = function walkHome(dogName="Santa Paws", dogBreed="Husky") {
    console.log('Walk home with ${dogName} the ${dogBreed}');
    // dogName ="Santa Paws";
    // dogBreed ="Husky";
    return `Walk home with ${dogName} the ${dogBreed}`;
}

var unleashDog = function unleashDog(dogName="Lauren", dogBreed="Golden Retriever") {
    console.log('Unleash ${dogName} the ${dogBreed}');
    // dogName ="Lauren";
    // dogBreed ="Golden Retriever";
    return `Unleash ${dogName} the ${dogBreed}`;
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}