// 함수선언하는 여러가지 방법

/* 1. 명명함수 선언  */
function name() {
    // TODO: "name" 이란 이름을 가진 함수
}

/* 2. 익명함수  */
const hello = function () {
    return `
        <li>무엇이 무엇이 똑같을까?</li>
    `
    /**
     * 이름이 없는 함수
     * 이름이 없지만 hello 라는 변수 에 지정하였으므로
     * hello
     */

}

console.log(hello())


/* 3. 명명함수 표현 */

const nameCall = function originalName(param) {
    /**
     * 이름이 있는 함수 표현식
     * 2번과 쓰임새는 같지만
     * 2번이 자바스크립엔진에 의해 추론이 된다면
     * 이건 이름이 명확하게 선언되어 있어 추론되지 않는다
     */
    console.log('명명함수 표현식 ' + param)
}



/* 4. 즉시 실행 표현  -- 이건 잘 이해가 안 됨...*/

const mycounter = (function (initialValue =0) {
    let count = initialValue
    return function () {
        count++
        return count
    }
})(1)


/* 5. 화살표 함수  */

const arrow = (x, y, z) => {
    return x+y+z
}

console.log(arrow(1,2,3))