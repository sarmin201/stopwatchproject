
const button1=document.getElementById("button1");
const button2=document.getElementById("button2");
const button3=document.getElementById("button3");
const paragraph=document.getElementById("paragraph");
const audio1=document.getElementById("audio1");
const audio2=document.getElementById("audio2");
const audio3=document.getElementById("audio3");


let count=0;
let stopCount="";

button1.onclick=()=>{
stopCount=setInterval(() => {
    
    count++;
    paragraph.innerHTML=count;
    audio1.play();

},1000)


}

button2.onclick=()=>{

clearInterval(stopCount);
audio2.play();

}
button3.onclick=()=>{
clearInterval(stopCount);
count=0;
paragraph.innerHTML=count;
audio3.play();


}