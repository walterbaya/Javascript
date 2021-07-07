let inputSave = document.getElementById('savedata');
let inputDelete = document.getElementById('deletedata');
let buttonSave = document.getElementById('buttonsave');
let buttonDelete = document.getElementById('buttondelete');
let buttonShow = document.getElementById('buttonshow');
let sessionStorage = document.getElementById('sessionStorage');
let localStorage = document.getElementById('localStorage'); 

let counter = 0;

buttonSave.addEventListener('click', (e) => {
	e.preventDefault();

	if(sessionStorage.checked){
		window.sessionStorage.setItem(counter, inputSave.value);
	}
	if(localStorage.checked){
		window.localStorage.setItem(counter, inputSave.value);	
	}
	counter++;
});

buttonDelete.addEventListener('click', (e) => {
	e.preventDefault();
	if(localStorage.checked){
		window.localStorage.removeItem(inputDelete.value);	
	}	
});

