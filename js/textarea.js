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