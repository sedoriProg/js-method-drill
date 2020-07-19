(() => {
    const result = union([2], [1, 2]);
    console.log(result);
})()

function union(...arrays: any[]): any[]{
    const unionArray: any[] = [];
    for(let i = 0; i < arrays.length; i++){
        const array: any[] = arrays[i];
        const filteredArray = array.filter(arr => unionArray.includes(arr) === false);
        unionArray.push(...filteredArray)
    }

    return unionArray;
}