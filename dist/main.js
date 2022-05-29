// pure 자바스크립트에서는 실행을 통해서만 결과값, 리턴값을 확인할 수가 있었는데
// 실행하기 전에 이러한 값을을 예측하기 위한 대안은 static type system 을 이욯하는 것이다


function greeter(fn) {
    fn("hello world");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);

const person = {
    name: '손흥민',
    sayHi() {
        console.log(`안녕 나는 ${this.name}`)
    }
}

person.sayHi();

const data =  {
    data: [1,2,3,4,5],
    sumProduct() {

        /*
        let sum = 0;
        for(let i=0; i< this.data.length; i++) {
            sum += this.data[i]
        }*/
        let result =  this.data.reduce((sum, currValue) => {
            return sum + currValue
        }, 0)
        return console.log(result)
    }
}

data.sumProduct()

const button = document.querySelector("#button");

button.addEventListener('click', (elem) => {
    setTimeout(
        function() {
        console.log(button.innerHTML)
        }, 1000 );
})

const tabMenu = document.querySelectorAll("#tabMenu li a");

/*
    let tabMenus = Array.from(tabMenu);
    let tabMenus = [...tabMenu]
    console.log(tabMenus)
*/

// tab 클릭 이벤트
for (const tab of tabMenu) {
    tab.addEventListener('click', function(event) {
        tabMenu.forEach(t => t.parentElement.classList.remove('active'));
        tab.parentElement.classList.add("active");
        console.log(event.target.innerText)
    })
}


// await 는 async 함수 안에서만 동작



async function f() {
    let promise = new Promise((res, rej) => {
        setTimeout( () => res("완료"), 1000)
    })

    let result  = await promise;
    // alert(result);
}

f();


let myFirstPromise = new Promise( (res, rej) => {
    setTimeout( function() {
        res("성공!")
    }, 250);
});

myFirstPromise.then( (msg) => {
    console.log(`와우 ${msg} 했습니다`)
})


let promiseCount = 0;
function testPromise() {
    let thisPromiseCount = ++promiseCount;
    let log = document.getElementById("log");

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') 시작 (<small>동기적 코드 시작</small>)<br/>');

    const p1 = new Promise(
        function(res, rej) {
            log.insertAdjacentHTML('beforeend', ++thisPromiseCount +
                ') 프로미스 시작 ( <small>비동기적 코드 시작</small>)<br/>');
            window.setTimeout(
                function() {
                    res(thisPromiseCount);
                }, Math.random() * 2000 + 1000 );
        }
    )

    p1.then(
        function (thisPromiseCount) {
            log.insertAdjacentHTML('beforeend', ++thisPromiseCount+ ') 프로미스 이행 (<small>비동기적 코드 종료</small>) <br/>');
        })
    .catch(
        function(reason) {console.log('여기서 거부된 프로미스(' + reason + ')를 처리하세요.')
    });
    log.insertAdjacentHTML('beforeend', ++thisPromiseCount + ') 프로미스 생성 (<small>동기적 코드 종료</small>)<br/>');


}

if ("Promise" in window) {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", testPromise);
} else {
    log = document.getElementById('log');
    log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
}

// input maxlength 오토포커스
const inputs = $("input");
console.log(typeof inputs)
console.log(inputs)
const isChk = Array.from(inputs).every((item) => item.value.length == 4);


console.log(isChk)
let values = null;

inputs.each(function(index, item){

    $(this).bind("keyup", function(elem) {
        let length = elem.target.value.length;
        console.log(length)
        console.log(isChk)
        if(length === 4) {
            if(index < inputs.length -1) {
                inputs[++index].focus();
            }
        }
    })
})

const array = Array.from(inputs)

// 카드번호가 채워지지 않는 곳으로 포커스 이동
$(".btn-king").on('click', () =>{
    const values = [];
    for( input of inputs) {
        values.push(input.value.length)
    }
    console.log(values)
    let focusIndex = values.findIndex( v => v < 4)
    console.log(focusIndex)
    if(focusIndex > 0 ) {
        $('input')[focusIndex].focus()
    }
})


let abc = 0;
window.addEventListener('load', ()=> {
    abc++;
    console.log(`${abc} ++++ `)
    f()
        .then( (e) => {
            abc = e
            console.log(abc)
        })
        .catch( (e) => console.error(e))
})

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!!!!!!!!!!!!!!!!!!!!!!!!!!!!"), 1000)
    });

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

    return result
}


const data2 = [
    {
        name: 'd-a-v-i-d-s',
        score: 50
    },
    {
        name: 'kim',
        score: 100
    },
]

const normalStatusBtns = () => {
    return `
        <button class="def">normalButton</button>
        <button class="def">normalButton</button>
    `
}

const lostStatusBtns = () => {
    return `
        <button class="def">lostButton</button>
        <button class="def">lostButton</button>
    `
}

const createDom =  {
    UserList() {
        const result = data2.map((item) => {
            return `<div>
                <div class=${item.name === 'davids' ? 'active' : ''}>
                    <b>${item.name.replace(/-/g, '')}</b> <span>(${item.score})</span>
                    <button class="abc">abc</button>
                    ${item.name === 'davids'? normalStatusBtns() : lostStatusBtns()}
                </div>
            </div>`
        })
        return result
    }
}

$("#data").append(createDom.UserList)


$('.abc').on("click", function() {
    console.log('aaaaaaaaaa')
})

$('.def').on("click", function() {
    console.log('def')
})

const dog = {
    name : "멍멍이",
    mcu() {
        const abc = 5
        if(abc > 3) {
            return `<button class="def">CLASS</button>`
        } else {
            return 1
        }
    },
    say() {
        return `<div class="def">${this.mcu()}</div>`
    },
    action() {
        $('.def').on("click", function() {
            console.log('def')
        })
    }
};
dog.action();


var d = 'X';

function outer(){
    var a = 1;
    var b = 'B';

    function inner(){
        var a = 2;
        console.log('here',b);
    }
    return inner;
}

var someFun = outer();
someFun();


const elementToObserve = document.querySelector(".inputs input");

// create a new instance of `MutationObserver` named `observer`,
// passing it a callback function
const observer = new MutationObserver(function() {
    console.log('callback that runs when observer is triggered');
});

// call `observe()` on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(elementToObserve, {subtree: true, childList: true});

/*
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var list = document.querySelector('ol');

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
            var list_values = [].slice.call(list.children)
                .map( function(node) { return node.innerHTML; })
                .filter( function(s) {
                    if (s === '<br>') {
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            console.log(list_values);
        }
    });
});*/

