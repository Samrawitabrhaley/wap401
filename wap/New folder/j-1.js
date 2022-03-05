const func = () => {
    const par=document.getElementById("clock");
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    par.innerHTML = day + " " + month + " " + year+"   "+ hour+" : "+minutes +": " + seconds
}

setInterval(func, 1000)