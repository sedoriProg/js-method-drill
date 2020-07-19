interface User {
    user: string;
    active: boolean;
}

(() => {
    const users: User[] = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
    ]; 
    const result = takeRightWhile(users, (o: User) => !o.active);
    console.log(result);
})()

function takeRightWhile(array: any[], predicate: any): any[]{
    const takenArray: any[] = [];
    for(let i=array.length-1; i >= 0; i--){
        if(!predicate(array[i])){
            break;
        }

        takenArray.unshift(array[i]);
    }

    return takenArray;
}