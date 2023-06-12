const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
const weeks=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];


const minute=document.querySelector('.minute')


let a;
let time;
setInterval(() => {
  a = new Date();
  var hours = a.getHours();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  var minutes =a.getMinutes()
  var seconds=a.getSeconds();
  hours = hours % 12;
  hours = hours ? hours : 12;
  runClock(hours,minutes,seconds)
  hours = hours < 10 ? '0'+hours : hours;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  printTime(hours,minutes,ampm)
  var day=weeks[a.getDay()];
  var month=months[a.getMonth()];
  var date=a.getDate();
  printDay(day,month,date)
}, 1000);

const mode=document.querySelector('.mode')
const body=document.querySelector('body')
mode.addEventListener('click',()=>{
  body.classList.toggle('dark')
  if(body.classList.contains('dark')){
    mode.innerText=`Light Mode`
  }
  else{
    mode.innerText=`Dark Mode`
  }
})



function printTime(hours,minutes,ampm){
  time = hours + ':' + minutes + ' ' +  ampm;
  document.querySelector('.time').innerHTML = time;
}
function printDay(day,month,date){
  document.querySelector('#day').innerHTML=day
  document.querySelector('#month').innerHTML=month
  document.querySelector('#date').innerHTML=date
}

function runClock(hours,minutes,seconds){
  document.querySelector('.hour').style.transform=`translate(-50%, -100%) rotate(${30*hours+minutes/2}deg)`
  document.querySelector('.minute').style.transform=`translate(-50%, -100%) rotate(${6*minutes}deg)`
  document.querySelector('.second').style.transform=`translate(-50%, -100%) rotate(${6*seconds}deg)`
}