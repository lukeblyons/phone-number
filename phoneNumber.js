// const numbers = [4, 8, 0, 3, 6, 9, 1, 2, 3, 4];

// function createPhoneNumber(numbers) {
//   const phoneNumber = [];
//   phoneNumber.push('(');
//   phoneNumber.push(numbers[0]);
//   phoneNumber.push(numbers[1]);
//   phoneNumber.push(numbers[2]);
//   phoneNumber.push(') ');
//   phoneNumber.push(numbers[3]);
//   phoneNumber.push(numbers[4]);
//   phoneNumber.push(numbers[5]);
//   phoneNumber.push('-');
//   phoneNumber.push(numbers[6]);
//   phoneNumber.push(numbers[7]);
//   phoneNumber.push(numbers[8]);
//   phoneNumber.push(numbers[9]);
//   return phoneNumber.join('');
// }

// const phoneNumber = createPhoneNumber(numbers);
// console.log(phoneNumber);



function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const phoneNumber = createPhoneNumber(numbers);
console.log(phoneNumber);



// function createPhoneNumber(numbers) {
//     let phoneNumber = '(';
//     for (let i = 0; i < 3; i++) {
//       phoneNumber += numbers[i];
//     }
//     phoneNumber += ') ';
//     for (let i = 3; i < 6; i++) {
//       phoneNumber += numbers[i];
//     }
//     phoneNumber += '-';
//     for (let i = 6; i < 10; i++) {
//       phoneNumber += numbers[i];
//     }
//     return phoneNumber;
//   }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const phoneNumber = createPhoneNumber(numbers);
// console.log(phoneNumber);