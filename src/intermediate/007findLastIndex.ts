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

    const result1 = findLastIndex(users, (o: User) => o.user == 'pebbles');
    const result2 = findLastIndex(users, (o: User) => o.user == 'pebbles', 1);
    console.log(result1);
    console.log(result2);
})()

function findLastIndex(array: any[], predicate: any, fromIndex: number = array.length-1): number{
    for(let i = fromIndex; i >= 0; i--){
        if(predicate(array[i])){
            return i;
        }
    }

    return -1;
}