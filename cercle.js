const c=document.querySelector(".cercle");
var screen=document.querySelector(".screen");
console.log(c);
console.log(c.style.down);
console.log(c.style.right);

function mouve(e){
	var x=(e.clientX-25)+"px";
	var y=(e.clientY-25)+"px";
	c.style.top=y;
	c.style.left=x;
	console.log(x,y);
	
	screen.innerText = `
		Screen X/Y :${e.screenX}, ${e.screenY} 
		Client X/Y :${e.clientX}, ${e.clientY} 
	`;
	return[x,y]; // je sais pas prq
}


document.addEventListener("mousemove",mouve);
