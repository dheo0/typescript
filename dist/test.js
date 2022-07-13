
// 14세미만 회원가입 - FORM => 법정대리인 => 회원가입 완료
async function joinKid(data, type) {
    const kidForm = window.localStorage.getItem('kidForm')
    const params = {
        ...kidForm,
        data
    }
    const result = await ctrrJoin.call(this, params)
    console.log(result)
    if (result.data) {
        window.location.href= '/join/finish?type=self&name=' + name
    }
}


// 본인인증(완료) - 법정대리인 - 가입폼
function sendFormData(data, type) {
    const auth = window.localStorage.getItem('auth') // 14세 DATA
    const sendFormData = {
        ...auth,
        data
    }
    window.localStorage.setItem('auth', sendFormData)
    window.location.href = '/join/form/self?auth=' + type
}

/**
 * 필수값 체크 항목
 **/
const reqCheckInput = [
    { value: false, elem: 'formJoin01'},
    { value: false, elem: 'formJoin02' },
    { value: true, elem: 'formJoin03' },
    { value: false, elem: 'formJoin04' },
    { value: false, elem: 'formJoin05' },
    { value: false, elem: 'formJoin06' },
    { value: false, elem: 'formJoin07' }
]

function inputCheck() {
    return reqCheckInput.every((item) => item.value=== true)
}

/**
 * 버튼 클릭시 빕값 인풋 포커스
 **/

if (!inputCheck()) {
    const result = reqCheckInput.find(v => v.value === true);
    if (typeof result !== "undefined") {
        console.log(result)
        $(`#${result.elem}`).focus()
    }
}

$('input').on('input change', (e) => {
    const id = e.target.id
    const value = e.target.value
    console.log(id, value)
    const findResult = reqCheckInput.find((item) => item.elem === id)
    findResult.value = true
    console.log(findResult)
})


