//Optimized: yah tamam even  numbers ko pahly hi reject karday ga sirf odd number test karay ga
const isPrime=(number)=> {
  if (number <= 1) {  //multiple if mtlb condition true ho bhi jaya tab bhi next condition dakhta hay
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
// ab yah sirf odd dhakay ga
  let limit = Math.sqrt(number);
  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
let count = 0;
let resultText = "";
for (let i = 1; i <= 1000; i++) {
  if (isPrime(i)) {
    count = count + 1;
    resultText = resultText + i + ", ";
  }
}
console.log("Primes between 1 and 1000:");
console.log(resultText);
console.log("Total Prime Count:");
console.log(count);
