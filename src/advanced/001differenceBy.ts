(() => {
    const result = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    console.log(result);
})()

function differenceBy(array: any[], values: any[], iteratee: any): any[]{
    const diffrencedArray: any[] = [];
    const iterateedValues = values.map(v => iteratee(v));
    array.map(arr => {
        if(!iterateedValues.includes(iteratee(arr))){
            diffrencedArray.push(arr);
        }
    })

    return diffrencedArray;
}