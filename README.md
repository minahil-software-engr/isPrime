Is task mei 1 se 1000 ke darmiyan tamaam prime numbers find karke unki list print karni thi aur end par total count batana tha. Is ke liye 4 alag algorithms use kiye gaye:
Method 1 (Basic Trial Division - number / 2):
* Function `isPrime` pehle 1 ya us se chote numbers ko `false` return karta hai.
* Loop 2 se `number / 2` tak chalta hai aur Modulo operator (`%`) se check karta hai ke number divide hota hai ya nahi.
* Agar poora divide ho jaye toh `false`, warna loop khatam hone par `true` return karta hai.
* Function ke bahar 1 se 1000 tak loop chala kar prime numbers ko concatenate karke list aur total count print kar diya jata hai.
Method 2 (Square Root Optimization - Math.sqrt):
* Isme mathematical logic use hui ke kisi number ka factor hamesha us ke square root tak mil jata hai.
* Loop ko `number / 2` ke bajaye `Math.sqrt(number)` tak chalaya gaya jis se iterations boht kam ho gayi.
* Misal ke tor par 1000 ke liye loop 500 dafa chalne ke bajaye sirf 31 dafa chalta hai, jis se speed fast ho jati hai.
Method 3 (Sieve of Eratosthenes):
* Yeh bulk range ke liye sab se fast aur efficient algorithm hai.
* 0 se 1000 tak ek array banayi gayi aur har index par default value `true` rakhi gayi (0 aur 1 ko `false` kiya).
* Outer loop 2 se $\sqrt{1000}$ tak chalta hai aur prime numbers ke saare multiples (jaise 2 ke liye 4, 6, 8...) ko array mei `false` mark kar deta hai.
* End par jin indices par value `true` rehti hai, unko print aur count kar liya jata hai.
Method 4 (Optimized Even Skip):
* Isme pehle hi 2 ke alawa saare even numbers (`number % 2 === 0`) ko ek jhatke mei reject kar diya jata hai.
* Even numbers filter hone ke baad loop 3 se shuru hota hai aur `i += 2` ke sath sirf odd numbers ko $\sqrt{n}$ tak check karta hai.
* Yeh technique 50% unnecessary calculations ko bilkul khatam kar deti hai.
Comparison:
* Bulk range (1-1000) ke liye Sieve of Eratosthenes (Method 3) sab se best hai kyun ke isme divisions ke bajaye direct array mark hoti hai.
* Individual number testing ke liye Method 4 sab se fast hai kyun ke yeh even numbers ko shuru mei hi reject kar deta hai.
* Method 2 basic Method 1 se hazaron guna behtar hai, jabke Method 1 sab se slow hai.
