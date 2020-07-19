(() => {
    const result1 = intersection([2, 1], [2, 3], [2, 4]);
    const result2 = intersection([2, 1], [2, 3], [2, 4]);
    console.log(result1);
    console.log(result2);
})()

// sedoriProgの回答
// なんとも原始的w
function intersection(...arrays: any[]): any[]{
    const intersectionArray = [...arrays[0]];
    for(let i = 1; i < arrays.length; i++){
        const array: any[] = arrays[i];
        for(let j = 0; j < intersectionArray.length; j++){
            if(!array.includes(intersectionArray[j])){
                intersectionArray.splice(j);
            }
        }
    }

    return intersectionArray;
}

// つよぽんさんの回答例
function sampleIntersection(...arrays: any[]): any[]{
    const newArray = [];
    // 第1引数の配列を取り出す
    const headArray = arrays.shift();　

    for(let i = 0; i < headArray.length; i++){
        // i=0からだけど1回.shiftして抜かれてるので第2引数からループが回る
        const current = headArray[i]; 
        // [].every: 全ての要素にコールバック関数の条件に満たすかを確認する
        // 今回ならheadArrayにcurrentが含まれてるならtrueで戻り値の配列にPush
        if(arrays.every((array) => array.inclueds(current))){
            newArray.push(current);
        }
    }

    return newArray;
}