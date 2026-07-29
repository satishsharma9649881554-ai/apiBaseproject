let input = document.querySelector("input");

let button = document.querySelector("button");
let li = document.querySelectorAll("li");
let index = 0;

button.addEventListener("click",function(event){
    event.preventDefault();
    let inputvalue = input.value;
    console.log(inputvalue);

    if(index < li.length){
        li[index].innerText = inputvalue;
        index++;
    }
   
   if(index === li.length){
    index = 0;
   }
    

})