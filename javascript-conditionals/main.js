/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

console.log(isUnderFive(3));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(17));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log(startsWithJ('Javascript'));

const willy = {
  name: 'william "willy" cunningham',
  age: 20,
};

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

console.log(isOldEnoughToDrink(willy));

const hugh = {
  name: 'Hugh Janus',
  age: 58,
};

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

console.log(isOldEnoughToDrive(hugh));

const seymour = {
  name: 'Seymour Butts',
  age: 35,
};

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age) {
    return false;
  }
}

console.log(isOldEnoughToDrinkAndDrive(seymour));

function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return pH + ' Is acidic';
  } else if (pH === 7) {
    return pH + ' Is neutral';
  } else if (pH > 7 && pH <= 14) {
    return pH + ' Is a base';
  } else {
    return pH + ' is an invalid pH level!';
  }
}

console.log(categorizeAcidity(20));

function introduceWarnerBro(name) {
  switch (name) {
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'yakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute");
      break;
    default:
      console.log('Goodnight everybody!');
  }
}

introduceWarnerBro('dot');

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Rambo');
      break;
    case 'comedy':
      console.log('Beetlejuice');
      break;
    case 'horror':
      console.log('Cabin in the Woods');
      break;
    case 'drama':
      console.log('Goodfellas');
      break;
    case 'musical':
      console.log('The Phantom of the Opera');
      break;
    case 'sci-fi':
      console.log('The Martian');
      break;
    default:
      console.log(
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi'
      );
  }
}

recommendMovie('drama');
