(() => {
    const result = initial([1, 2, 3]);
    console.log(result);
})()

function initial(array: any): any[]{
    const initialedArray = [];
    for(let i=0; i<array.length-1; i++){
        initialedArray.push(array[i]);
    }

    return initialedArray;
}