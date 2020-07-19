(() => {
    const result = tail([1, 2, 3, 4]);
    console.log(result);
})()

function tail(array: any[]): any[]{
    const tailedArray = [];
    for(let i=1; i<array.length; i++){
        tailedArray.push(array[i]);
    }

    return tailedArray;
}