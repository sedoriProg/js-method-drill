(() => {
    const result1 = drop([1, 2, 3, 4, 5]);
    const result2 = drop([1, 2, 3, 4, 5], 0);
    const result3 = drop([1, 2, 3, 4, 5], 3);
    const result4 = drop([1, 2, 3, 4, 5], 10);
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
})()

function drop(array: any[], n: number = 1): any[]{
    if(array.length < 0){
        return [];
    }
    if(n < 0){
        throw new Error("Prease enter 0 or more.");
    }
    return array.slice(n);
}