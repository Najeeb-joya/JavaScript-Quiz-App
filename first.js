

let form = document.querySelector('.qform');
let title = document.querySelector('.result-title');
let resulttitle = document.querySelector('.result-title1');
const answers = ['tehran','kabul','pakistan',"50",'hyper text markup language'];


 form.addEventListener('submit',e =>{
   e.preventDefault();
    
    let selected = document.querySelectorAll('input[type="radio"]:checked');
    console.log(selected);

        let counter = 0; 
        selected.forEach((value, index) =>{

                        if(answers[index] === value.value){

                                counter +=20; 
                        }else{
                                counter = counter;
                                
                        }
        });
        
        window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
        });
       

        // if(counter > 2){
        // title.setAttribute('class','success');
        // title.textContent = "Congrats! You Compeleted the Test & Below is Your Result "
        // resulttitle.textContent = "You Scored " + counter + "%"
        // }else{
        //         title.setAttribute('class','error');
        //         title.textContent = "Oops! You Faild Try Agrain"
        //         resulttitle.textContent = "You Scored " + counter + "%"
        // }

        let score = 1; 
        const intr = setInterval(() => {
               if(score === counter){
                       clearInterval(intr);
               }else{
                score++;
                title.textContent = "Counting Your Scores";
                if(score >= 55){
                       
                        title.setAttribute('class','success');
                        title.textContent = "Congrats! You Compeleted the Test & Below is Your Result ";
                        resulttitle.textContent = "You Scored " + score + "%";
                }else{
                        title.setAttribute('class','error');
                        title.textContent = "Oops! You Faild Try Agrain";
                        resulttitle.textContent = "You Scored " + score + "%"


                }
                
                        
               }
       },80);

      

        


 });

   





