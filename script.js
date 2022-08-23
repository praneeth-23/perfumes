var header=document.querySelector("b")

header
header.style.color='blue'


function getRandomColor()
{
    var letters="0123456789ABCDEF";
    var color='#';
    for(var i=0;i<6;i++)
    {
        color+= letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeHeaderColor()
{
    colorInput=getRandomColor()
    header.style.color=colorInput;
}

setInterval("changeHeaderColor()",100);

const text = document.getElementById("c1");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0; i< splitText.length; i++){
  text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 600);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
   }
  }

  function complete(){
    clearTimeout(timer);
    timer = null;
  }
  const btn = document.getElementById('color');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}



const btn1 = document.querySelector('.section section-left');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.getElementById("about").style.backgroundColor = rndCol;
}


var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);





var i =0;
var images = [];
var time = 1000;

images[0] = 'images/third.png';
images[1] = 'images/2.jpg';
images[2] = 'images/bg.jfif';
images[3] = 'images/3.jpg';
images[4] = 'images/4.png';

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length -1){
    i++;
  }else{
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;