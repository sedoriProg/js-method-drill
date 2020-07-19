(() => {
    const result1 = lastIndexOf([1, 2, 1, 2], 2);
    console.log(result1);
    const result2 = lastIndexOf([1, 2, 1, 2], 2, 2);
    console.log(result2);
})();

function lastIndexOf(array: any[], value: any, fromIndex: number = array.length-1): number{
    let indexNumber = -1;
    for(let i=array.length; i >= 0; i--){
        if(i > fromIndex){
            continue;
        }
        if(array[i] === value){
            indexNumber = i;
            break;
        }
    }

    return indexNumber;
}