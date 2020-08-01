interface MyObject {
    a: any;
    b: any;
}

(() => {
    const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
    const result = pullAllWith(array, [{'x': 3 , 'y': 4}], (a: MyObject, b: MyObject) => a.x === b.x && a.y === b.y);
    console.log(array);
    console.log(result);
})()

function pullAllWith(array: any[], values: any[], comparator: any){
    for(let i=array.length-1; i >= 0; i--){
        for(let j=0; j<values.length; j++){
            if(comparator(array[i], values[j])){
                array.splice(i, 1);
            }
        }
    }
    
    return array;
}