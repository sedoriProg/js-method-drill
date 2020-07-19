(() => {
    const result1 = take([1,2,3]);
    const result2 = take([1,2,3], 2);
    const result3 = take([1,2,3], 5);
    const result4 = take([1,2,3], 0);
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
})()

function take(array: any[], n: number = 1): any[]{
    const tookArray = [];
    for(let i=0; i<n; i++){
        if(i === array.length){
            break;
        }
        tookArray.push(array[i]);
    }

    return tookArray;
}