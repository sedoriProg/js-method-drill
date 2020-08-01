interface MyObject {
    x: any;
    y: any;
}

(() => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const result =  differenceWith(objects, [{ 'x': 1, 'y': 2 }], (a: MyObject, b: MyObject) => {
        return a.x === b.x && a.y === b.y
    })
    console.log(result);
})()

function differenceWith(array: any[], values: any[], comparator: any): any[]{
    const differencedArray: any[] = [];
    array.map(arr => {
        values.map(v => {
            if(!comparator(arr, v)){
                differencedArray.push(arr);
            }
        })
    })

    return differencedArray;
}