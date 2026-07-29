let btn = document.querySelector("button")
let h2 = document.querySelector("h2")
let p = document.querySelector("p")

btn.addEventListener("click",()=>{
    event.preventDefault()
   

    let inpuut = document.querySelector("input").value

    let url = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpuut}`)
    url.then((res) => {
      return  res.json()
    }).then((data) => {
       h2.innerText = data[0].word;
       p.innerText = data[0].meanings[0].partOfSpeech;
        
    }).catch((error) => {
        console.log("error")
    })
      
})