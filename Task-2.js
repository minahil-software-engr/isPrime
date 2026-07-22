const isPrime=(number)=> {
//  0, 1, aur negative numbers prime nahi hota
  if (number <= 1) {
    return false;
  }
  let limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
let count = 0;
let resultText = "";
for (let number = 1; number <= 1000; number++) {
  if (isPrime(number)) {
    count = count + 1;
    resultText = resultText + number + ", "; //conacatenation +
  }
}
console.log("Primes between 1 and 1000:");
console.log(resultText);
console.log("Total Prime Count:");
console.log(count);



