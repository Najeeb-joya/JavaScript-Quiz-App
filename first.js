

let form = document.querySelector('.qform');
let title = document.querySelector('.result-title');
let resulttitle = document.querySelector('.result-title1');
let reset = document.querySelector('.reset');
const answers = ['tehran','kabul','pakistan',"50",'hyper text markup language'];
let counter = 0; 


 form.addEventListener('submit',e =>{
   e.preventDefault();
    
    let selected = document.querySelectorAll('input[type="radio"]:checked');

        
        selected.forEach((value, index) =>{

                if(answers[index] === value.value){
                  counter +=20; 
                }else{
                  counter = counter;               
                }
        });
        
        let score = 1; 
        const intr = setInterval(() => {
               if(score === counter){
                       clearInterval(intr);
               }else{
                        score++;
                        title.textContent = "You've Completed the test and below is your result";
                        resulttitle.textContent= "You got " + score + "%";   
        }
       },25);



       window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
});   
        
  });
 






