const person = {
  firstName: 'Bilbo',
  lastName: 'Baggins',
  Hobby: 'going on adventures',
};

console.log(person);

const fullName =
  "The person's name is: " + person.firstName + ' ' + person.lastName;

console.log(fullName);

person.job = 'burglar';

console.log("The person's current job is: " + person.job);

person['previousJob'] = 'Wealthy land owning, cheese loving, leisurist';

console.log("the person's previous job was: " + person['previousJob']);

console.log('The complete person object: ', person);
