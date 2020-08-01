(() => {
    const result = intersectionBy([2.1, 1.2], [2.3, 3.4], [4.4, 2.9], Math.floor);
    console.log(result);
})()

function intersectionBy(...arraysAndIteratee: any ){
    const iteratee = arraysAndIteratee.pop();
    const arrays = [...arraysAndIteratee]
    const firstArray: any[] = arrays.shift() || [];

    const intersectionArray: any[] = [];
    const iterateedArrays: any[][] = arrays.map((arr: any[]) => {
        return arr.map(a => iteratee(a)); 
    });
    
    firstArray.map(v => {
        const iterateeValue = iteratee(v);
        const included = iterateedArrays.every(array => {
            return array.includes(iterateeValue)
        })
        if(included){
            intersectionArray.push(v);
        }
    })

    return intersectionArray;
}