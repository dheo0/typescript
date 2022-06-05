/**
 * map 공부
 * array.map(callback(currentValue[, index[, array]])[, thisArg])
 */

const mapArray =  [1, 4, 9, 16]
const mapArrayRes = mapArray.map(x => x * 2)

console.log('mapArrayRes', mapArrayRes)
console.log('mapArray', mapArray)

const kvArray = [
    {key: 1, value : 10},
    {key: 2, value : 20},
    {key: 3, value : 30},
]

const reformArray = kvArray.map((obj) => {
    let rObj = {}
    rObj[obj.key] = obj.value
    return rObj
})
console.log('kvArray', kvArray)
console.log('reformArray', reformArray)

