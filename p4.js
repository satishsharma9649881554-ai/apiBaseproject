let input = document.querySelector("input")
let btn = document.querySelector("button")
let para1 = document.getElementById("actor")
let para2 = document.getElementById("alive")
let h2  = document.querySelector("h2")
let img = document.querySelector("img")

btn.addEventListener("click",()=>{
    let url = fetch(`https://api.potterdb.com/v1/characters`)
    url.
    then((res)=>{
        return res.json()
    }).
    then((data)=>{
       
        for(let char of data.data){
            console.log(char.attributes.name);
             console.log(char.attributes.img);
            
            
            if(char.attributes.name == input.value){
                h2.innerText = char.attributes.name;
              para1.innerText = char.attributes.house;
              para2.innerText = char.attributes.gender;
              img.src = char.attributes.image
              break;

            }
            
        }

        
    })
})