const startNumber = 0;
const endNumber = 1000;
let result = 0;

for (let i = startNumber; i <= endNumber; i += 1) {
    if (i % 2 === 1) {
        console.log('Found');
        result += i;
    }
}

if (result * 5 >= 5000) {
    console.log('Bigger');
}
if (result * 5 <= 4999) {
    console.log('Smaller or equal');
}