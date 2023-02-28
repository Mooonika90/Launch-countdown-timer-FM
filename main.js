const year =  document.querySelector('.year')
const day=document.querySelectorAll('[data-days]')
const hour=document.querySelectorAll('[data-hours]')
const min=document.querySelectorAll('[data-minutes]')
const sec=document.querySelectorAll('[data-seconds]')
const input = document.querySelector('input')
const startBtn = document.querySelector('.start-btn')
const info = document.querySelector('.info')
const date = document.querySelectorAll('#data')



startBtn.addEventListener('click', countNumber)


    function countNumber (){     
      const dateEntered = new Date(input.value).getTime();
      const now = new Date().getTime()
      const left = dateEntered  -now 
    const days = Math.floor(left/(1000*60*60*24))
    const h = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m =  Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((left % (1000 * 60)) / 1000);
  

day.forEach(e=>{
  e.textContent =days
})
hour.forEach(e=>{
  e.textContent =h
})
min.forEach(e=>{
  e.textContent =m
})

sec.forEach(e => {
  e.textContent=s
});

if(left<0){
  info.textContent = "Time has passed..."
 stopCount()
 clearAll()
}else if(left>0){
  goCount()
  info.textContent = "Get ready for a big event!!"
 
}else{
  info.textContent = "Set the date event"
  stopCount()
  clearAll()
}

}

const clearAll = ()=>{
date.forEach(e => {
  e.textContent='00'
});

}

function goCount (){
  const x = setInterval(countNumber, 1000)
}
function stopCount (x){
 clearInterval(x)
}

const countYear = () =>{
    const newDate = new Date()
    const currentYear = newDate.getFullYear()
    year.textContent = currentYear
}


countYear()


