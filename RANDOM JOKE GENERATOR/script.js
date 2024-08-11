 
const output=document.querySelector("#output")
const btn=document.querySelector("#btn")

var speech=new SpeechSynthesisUtterance();
speech.lang="en-US"||"en-GB"||"en-UK";
speech.pitch=0.8;
speech.rate=0.8;
speech.volume=1;
btn.addEventListener("click",async()=>{

try{


let api="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let response=await fetch(api)
let data=await response.json();
output.innerText=data.joke;
speech.text=data.joke
window.speechSynthesis.speak(speech)
}catch(error){

output.innerText="Error occured"

}



})

