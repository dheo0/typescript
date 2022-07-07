form.js
if (age < 14) {
const params = {

	}
	window.localStorage.setItem('kidForm', JSON.stringify(params))
}

parental-constant.html(verify.js) 법정대리인
/**
* 회원가입 폼에서 넘어왔을 경우
* 본인인증 => 보호자 인증
  */
  const referrer = document.referrer
  const isKidForm = referrer.includes('form')
  const isParent = data.ci // 인증데이터가 있으면

const data = data //

if (isKidForm) {
// 회원가입폼에서 넘어왔을 경우 - 회원가입시키기
joinKid.call(this, data, type)
} else {
// 회원가입폼으로 넘기기
sendFormData.call(this, data, type)
}



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


