

let form = document.querySelector('.qform');
let resulttitle = document.querySelector('.result-title1');
const answers = ['Tehran','Kabul','Pakistan',50,'Hyper Text Markup Language'];
 form.addEventListener('submit',e =>{
    e.preventDefault();
    let selected = document.querySelectorAll('input[type="radio"]:checked');
    selected.forEach(value =>{
            let result = " ";
            result += value.parentElement.textContent; 

            resulttitle.textContent += result + " ";
            


    });

 });






