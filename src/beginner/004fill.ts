(() => {
    const result1 = fill([1, 2, 3], 'a');
    const result2 = fill(Array(3), 2);
    const result3 = fill([4, 6, 8, 10], '*', 1, 3);
    console.log(result1);
    console.log(result2);
    console.log(result3);
})();

function fill(array: any[], value: any, start: number = 0, end: number = array.length ): any[]{
    if(end - start <= 0){
        throw new Error("Prease (start < end)");
    }
    if(!array.length){
        return [];
    }
    for(let i = start; i < end; i++){
        array[i] = value;
    }
    return array;
}