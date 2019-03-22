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


//////////////////header text rotate\\\\\\\\\\\\\\\\\\\\\\\\

var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	var that = this;
	var delta = 300 - Math.random() * 100;
  
	if (this.isDeleting) { delta /= 2; }
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
  };
  

window.onload = function() {
  setTimeout(function(){
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
	  var toRotate = elements[i].getAttribute('data-rotate');
	  var period = elements[i].getAttribute('data-period');
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid white}";
	document.body.appendChild(css);
  }, 1500);
};


  ///////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\