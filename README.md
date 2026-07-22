Is task mei mujhy 1 se 1000 ke darmiyan tamaam Prime Numbers find karne ka program banana tha, jisme screen par saare prime numbers comma-separated list mei show hotay hain aur end par unka total count print hota hai.
Is task ke liye humne Prime Numbers dhoondne ke 4 alag alag algorithms istemal kiye:

Method 1 (Basic Trial Division - number / 2):
Sab se pehlay ek arrow function isPrime banaya gaya jo yeh check karta hai ke koi diya hua number prime number hai ya nahi.
Function ke start mei hi if (number <= 1) ki condition lagayi gayi taake negative numbers, 0 aur 1 ko pehlay hi filter karke false return kar diya jaye kyun ke yeh prime numbers nahi hotay.
Phir for loop chalaya gaya jo 2 se shuru hota hai aur number / 2 tak jata hai, kyun ke kisi bhi number ka sab se bara divisor us ke aadhe se bara nahi ho sakta.
Loop ke andar Modulo operator (%) istemal karke remainder check kiya gaya, agar number % i === 0 ho jaye toh iska matlab hai number poora divide ho gaya hai aur wo prime nahi hai, is liye wahan se hi false return ho jata hai.
Agar loop bina kisi number se divide hue poora khatam ho jaye, toh function true return karta hai, jiska matlab hai ke number prime hai.
Function ke bahar ek for loop 1 se 1000 tak chalaya gaya jo har number par isPrime function ko call karta hai.
Agar number prime ho toh count variable mei +1 ka izafa kiya jata hai aur resultText string mei us number ko comma , ke sath concatenate karke add kar diya jata hai.
End par console.log ke zariye saare prime numbers ki list aur unka total count screen par print ho jata hai.

Method 2 (Square Root Optimization - Math.sqrt):
Is method mei mathematical optimization ka faida uthaya gaya hai jo yeh kehta hai ke agar kisi number ka koi divisor majood hai, toh kam se kam ek divisor us ke square root tak zaroor hoga.
Method 1 ki tarah pehlay condition <= 1 par check karke false return kiya gaya.
Is ke baad let limit = Math.sqrt(number) ke zariye number ka square root nikal kar limit set ki gayi.
Main loop ko number / 2 tak chalane ke bajaye sirf limit tak chalaya gaya, jis se loop ki total iterations boht hi kam ho jati hain.
Misal ke tor par 1000 ko check karne ke liye Method 1 mei loop 500 dafa chalta tha, jabke Method 2 mei Math.sqrt(1000) ki wajah se loop sirf 31 dafa chalta hai, jis se execution speed boht fast ho jati hai.
Baaqi logic bilkul same Method 1 ki tarah hai, jahan poora divide hone par false aur na divide hone par true return hota hai aur main loop numbers ko combine karke count karta hai.

Method 3 (Sieve of Eratosthenes):
Yeh algorithm range ke andar bulk prime numbers dhoondne ke liye duniya ka sab se efficient aur mashhoor mathematical method hai.
Isme baar baar division karne ke bajaye composite numbers ko direct cross ya mark karke reject kar diya jata hai.
Sab se pehlay let isPrime = [] naam ki ek khali array banayi gayi aur 0 se 1000 tak ek loop chala kar har index par default boolean value true set kar di gayi.
Array ke 0 aur 1 index ko manual tarike se false kiya gaya kyun ke 0 aur 1 prime numbers nahi hotay.
Phir main Sieve logic ka outer loop i = 2 se shuru kar ke Math.sqrt(1000) (yani 31) tak chalaya gaya.
Outer loop mei check kiya gaya ke agar isPrime[i] === true hai, toh iska matlab yeh number prime hai, aur ab is ke tamaam multiples ko reject karna hai.
Inner loop j = i * i se shuru ho kar 1000 tak jata hai aur har step mei j += i karta hai, jis se us prime number ke saare multiples (jaise 2 ke liye 4, 6, 8, 10... aur 3 ke liye 9, 12, 15...) ko direct array mei false mark kar diya jata hai.
Sub se aakhir mei 1 se 1000 tak ek alag loop chalaya jata hai jo check karta hai ke array ke kis index par value abhi bhi true hai.
Jin indices par value true hoti hai, unhain prime count kar ke string mei concatenate kar diya jata hai.

Method 4 (Optimized Even Skip):
Is method mei isPrime function ki conditional logic ko mazeed smart aur fast banaya gaya hai.
Pehlay check mei number <= 1 par false return hota hai.
Doosray check mei number === 2 par direct true return kiya gaya hai, kyun ke 2 duniya ka akela even prime number hai.
Teesray check mei number % 2 === 0 lagaya gaya hai jo 2 ke siva tamaam baaqi even numbers (4, 6, 8, 10...) ko pehlay hi step mei ek jhatke mei reject kar ke false return kar deta hai.
Even numbers filter ho jane ke baad function ko pata hota hai ke ab sirf odd numbers hi bache hain.
Is ke baad loop i = 3 se shuru hota hai aur i += 2 ke sath aage barhta hai, jis se yeh sirf odd numbers (3, 5, 7, 9, 11...) se divide karke testing karta hai.
Limit ko yahan bhi Math.sqrt(number) par rakha gaya hai taake loop minimum dafa chale.
Yeh method code ki 50% unnecessary calculations aur even numbers ki checking ko completely khatam kar deta hai.

Comparison :
Bulk range (1 se 1000) ke liye Sieve of Eratosthenes (Method 3) sab se unbeatable aur best hai kyun ke isme koi repeated mathematical division execution nahi hoti, balke direct memory array indices ko false mark kiya jata hai.
Individual number ko fast test karne ke liye Method 4 (Optimized Even Skip) sab se superior hai kyun ke yeh aadhe se ziada numbers ko pehle hi check mei reject kar ke baaqi odd numbers ke liye loop step-size double (i += 2) kar deta hai.
Method 2 (Math.sqrt) basic Method 1 (number / 2) ke muqable mei hazaron times fast hai kyun ke square root tak ki limit loop iterations ko boht dramatically reduce kar deti hai, jabke Method 1 sab se slow aur heavy processing leta hai.
