//Mobile Navigation
function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
}
			
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}


//Open Project Info Div
function resize() {
	if (document.getElementById("myProj").style.width > "1vw") {
		openPic();
	}
}

function checkid(id) {
	closePic();
	if (id===1) {
		document.getElementById("football").style.visibility = "visible";
		openPic();
	}
	else if (id===2) {
		document.getElementById("javaScript").style.visibility = "visible";
		openPic();
	}
	else if (id===3) {
		document.getElementById("iOS").style.visibility = "visible";
		openPic();
	}
	else if (id===4) {
		document.getElementById("portfolio").style.visibility = "visible";
		openPic();
	}
	else if (id===5) {
		document.getElementById("mobile").style.visibility = "visible";
		openPic();
	}
	else {
		alert("Error");
	}
}

function openPic() {
	if (window.matchMedia("(max-width: 768px)").matches) {
		document.getElementById("myProj").style.width = "100vw";
	} 
	else if (window.matchMedia("(max-width: 1280px)").matches) {
		document.getElementById("myProj").style.width = "75vw";
		checkid(id);
	}
	else {
		document.getElementById("myProj").style.width = "60vw";
		checkid(id);
	}
}


function closePic() {
	document.getElementById("myProj").style.width = "0";
	document.getElementById("football").style.visibility = "hidden";
	document.getElementById("javaScript").style.visibility = "hidden";
	document.getElementById("iOS").style.visibility = "hidden";
	document.getElementById("portfolio").style.visibility = "hidden";
	document.getElementById("mobile").style.visibility = "hidden";
}