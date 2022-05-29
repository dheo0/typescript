/**
 * 클로저 EXERCISE
 * @type {Element}
 */

/**
 * 카운터 + , -
 * @type {Element}
 */
const increaseBtn = document.querySelector('#increase')
const decreaseBtn = document.querySelector('#decrease')
const count = document.querySelector('#count')

const status = ( function() {
    let counter = 0
    return {
        increase() {
            return ++counter
        },
        decrease() {
            return counter > 0 ? --counter : 0
        }
    }
}())



increaseBtn.addEventListener('click', () => {
    count.innerHTML = status.increase()
})

decreaseBtn.addEventListener('click', () => {
    count.innerHTML = status.decrease()
})