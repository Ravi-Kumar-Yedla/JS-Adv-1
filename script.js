const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const clearButton = document.getElementById("clear");
const countElement = document.getElementById("count");
const errorElement = document.getElementById("error");
 
let count =0;
decrementButton.addEventListener('click',()=>{
    if(count === 0){
        errorElement.style.display ="block";
        return;
    }
    count--;
    countElement.innerHTML= count;
    errorElement.style.display="none";
    clearButton.style.display="block";
});

incrementButton.addEventListener('click',()=>{
    count++;
    countElement.innerHTML= count;
    errorElement.style.display="none";
    clearButton.style.display="block";
});

clearButton.addEventListener('click',()=>{
  count=0;
  countElement.innerHTML= count;
  errorElement.style.display="none";
  clearButton.style.display="none";
 
});

