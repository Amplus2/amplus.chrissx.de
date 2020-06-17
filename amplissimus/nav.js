var letterSpacing = "20px";
function openNav() {
	letterSpacing = document.getElementById("headerText").style.letterSpacing;
	document.getElementById("headerText").style.letterSpacing = "0";
	document.getElementById("mainHeader").style.marginRight = "250px";
  	document.getElementById("mainSideNav").style.width = "250px";
  	document.getElementById("mainBody").style.marginRight = "250px";
	document.getElementById("mainBody").style.marginLeft = "-250px";
}

function closeNav() {
	document.getElementById("mainHeader").style.marginRight = "0";
  	document.getElementById("mainSideNav").style.width = "0";
  	document.getElementById("mainBody").style.marginRight = "0";
	document.getElementById("mainBody").style.marginLeft = "0";
	setTimeout(() => { document.getElementById("headerText").style.letterSpacing = letterSpacing;}, 200);
}