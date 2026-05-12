const clock=document.getElementById("clock")
setInterval(()=>{
    const samay= new Date()
    clock.innerHTML=samay.toLocaleTimeString();
},1000)