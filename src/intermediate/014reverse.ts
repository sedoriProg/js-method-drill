(() => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3, 4];
    reverse(array1);
    reverse(array2);
    console.log(array1);
    console.log(array2);

    const array3 = [1, 2, 3];
    const array4 = [1, 2, 3, 4];
    sampleReverse(array3)
    sampleReverse(array4)
    console.log(array3);
    console.log(array4);

})()

// 僕の回答:tmp使って原始的に交換
function reverse(array: any[]): void{
    for(let i=0; i < array.length / 2; i++){
        const changeIndex = array.length - 1;
        const tmp = array[i];
        array[i] = array[changeIndex-i];
        array[changeIndex-i] = tmp;
    }
    
    return;
}

// つよぽんさんの回答: 分割代入を使ってスッキリ！
function sampleReverse(array: any[]): any[]{
    for(let i=0; i < array.length / 2; i++){
        const opositeIndex = array.length - (1 + i);
        [array[i], array[opositeIndex]] = [array[opositeIndex], array[i]];
    }
    
    return array;
}