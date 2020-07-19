(() => {
    const result = compact([1, 0, 2, null, 3, undefined, 4, ""]);
    console.log(result);
})();

function compact(array: any[]): any[]{
    const compactedArray: any[] = [];
    array.map(value => {
        if(value){
            compactedArray.push(value);
        }
    });
    return compactedArray;
}
