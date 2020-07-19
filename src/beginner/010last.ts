(() => {
    const result = last([1, 2, 3]);
    console.log(result);
})()

function last(array: any[]): any{
    return array[array.length-1];
}