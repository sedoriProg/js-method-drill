(() => {
    const result = fromPairs([['a', 1],['b', 2]]);
    console.log(result);
})()

function fromPairs(pairs: any[][]): object{
    let pairedObject: any = {};
    pairs.map(pair => {
        const [key, value] = pair;
        pairedObject[key] = value;
    })

    return pairedObject;
}