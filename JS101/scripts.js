var accordionButtons;


function openAccordion() {
	var idOfContentToShow,
		contentToShow;
	console.log('running openAccordion');
	idOfContentToShow = (this).getAttribute('data-controls');
	contentToShow = document.getElementById(idOfContentToShow);
	contentToShow.className = 'expanded';
}



accordionButtons = document.getElementsByClassName('accordion-control');
for(var i=0;i<accordionButtons.length;i++) {
	accordionButtons[i].onclick = openAccordion;
}