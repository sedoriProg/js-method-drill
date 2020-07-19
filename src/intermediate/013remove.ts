(() => {
    const array = [1, 2, 3, 4, 2];
    const result = remove(array, (n: number): boolean => {
        return n % 2 === 0;
    });
    console.log(result);
    console.log(array);
})()

function remove(array: any[], predicate: any): any[]{
    const basedArray = [...array];
    const removedArray: any[] = [];
    basedArray.map(arr => {
        if(predicate(arr)){
            const removeIndex = array.indexOf(arr);
            array.splice(removeIndex, 1);
            removedArray.push(arr);
        }
    })

    return removedArray;
}