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
      
      const result = dropRightWhile(users, (o: User) => !o.active);
      console.log(result);
      console.log(users)
})()

function dropRightWhile(array: object[], predicate: any): any[]{
    const dropedArray = [...array];
    for(let i = array.length - 1; 0 <= i; i--){
        if(!predicate(array[i], i, array) ){
            break;
        }
        dropedArray.pop();
    }

    return dropedArray;    
}