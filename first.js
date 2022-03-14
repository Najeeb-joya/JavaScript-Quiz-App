let q1 = document.querySelector('.question1');
let q2 = document.querySelector('.question2');
let q3 = document.querySelector('.question3');
let q4 = document.querySelector('.question4');
let q5 = document.querySelector('.question5');
let form = document.querySelector('.qform');


const answers = ['Tehran','Kabul','Pakistan',32,'Hyper Text Markup Language'];


form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(form.answer1);

});
