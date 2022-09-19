function increaser(a, index) {
    if (a > index) return a + index;
    if (a <= index) return a;
}
console.log(increaser(2, 1));