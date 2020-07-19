(() => {
    const result = difference([2, 1],[2, 3]);
    console.log(result);
})();

function difference(array: any[], values: any[]): any[]{
    if(!values.length){
        return array;
    }

    const differencedArray: any[] = [];
    array.map(arr => {
        if (!values.includes(arr)){
            differencedArray.push(arr);
        }
    })

    return differencedArray;
}
