/* Your JS goes in this file */
const age = 32;

function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

console.log(isAdult(age));

const student1Score = 96;

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}

console.log(didStudentPass(student1Score));

const student2Score = 105;

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70 && score >= 60) {
    return 'D';
  } else if (score < 80 && score >= 70) {
    return 'C';
  } else if (score < 90 && score >= 80) {
    return 'B';
  } else if (score < 100 && score >= 90) {
    return 'A';
  } else {
    return 'A++';
  }
}

console.log(gradeCalculator(student2Score));

const season = 'Spring';

function seasonMessenger(season) {
  if (season === 'Summer') {
    return "It's hot today!";
  } else if (season === 'Spring') {
    return 'The flowers are blooming!';
  } else if (season === 'Autumn') {
    return 'The leaves are changing!';
  } else if (season === 'Winter') {
    return "It's cold today!";
  } else {
    return 'Please enter a valid season!';
  }
}

console.log(seasonMessenger(season));

const dayOfTheWeek = 'Saturday';

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return 'Have a great weekend!!!';
  } else {
    return "It's a weekday!!";
  }
}

console.log(dayDetector(dayOfTheWeek));
