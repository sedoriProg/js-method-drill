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

    const result1 = findIndex(users, (o: User) => o.user == 'barney');
    const result2 = findIndex(users, (o: User) => o.user == 'barney', 1);
    console.log(result1);
    console.log(result2);
})()

function findIndex(array: any[], predicate: any, fromIndex: number = 0): number{
    for(let i = fromIndex; i < array.length; i++){
        if(predicate(array[i])){
            return i;
        }
    }

    return -1;
}