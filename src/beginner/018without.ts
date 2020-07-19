(() => {
    const result = without([1, 2, 2, 3,], 1, 2);
    console.log(result);
})()

function without(array: any[], ...values: any): any[]{
    const withoutedaArray: any[] = [];
    array.map(arr => {
        if(!values.includes(arr)){
            withoutedaArray.push(arr)
        }
    });

    return withoutedaArray;
}