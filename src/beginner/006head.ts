(() => {
    const result1 = head([1, 2, 3]);
    const result2 = head([]);
    console.log(result1);
    console.log(result2);
})();

function head(array: any[]): any | undefined{
    return array[0];
}