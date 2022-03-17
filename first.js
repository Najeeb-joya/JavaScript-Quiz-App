

let form = document.querySelector('.qform');
let title = document.querySelector('.result-title');
let resulttitle = document.querySelector('.result-title1');
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
        let flag="test"
        const intr = setInterval(() => {
                title.textContent = "Counting Your Score... ";
               if(score === counter){
                       clearInterval(intr);
               }else{
                score++;
                if(score >= 60){
                        flag ="passed"
                        resulttitle.textContent= score + "%"; 
                }else{
                        flag="failed"
                }
        }
       },30);
       console.log(flag);



       window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
});   
        
  });
 

   


//  if(score >= 55){ 
//         title.setAttribute('class','success');
//         title.textContent = "Congrats! You Compeleted the Test & Below is Your Result ";
//          resulttitle.textContent = "You Scored " + score + "%";
// }else{
//         title.setAttribute('class','error');
//         title.textContent = "Oops! You Faild Try Agrain";
//          resulttitle.textContent = "You Scored " + score + "%";

// }





