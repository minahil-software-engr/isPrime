let isPrime = []; //array khali hay start mayy
for (let i = 0; i <= 1000; i++) { //array kay har index may value true kardi
  isPrime[i] = true;
}
// 0 aur 1 prime nahi hotay tu inn dono index ki value false kardi
isPrime[0] = false;
isPrime[1] = false;
// Step 3: Multiples ko cross/cut karna (Main Sieve Logic)
for (let i = 2; i <= Math.sqrt(1000); i++) {  //yah outer loop hay
  if (isPrime[i] === true) {   //filhal i prime hay
    // i ke saare multiples ko false kar do
    for (let j = i * i; j <= 1000; j += i) {   //inner loop 
      isPrime[j] = false;
    }
  }
}
let count = 0;
let resultText = "";
for (let number = 1; number <= 1000; number++) {
  if (isPrime[number] === true) {
    count = count + 1;
    resultText = resultText + number + ", ";
  }
}
console.log("Primes between 1 and 1000:");
console.log(resultText);
console.log("Total Prime Count:");
console.log(count);