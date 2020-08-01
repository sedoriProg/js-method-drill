(() => {
    const result = flattenDeep([1, [2, [3, [4]], 5]]);
    console.log(result);
})()

function flattenDeep(array: any[]): any[]{
    let flattenDeepArray: any[] = [...array];
    for(let i=0; i<flattenDeepArray.length; i++){
        const flattenArray: any[] = []
        flattenDeepArray.map(arr => {
            if(Array.isArray(arr)){
                flattenArray.push(...arr);
            }else{
                flattenArray.push(arr);
            }
        })
        flattenDeepArray = flattenArray;
    }

    return flattenDeepArray;
}