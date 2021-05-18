function changeTime(obj){
	obj.style.color = '#000000';
};

function changeItem(obj){
	var i = 1;

	while(i < 7){
		var type = document.querySelector(`select[name='type${i}']`);

		if (type.name == obj.name){
			change = document.querySelector(`textarea[name='message${i}']`);
			if (type.value == 1){
				obj.style.color = '#000000';
				change.disabled = false;
				return false;
			} else {
				obj.style.color = '#000000';
				change.value = '';
				change.disabled = true;
				return false;
			}

		}

		i += 1;
	}
};

function timeRandom(){
	var timeRandomH = Math.floor(Math.random() * 7 + 18);
	var timeRandomM = Math.floor(Math.random() * 60);
	if(timeRandomH == 24){
		timeRandomH = '00';
	};
	if(timeRandomM < 10){
		timeRandomM = '0' + `${timeRandomM}`;
	}
	document.querySelector(`input[name='time']`).value = timeRandomH + ':' + timeRandomM;
};