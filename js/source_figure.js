const figure = {
	// ハンバーガーメニュー
	icon1: () => {
		let source_code = '<div class="figureMenu">';
		source_code += '<span></span>';
		source_code += '<span></span>';
		source_code += '<span></span>';
		source_code += '</div>';
		return source_code;
	},
	// バッテン（閉じる）
	icon2: () => {
		let source_code = '<svg class="figureClose" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" ';
		source_code += 'fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
		source_code += '<line x1="18" y1="6" x2="6" y2="18"></line>';
		source_code += '<line x1="6" y1="6" x2="18" y2="18"></line>';
		source_code += '</svg>';
		return source_code;
	},
	// チェック（お問い合わせ送信成功）
	icon3: () => {
		let source_code = '<svg class="figureSuccess" xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 24 24" ';
		source_code += 'fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
		source_code += '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>';
		source_code += '<polyline points="22 4 12 14.01 9 11.01"></polyline>';
		source_code += '</svg>';
		return source_code;
	},
	// 設定
	icon4: () => {
		let source_code = '<svg class="figureSetting" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ';
		source_code += 'fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">';
		source_code += '<circle cx="12" cy="12" r="3"></circle>';
		source_code += '<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.';
		source_code += '82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.';
		source_code += '83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.';
		source_code += '6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.';
		source_code += '51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.';
		source_code += '06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">';
		source_code += '</path>';
		source_code += '</svg>';
		return source_code;
	},
	// 矢印（下向き）
	arrow1: () => {
		let source_code = '<svg class="figureArrow" xmlns="http://www.w3.org/2000/svg" ';
		source_code += 'width="141.732px" height="70.866px" viewBox="-42.605 -25.455 141.732 70.866">';
		source_code += '<path fill="none" stroke="#ffffff" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" ';
		source_code += 'd="M-28.432-18.369 l56.695,56.693l56.691-56.693"/>';
		source_code += '</svg>';
		return source_code;
	},
	// 矢印（上向き）
	arrow2: () => {
		let source_code = '<svg class="figureArrow" xmlns="http://www.w3.org/2000/svg" ';
		source_code += 'width="141.732px" height="70.866px" viewBox="-42.605 -25.455 141.732 70.866">';
		source_code += '<path fill="none" stroke="#ffffff" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" ';
		source_code += 'd="M84.954,38.323 L28.259-18.369l-56.69,56.692"/>';
		source_code += '</svg>';
		return source_code;
	},
	// 正方形９個（ローディング時）
	loading1: () => {
		let source_code = '<div class="building_square">';
		for (let int = 0; int < 9; int++) {
			source_code += '<div class="square"></div>';
		};
		source_code += '</div>';
		return source_code;
	},
	// 弧（アイテム追加読み込み時）
	loading2: () => {
		let source_code = '<div class="half_circles">';
		source_code += '<div class="circle circle_1"></div>';
		source_code += '<div class="circle circle_2"></div>';
		source_code += '</div>';
		return source_code;
	},
};