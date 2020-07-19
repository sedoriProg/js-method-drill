(() => {
    const result = flatten([1, [2, [3, [4]], 5]]);
    console.log(result);
})()

function flatten(array: any[]): any[]{
    const flattenArray = [];
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            flattenArray.push(...array[i]);
        }else{
            flattenArray.push(array[i]);
        }
    }

    return flattenArray;
}