interface User {
    user: string;
    active: boolean;
}

(() => {
    const users: User[] = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ]; 
    const result = takeWhile(users, (o: User) => !o.active);
    console.log(result);
})()

function takeWhile(array: any[], predicate: any): any[]{
    const takenArray: any[] = [];

    for(let i=0; i<array.length; i++){
        if(!predicate(array[i])){
            break;
        }

        takenArray.push(array[i]);
    }

    return takenArray;
}