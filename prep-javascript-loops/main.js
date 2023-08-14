// create your loops here.
function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    while (array.length < 10) {
      array.push(i++);
    }
  }
  return array;
}

console.log('Whileloop1 output', whileLoop1());

function whileLoop2() {
  const array = [];
  let i = -2;
  while (i < 9) {
    while (array.length < 10) {
      array.push((i += 2));
    }
  }
  return array;
}

console.log('Whileloop2 output', whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}

console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion: ', i);
  }
}

forLoop2();

function forInLoop1() {
  const object = {
    name: 'Ada LoveLace',
    age: 'classic',
    hobby: 'computation',
    invention: 'analytical engine',
  };

  const array = [];

  for (const property in object) {
    array.push(property);
  }
  return array;
}

console.log(forInLoop1());

function forInLoop2() {
  const object = {
    name: 'Ada LoveLace',
    age: 'classic',
    hobby: 'computation',
    invention: 'analytical engine',
  };

  const array = [];

  for (const property in object) {
    array.push(object[property]);
  }
  return array;
}

console.log(forInLoop2());
