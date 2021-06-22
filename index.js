const btnUp = document.getElementById('up');
const btnIn = document.getElementById('in');
const divMain = document.getElementById('main');
const signUp = document.getElementById('SignUp');
const signIn = document.getElementById('SignIn');
const username = document.getElementById('username');
const username1 = document.getElementById('username1');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const btnSubmit = document.getElementById('submit');
const submitErrUs = document.getElementById('username_error')
const submitErrPass = document.getElementById('password_error')
const submitErrUs1 = document.getElementById('username1_error')
const submitErrPass1 = document.getElementById('password1_error')
const back = document.getElementById('back')
const btnSignIn = document.getElementById('sin');
const email = document.getElementById('email')
const email1 = document.getElementById('email1')

btnUp.addEventListener('click', function(){
  btnIn.style.visibility = 'hidden';
  btnUp.style.visibility = 'hidden';
  back.style.visibility = 'visible';
  signUp.style.display = 'block';
})

btnIn.addEventListener('click', function(){
  btnIn.style.visibility = 'hidden';
  btnUp.style.visibility = 'hidden';
  back.style.visibility = 'visible';
  signIn.style.display = 'block';
})

back.addEventListener('click', function(){
  btnIn.style.visibility = 'visible';
  btnUp.style.visibility = 'visible';
  back.style.visibility = 'hidden';
  signIn.style.display = 'none';
  signUp.style.display = 'none';
})

let currentInputUsernameValue = '';
username.addEventListener('input', function(a){
    currentInputUsernameValue = a.target.value;
})

let currentInputPasswordValue = '';
password.addEventListener('input', function(b){
    currentInputPasswordValue = b.target.value;
})

let currentInputPassword2Value = '';
password2.addEventListener('input', function(c){
    currentInputPassword2Value = c.target.value;
})

let currentInputUsername1Value = '';
username1.addEventListener('input', function(d){
    currentInputUsername1Value = d.target.value;
})

let currentInputPassword1Value = '';
password1.addEventListener('input', function(e){
    currentInputPassword1Value = e.target.value;
})

btnSubmit.addEventListener('click', function(){
  if(currentInputUsernameValue !== undefined && currentInputUsernameValue !== 0 && currentInputUsernameValue !== ''){
  submitErrUs.style.display = 'none';
  }
  else {submitErrUs.style.display = 'block';}
})

btnSubmit.addEventListener('click', function(){
  if(currentInputPassword2Value !== currentInputPasswordValue){
  submitErrPass.style.display = 'block';
  }
})

btnSignIn.addEventListener('click', function(){
  if(currentInputUsername1Value !== undefined && currentInputUsername1Value !== 0 && currentInputUsername1Value !== ''){
  submitErrUs1.style.display = 'none';
  }
  else {submitErrUs1.style.display = 'block';}
})

btnSignIn.addEventListener('click', function(){
  if(currentInputPassword1Value !== undefined && currentInputPassword1Value !== 0 && currentInputPassword1Value !== ''){
  submitErrPass1.style.display = 'none';
  }
  else {submitErrPass1.style.display = 'block';}
})

btnSignIn.addEventListener('click', function(){
  username1.value = '';
  password1.value = '';
  email1.value = '';
})

btnSubmit.addEventListener('click', function(){
  username.value = '';
  password.value = '';
  password2.value = '';
  email.value = '';
})