(() => {
    const result1 = takeRight([1, 2, 3]);
    const result2 = takeRight([1, 2, 3], 2);
    const result3 = takeRight([1, 2, 3], 5);
    const result4 = takeRight([1, 2, 3], 0);
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
})()

function takeRight(array: any[], n: number = 1): any[]{
    if(array.length < n){
        return array;
    }

    const tookArray = [];
    for(let i=array.length-n; i<array.length; i++){
        tookArray.push(array[i]);
    }

    return tookArray;
}