(() => {
    const array = [1, [2, [3, [4]], 5]];
    
    const result1 = flattenDepth(array, 1);
    const result2 = flattenDepth(array, 2);
    console.log(result1);
    console.log(result2);
})()

function flattenDepth(array: any[], depth: number = 1): any[]{
    let flattenDepthArray: any[] = [...array];
    for(let i = 0; i < depth; i++){
        const flattenArray: any[] = []
        flattenDepthArray.map(arr => {
            if(Array.isArray(arr)){
                flattenArray.push(...arr);
            }else{
                flattenArray.push(arr);
            }
        })
        flattenDepthArray = flattenArray;
    }

    return flattenDepthArray;
}