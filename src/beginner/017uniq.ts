(() => {
    const result = uniq([2, 1, 2, 3, 3]);
    console.log(result);
})()

function uniq(array: any[]): any[]{
    const uniqArray:any[] = [];
    array.map(arr => {
        if(!uniqArray.includes(arr)){
            uniqArray.push(arr);
        }
    })

    return uniqArray;
}