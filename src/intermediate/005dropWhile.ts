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
      
      const result = dropWhile(users, (o: User) => { return !o.active; });
      console.log(result);
      console.log(users)
})()

function dropWhile(array: object[], predicate: any): any[]{
    const dropedArray = [...array];
    for(let i = 0; i < array.length; i++){
        if(!predicate(array[i], i, array) ){
            break;
        }
        dropedArray.shift();
    }

    return dropedArray;    
}