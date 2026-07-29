let btn = document.querySelector("button")
let para = document.querySelector("p")

btn.addEventListener("click",() =>{
    let url  = fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`)
    url.then((res) => {
      return  res.json()
    }).then((data)=>{
        console.log(data.type);
        if(data.type == "single"){
            para.innerText = data.joke;
        }else{
            para.innerText = `${data.setup} 
            ${data.delivery}`
        }
    }).catch((error) =>{
        console.log("error")
    })
})