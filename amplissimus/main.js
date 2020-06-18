var letterSpacing = "20px";
var isDarkMode = false;
var navIsClosed = false;
var navItemHoverColor = "white";


function getById(id) {
	return document.getElementById(id);
}
function getByClass(className) {
	return document.getElementsByClassName(className);
}

function updateHeight() {
	if(window.innerWidth < 1130) getById("mainNav").style.height = "100%";
	else getById("mainNav").style.height = "55px";
	navIsClosed = false;
}

function onLoad() {
	window.onresize = updateHeight();
}

function openNav() {
	if(window.innerWidth > 1129) {
		if(navIsClosed) getById("mainNav").style.height = "55px";
		else getById("mainNav").style.height = "0px";
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
	if(window.innerWidth > 1129) return;
	getById("mainHeader").style.marginRight = "0";
	getById("mainNav").style.width = "0";
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
