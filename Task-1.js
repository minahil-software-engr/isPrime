const isPrime=(number)=> {
//  0, 1, aur negative numbers prime nahi hotay
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false; // Agar divide ho gaya toh prime nahi hai
    }
  }
  return true; // Agar kisi se divide nahi hua toh prime hai
}
let count = 0;            
let resultText = "";      
for (let number = 1; number <= 1000; number++) {
  // Agar number prime hai
  if (isPrime(number)) {
    count = count + 1;                 
    resultText = resultText + number + ", ";  //concatenation +
  }
}
console.log("Prime Numbers between 1-1000:");
console.log(resultText);
console.log("Total Prime Numbers:");
console.log(count);


