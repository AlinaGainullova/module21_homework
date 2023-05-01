// localStorage.clear();

console.log(localStorage.getItem('username'));
console.log(localStorage.getItem('userdate'));


if(localStorage.getItem('username') === null){
var pName = prompt(`Добро пожаловать! Назовите, пожалуйста, ваше имя`);
var userName = pName;
var userDate = new Date();

localStorage.setItem('username', userName);
localStorage.setItem('userdate', userDate);

console.log(userName);
console.log(userDate);

} else {

alert('Добрый день, ' + localStorage.getItem('username') + '! Давно не виделись. В последний раз вы были у нас ' + localStorage.getItem('userdate'));

localStorage.setItem('username', userName);
userDate = new Date();
localStorage.setItem('userdate', userDate);

console.log(userName);
console.log(userDate);
}    
