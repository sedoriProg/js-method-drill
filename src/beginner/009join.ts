(() => {
    const result = join(['a', 'b', 'c'], '~');
    console.log(result);
})()

function join(array: any[], separator: string = ','): string{
    let joinedArrayValues = '';
    for(let i=0; i<array.length; i++){
        joinedArrayValues += array[i];
        if(i !== array.length-1){
            joinedArrayValues += separator;
        } 
    }

    return joinedArrayValues;
}