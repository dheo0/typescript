// 배열관련 예제

/**
 * 객체에서 특정한 값 찾기 filter
 * 사용법 객체.filter ( (i) => i.객체명.includes('특정값') );
 */


let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
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


