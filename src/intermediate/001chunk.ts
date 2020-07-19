(() => {
    const result1 = chunk(['a', 'b', 'c', 'd'], 2);
    const result2 = chunk(['a', 'b', 'c', 'd'], 3);
    console.log(result1);
    console.log(result2);
})()

function chunk(array: any[], size: number = 1): any[]{
    if(size < 1){
        throw new Error('Please size 1 more');
    }

    const frontArray = [];
    const backArray = [];
    for(let i=0; i<size; i++){
        frontArray.push(array[i]);
    }
    for(let i=size; i<array.length; i++){
        backArray.push(array[i]);
    }

    const chunkedArray = []
    chunkedArray.push(frontArray);
    chunkedArray.push(backArray);

    return chunkedArray;
}