(() => {
    const result = zipObject([1, 2], ["a", "b"]);
    console.log(result);
})()

function zipObject(props: any[], values: any[]): Object {
    let obj:any = {};

    for(let i=0; i<props.length; i++){
        obj[props[i]] = values[i];
    }

    return obj;
}