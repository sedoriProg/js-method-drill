(() => {
    const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    const result = pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], (obj: any) => {
        return obj.x;
    })
    console.log(result);
    console.log(array);
})()

function pullAllBy(array: any[], values: any[], iteratee: any){
    const iterateedValues = values.map(v => iteratee(v));
    for(let i = array.length-1; i >= 0; i--){
        const targetValue = iteratee(array[i]);
        if(iterateedValues.includes(targetValue)){
            array.splice(i, 1);
        }
    }

    return array;
}