"use strict";
console.log("this is js");

const test = () => {
	const para=document.getElementById("dave");
	console.log(para);
	//para.style.color="red";
	para.className="myclass";
	const butn=document.getElementById("aa");
	butn.onclick=disp;
	setInterval(intr,1000);

}
const intr= () =>{
	const para=document.getElementById("dave");
	const today = new Date();
	const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+ ' '+  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    para.innerHTML=date;
}
const disp = () => {
	alert("ok");
}

var names=[2,2,4];
const reduce = (x, y) => x + y

console.log(names.reduce(reduce,0));

window.onload=test






