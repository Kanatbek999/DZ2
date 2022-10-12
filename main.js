p = 0
let a = '';
while(p < 7) {
    a += '*'
    p++;
    console.log(a);
}

for (let i = 1; i < 101; i++ ) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if ( i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


let string1 = " # # # # # # # #";
let string2 = "# # # # # # # #";
let z = 0;

for (z = 0; z < 8; z++) {
if (z % 2 === 0){
console.log(string1)
}else {
console.log(string2)
}

}