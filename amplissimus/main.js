var usingBigScreen = true;
var letterSpacing = "20px";
var isDarkMode = false;
var navIsClosed = false;


function getById(id) {
	return document.getElementById(id);
}
function getByClass(className) {
	return document.getElementsByClassName(className);
}
function getRandom() {
  	return Math.random();
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function getTheme() {
	var darkModeCookie = getCookie("isDarkMode");
	if(darkModeCookie.trim() == "true") return true;
	else if(darkModeCookie.trim() == "false") return false;
	else return false;
}

function updateHeight() {
	if(isDarkMode != getTheme()) toggleDarkMode();
	if(window.innerWidth < 1130) {
		usingBigScreen = false;
		getById("mainNav").classList.remove("listnav");
		getById("mainNav").classList.add("sidenav");
		getById("mainNav").style.height = "0%";
		getById("mainNav").style.width = "0px";
		getById("mainNav").style.backgroundColor = isDarkMode ? "#111" : "#E8E8E8";
	}
	else {
		getById("mainNav").style.transitionDuration = "0ms";
		if(!usingBigScreen) closeNav();
		usingBigScreen = true;
		getById("mainNav").classList.remove("sidenav");
		getById("mainNav").classList.add("listnav");
		if(!navIsClosed) getById("mainNav").style.height = "55px";
		getById("mainNav").style.width = "100%";
		getById("mainNav").style.backgroundColor = isDarkMode ? "#111" : "#E8E8E8";
		setTimeout(() => {getById("mainNav").style.transitionDuration = "300ms"}, 10);
	}
}



function openNav() {
	if(usingBigScreen) {
		if(navIsClosed) {
			getById("mainNav").style.height = "55px";
			getById("mainBody").style.marginTop = "77px";
		} else {
			getById("mainNav").style.height = "0px";
			getById("mainBody").style.marginTop = "22px";
		}
		navIsClosed = !navIsClosed;
		return;
	}
	letterSpacing = getById("headerText").style.letterSpacing;
	getById("headerText").style.letterSpacing = "0";
	getById("mainHeader").style.marginRight = "250px";
	getById("mainNav").style.width = "250px";
	getById("mainNav").style.height = "100%";
	getById("mainBody").style.marginRight = "250px";
	getById("mainBody").style.marginLeft = "-250px";
	getById("navDrawerIcon").setAttribute('style','transform:rotate(90deg)');
	getById("navDrawerIconDiv").setAttribute('style','margin-top:-300px');
}

function closeNav() {
	if(usingBigScreen) return;
	getById("mainHeader").style.marginRight = "0";
	getById("mainNav").style.width = "0";
	getById("mainNav").style.height = "0";
	getById("mainBody").style.marginRight = "0";
	getById("mainBody").style.marginLeft = "0";
	getById("navDrawerIcon").setAttribute('style','transform:rotate(0deg)');
	getById("navDrawerIconDiv").setAttribute('style','margin-top:-0px');
	setTimeout(() => {getById("headerText").style.letterSpacing = letterSpacing}, 270);
}

function toggleDarkMode() {
	isDarkMode = !isDarkMode;
	setCookie("isDarkMode", isDarkMode, 750);
	document.querySelector("meta[name=theme-color]").setAttribute("content", isDarkMode ? "#111" : "#E8E8E8");
	getById("mainHeader").style.backgroundColor = isDarkMode ? "#111" : "#E8E8E8";
	getById("navDrawerIcon").classList.toggle("dark-mode-foreground-svg");
	getById("mainNav").style.backgroundColor = isDarkMode ? "#111" : "#E8E8E8";
	document.body.classList.toggle("dark-mode-background");
	var paragraphs = getByClass("paragraph");
	for (var i = 0;i < paragraphs.length; i++){
		paragraphs[i].classList.toggle("dark-mode-foreground");
	}
	var sections = getByClass("section");
	for (var i = 0; i<sections.length; i++){
		isDarkMode ? sections[i].style.backgroundColor = "#111" : sections[i].style.backgroundColor = "#D3D3D3";
	}
	var menuItems = getByClass("menu_item");
	for (var i = 0; i<menuItems.length; i++){
		menuItems[i].classList.toggle("menu-item-bright");
		menuItems[i].classList.toggle("menu-item-dark");
	}
	closeNav();
}

function onLoadFunction() {
	
	updateHeight();
	
}
