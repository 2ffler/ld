var resetlist = new Array();

function resetSender(){
	for (var i = 6; i > 0; i--) {
		document.querySelector(`input[name='sender${i}']`).value = '';
	};
};

function resetMessage(){
	for (var i = 6; i > 0; i--) {
		document.querySelector(`textarea[name='message${i}']`).value = '';
	};
};

function resetTime(){
	for (var i = 6; i > 0; i--) {
		document.querySelector(`select[name='time${i}']`).value = 0;
		document.querySelector(`select[name='time${i}']`).style = "color: #666666;";
	};
};

function resetWhat(){
	for (var i = 6; i > 0; i--) {
		document.querySelector(`select[name='type${i}']`).value = 0;
		document.querySelector(`select[name='type${i}']`).style = "color: #666666;";
	};
};

function resetButton(obj){
	console.log(obj.checked);
};