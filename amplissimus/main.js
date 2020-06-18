var letterSpacing = "20px";

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
	getById("headerText").classList.toggle("dark-mode-foreground");
	getById("mainHeader").classList.toggle("dark-mode-background");
  	document.body.classList.toggle("dark-mode-background");
	closeNav();
}
