let totalMarks = document.getElementById("totalMarks");
let subjectMarks =document.getElementById("subjectMarks");
let massege = document.querySelector(".massege");
let percentage ;
const btn = document.querySelector(".btn");

const calculate = ()=>{

   if(totalMarks.value == ''){
    totalMarks.style.border = '2px solid red';
    massege.innerHTML ='';
 
   }
   else{

   }
   if(subjectMarks.value == ''){
    subjectMarks.style.border = '2px solid red';
    massege.innerHTML ='';
       
   }
   else{
 
    percentage =Math.floor((subjectMarks.value/totalMarks.value) * 100);
    
//     if(percentage >100){
// console.log("error");
//     }
    if(percentage >= 85 && percentage <= 100){
       massege.innerHTML = `Congratulations ! Your Percentage is ${percentage}%, Grade A+`
    }

    if(percentage >= 70 && percentage < 84){
       massege.innerHTML = `Congratulations ! Your Percentage is ${percentage}%, Grade A`
    } 

     if(percentage >= 60 && percentage <= 69){
      
       massege.innerHTML = `Congratulations ! Your Percentage is ${percentage}%, Grade B+`
    } 

    if(percentage >= 50 && percentage <= 59 ){
     
       massege.innerHTML = `Congratulations ! Your Percentage is ${percentage}%, Grade B`
    }
 
   if(percentage >= 40 && percentage <= 49 ){
     
      massege.innerHTML = `Congratulations ! Your Percentage is ${percentage}%, Grade c`
   }
   if(percentage >= 33 && percentage <= 39 ){
     
      massege.innerHTML = `Congratulations ! Your Percentage is ${percentage}%, Pass`
   }
   if(percentage >= 20 && percentage <= 32 ){
     
      massege.innerHTML = `Your Percentage is ${percentage}% Fail, Please Try Again `
   }
   if(percentage>100){
        massege.innerHTML = `Please check  Marks Out of and Total Marks `
   }
   //  massege.innerHTML = `Congratulations ! Your Percentage is ${percentage}%;`

    subjectMarks.style.border = ' 2px solid black';
    totalMarks.style.border = ' 2px solid black';
    subjectMarks.value = '';
    totalMarks.value = '';



   }
}
btn.addEventListener('click', calculate);