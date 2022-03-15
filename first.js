

let form = document.querySelector('.qform');
let title = document.querySelector('.result-title');
let resulttitle = document.querySelector('.result-title1');
const answers = ['tehran','kabul','pakistan',"50",'hyper text markup language'];

 form.addEventListener('submit',e =>{
    e.preventDefault();
    let selected = document.querySelectorAll('input[type="radio"]:checked');

        let counter = 0; 
        selected.forEach((value, index) =>{

                        if(answers[index] === value.value){

                                counter++; 
                                
                        }else{
                                counter = counter;
                                
                        }

        });
        title.textContent = "Congrats! You Compeleted the Test & Below is Your Result "
        resulttitle.textContent = "You Scored " + counter + "/5"



 });






