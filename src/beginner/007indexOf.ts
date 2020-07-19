(() => {
    const result1 = indexOf([1, 2, 1, 2], 2);
    console.log(result1);
    const result2 = indexOf([1, 2, 1, 2], 2, 2);
    console.log(result2);
})();

function indexOf(array: any[], value: any, fromIndex: number = 0): number{
    let indexNumber = -1;
    for(let i=0; i<array.length; i++){
        if(i < fromIndex){
            continue;
        }
        if(array[i] === value){
            indexNumber = i;
            break;
        }
    }

    return indexNumber;
}