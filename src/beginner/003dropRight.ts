(() => {
    const result1 = dropRight([1, 2, 3, 4, 5]);
    const result2 = dropRight([1, 2, 3, 4, 5], 0);
    const result3 = dropRight([1, 2, 3, 4, 5], 3);
    const result4 = dropRight([1, 2, 3, 4, 5], 10);
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
})();

function dropRight(array: any[], n: number = 1){
    if(array.length < 0){
        return [];
    }
    if(n < 0){
        throw new Error("Prease enter 0 or more.");
    }
    const dropRight = [];
    const loopCnt = array.length - n;
    for(let i=0; i < loopCnt; i++){
        dropRight.push(array[i]);        
    }
    return dropRight;
}