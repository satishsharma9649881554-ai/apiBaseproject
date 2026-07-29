let data = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
console.log((data));
data.then((res)=>{
 return   res.json()
})
.then((data) => {
  console.log(data[0].phonetics[0].audio)
    
})
.catch((err) => {
    console.log("error")
})