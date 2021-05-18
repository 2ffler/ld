if(window.File) {
	var backPreview = document.getElementById('backPreview');
	var select = document.querySelector('input[name="display_back"]');
	// ファイルが選択されたとき
	select.addEventListener('change', function(e) {
		// 選択されたファイルの情報を取得
		const fileData = e.target.files[0];

		const imgType = fileData.type;
		// 選択されたファイルが画像かどうか確認
		if(!imgType.match(/^image/)) {
			alert('画像ファイルじゃないんじゃないそれ。');
			select.value = '';
			backPreview.innerHTML = '画像だったらここにプレビュー出てくるんだけど。';
			return;
		}
		var reader = new FileReader();
		// ファイル読み取りに失敗したとき
		reader.onerror = function() {
			alert('読み取り失敗！')
			backPreview.innerHTML = '';
		}
		// ファイル読み取りに成功したとき
		reader.onload = function() {
			const insert = '※推奨画像比率・縦長９：16<h4>背景画像プレビュー↓</h4><div class="frame"><img src="' + reader.result + '" class="backPreview"></div>';
			const buttonSet ='<button type="button" name="fileCreate" onclick="buttonClick(this)">確認</button>';
			backPreview.innerHTML = insert;
			buttonThere.innerHTML = buttonSet;
		}
		// ファイル読み取りを実行
		reader.readAsDataURL(fileData);
		MyBG = 1;

	}, false);
		
};