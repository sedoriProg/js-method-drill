(() => {
    const result = slice([1, 2, 3, 4, 5], 1, 4);
    console.log(result);
})()

function slice(array: any[], start: number = 0, end: number = array.length): any{
    const slicedArray = [];
    for(let i=start; i<end; i++){
        slicedArray.push(array[i]);
    }

    return slicedArray;
}