var button;
var yourName;
var yearBorn;
var thisYear;
var ageYouAreTurning;
var ageYouWere;
function getAge() {
	yourName = prompt('What is your name?');
	yearBorn = prompt('What year were you born?');
	thisYear = new Date().getFullYear();
	ageYouAreTurning = thisYear - yearBorn;
	ageYouWere = ageYouAreTurning - 1;
	alert(yourName + ', you are either ' + ageYouWere + ' or ' + ageYouAreTurning);
}
button = document.getElementById('findAge');
button.onclick = getAge; //point to the function.  Adding () runs the function.
