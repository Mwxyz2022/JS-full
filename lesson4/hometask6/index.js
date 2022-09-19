let res = 0;
for (let i = 1; i <= 1000; i += 1) {
    res += i;
}

const modRes = res % 1234;

const divRes = res / 1234;

console.log(divRes > modRes);