var letterSpacing = "20px";
var isDarkMode = false;

function getById(id) {
	return document.getElementById(id);
}
function getByClass(className) {
	return document.getElementsByClassName(className);
}

function openNav() {
	letterSpacing = getById("headerText").style.letterSpacing;
	getById("headerText").style.letterSpacing = "0";
	getById("mainHeader").style.marginRight = "250px";
  	getById("mainSideNav").style.width = "250px";
  	getById("mainBody").style.marginRight = "250px";
	getById("mainBody").style.marginLeft = "-250px";
	getById("navDrawerIcon").setAttribute('style','transform:rotate(90deg)');
	getById("navDrawerIconDiv").setAttribute('style','margin-top:-300px');
}

function closeNav() {
	getById("mainHeader").style.marginRight = "0";
  	getById("mainSideNav").style.width = "0";
  	getById("mainBody").style.marginRight = "0";
	getById("mainBody").style.marginLeft = "0";
	getById("navDrawerIcon").setAttribute('style','transform:rotate(0deg)');
	getById("navDrawerIconDiv").setAttribute('style','margin-top:-0px');
	setTimeout(() => { 
		getById("headerText").style.letterSpacing = letterSpacing;
	}, 200);
}

function toggleDarkMode() {
	isDarkMode = !isDarkMode;
	document.querySelector("meta[name=theme-color]").setAttribute("content", isDarkMode ? "#111" : "#E8E8E8");
	getById("mainHeader").style.backgroundColor = isDarkMode ? "#111" : "#E8E8E8";
	getById("navDrawerIcon").classList.toggle("dark-mode-foreground-svg");
	document.body.classList.toggle("dark-mode-background");
	var paragraphs = getByClass("paragraph");
	for (var i = 0;i < paragraphs.length; i++){
		paragraphs[i].classList.toggle("dark-mode-foreground");
	}
	var sections = getByClass("section");
	for (var i = 0; i<sections.length; i++){
		 isDarkMode ? sections[i].style.backgroundColor = "#111" : sections[i].style.backgroundColor = "#D3D3D3";
	}
	closeNav();
}
