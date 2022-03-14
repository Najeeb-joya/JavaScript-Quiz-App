
let form = document.querySelector('.qform');


const answers = ['Tehran','Kabul','Pakistan',32,'Hyper Text Markup Language'];


form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log("Form Submited");

});
