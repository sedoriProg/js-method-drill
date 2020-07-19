(() => {
    const array = [1];
    const result = concat(array, 2, [3], [[4]]);
    console.log(result);
    console.log(array);
})()

function concat(array: any[], ...values: any[]): any[]{
    if(!values){
        return array;
    }

    const concatedArray = [...array];
    values.map(arr => {
        if(Array.isArray(arr)){
            return concatedArray.push(...arr);
        }else{
            return concatedArray.push(arr);
        }
    })

    return concatedArray;
}