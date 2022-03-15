

let form = document.querySelector('.qform');
let resulttitle = document.querySelector('.result-title1');
const answers = ['tehran','kabul','pakistan',"50",'hyper text markup language'];
let test = 5; 

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
        console.log(counter);



 });






