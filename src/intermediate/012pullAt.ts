(() => {
    const array1 = ['a', 'b', 'c', 'd'];
    const result1 = pullAt(array1, [1, 3]);
    console.log(result1);
    console.log(array1);

    const array2 = ['a', 'b', 'c', 'd'];
    const result2 = pullAt(array2, 1);
    console.log(result2);
    console.log(array2);
})()

function pullAt(array: any[], indexes: number | number[]): any[]{
    // インデックス保持のため元の配列をコピーしておく
    const basedArray = [...array];
    // 配列ならそのままコピー、そうでないなら配列化
    const copyedIndexes = Array.isArray(indexes) ? [...indexes] : [indexes];

    const pulledArray: any[] = []
    copyedIndexes.map(c => {
        // arrayはspliceされるたびに配列の要素数が変わるので、
        // indexOfで元の配列からarrayに適用するindexを取得
        const spliceIndex = array.indexOf(basedArray[c]);
        array.splice(spliceIndex, 1);

        pulledArray.push(basedArray[c])
    });

    return pulledArray;
}