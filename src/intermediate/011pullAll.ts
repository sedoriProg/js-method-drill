(() => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    const result = pullAll(array, ['a', 'c']);
    console.log(result);
})()

function pullAll(array: any[], values: any[]): any[]{
    let pulledArray = [...array];
    for(let i = 0; i < values.length; i++){
        pulledArray = pulledArray.filter(arr => arr !== values[i])
    }

    return pulledArray;
}