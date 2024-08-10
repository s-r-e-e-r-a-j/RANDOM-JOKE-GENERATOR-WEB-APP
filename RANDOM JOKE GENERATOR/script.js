 
const output=document.querySelector("#output")
const btn=document.querySelector("#btn")

btn.addEventListener("click",async()=>{


try{

let api="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let response=await fetch(api)
let data=await response.json();
output.innerText=data.joke

}catch(error){

output.innerText="Error occured"

}



})

