// 배열관련 예제

/**
 * 객체에서 특정한 값 찾기 filter
 * 사용법 객체.filter ( (i) => i.객체명.includes('특정값') );
 */


let users = [
    { id: 11, name: 'Adam', age: 23, group: '정상' },
    { id: 47, name: 'John', age: 28, group: '다리' },
    { id: 85, name: 'William', age: 34, group: '정상' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let result = users.filter( (item) => item.name.includes('Adam'))

console.log(`특정값 찾기 ${JSON.stringify(result)}`)

function admin(user) {
    let isValid = false
    if( user.name === 'Adam' && user.group === 'admin') {
        isValid = true
    } else {
        isValid = false
    }
    return isValid
}




const sortUserA = users.sort(function(a, b) {

    const groupA = a.group;
    const groupB = b.group;
    const idA = a.id;
    const idB = b.id;
    if (groupA < groupB) {
        return -1;
    }
    else if (groupA > groupB) {
        return 1;
    }
    else if (idA < idB) {
        return -1;
    }
    else if (idA > idB) {
        return 1;
    }
    return 0;
});

console.log('sortUser', sortUserA)