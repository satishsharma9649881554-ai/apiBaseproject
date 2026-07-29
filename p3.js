let btn = document.querySelector("button")
let img = document.querySelector("img")

btn.addEventListener("click",()=>{
    let link = fetch(`https://cataas.com/cat?json=true`)
    link.
    then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data.url);

        img.src = data.url

        

    })
    .catch((error)=>{
        console.log("error")
    })
})