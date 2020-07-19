(() => {
    const array = ['a', 'b', 'c', 'd'];
    const result1 = nth(array, 1);
    console.log(result1);
    const result2 = nth(array, -2);
    console.log(result2);
})()

function nth(array: any[], n: number = 0): any {
    return n < 0 ? array[array.length + n] : array[n];
}