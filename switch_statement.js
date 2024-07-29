// Example with a number variable
const dayNumber = 3; 

switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day number');
        break;
}

// Example with a string variable
const fruit = 'apple'; 

switch (fruit) {
    case 'apple':
        console.log('It is an apple.');
        break;
    case 'banana':
        console.log('It is a banana.');
        break;
    case 'cherry':
        console.log('It is a cherry.');
        break;
    case 'date':
        console.log('It is a date.');
        break;
    default:
        console.log('Unknown fruit');
        break;
}

// Example with multiple cases for the same block
const grade = 'B'; 

switch (grade) {
    case 'A':
    case 'B':
        console.log('Excellent or Good');
        break;
    case 'C':
    case 'D':
        console.log('Satisfactory or Needs Improvement');
        break;
    case 'F':
        console.log('Fail');
        break;
    default:
        console.log('Invalid grade');
        break;
}
