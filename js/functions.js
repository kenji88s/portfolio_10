// 言語選択
function lang_select(target, mode = null) {
	lang.kind = target;
	$('body').attr('data-lang', target);
	lang.alert = data.language[lang.kind]['alertJson'];
	code.contact = build.contact();
	/* ↑ 言語設定の変数、data属性に値を上書き → 変更後の言語にソース差替 */
	lang_toggle(mode);
	alert_appear(mode);
	/* ↑ 言語選択ボタンの非表示 → フローティングのボタンで切り替えた場合は通知 */
};

// 言語選択ボタンの出現
function lang_toggle(mode = null) {
	if (mode == null || mode == 'load') $('.lang_list').removeClass('active');
	if (mode == 'icon') {
		$('.lang_list').hasClass('active') ? $('.lang_list').removeClass('active') : $('.lang_list').addClass('active');
	};
	/* ↑ ボタンクリック時は表示／非表示、それ以外は非表示のみ */
};

// アラートの通知
function alert_appear(mode) {
	if (mode == 'icon') {
		once.addClass = 'active';
		setTimeout(function () {
			once.addClass = null;
			clearTimeout();
		}, 3000);
	};
};

// 背景色の変更
function bg_effect() {
	$('.current-point').each(function () {
		var top = $(this).offset().top;
		if ($(window).scrollTop() > top - $(window).height() + 100) {
			var id = $(this).attr('id');
			$('#particles').attr('data-current', id);
			/* ↑ CANVASブロックのdata属性の値を変更で背景色変更 */
			btn_currentinfo(`#${id}`);
			/* ↑ 現在地情報を切替 */
		};
	});
};

// スクロールアニメーション
function item_transit() {
	$('.transit-item').each(function () {
		var top = $(this).offset().top;
		var attr = $(this).attr('class');
		/* ↑ 対象ブロックなどの上座標とクラス名を取得 */
		if ($(window).scrollTop() > top - $(window).height() + 100) {
			$(this).addClass('effected');
		};
		/* ↑ スクロール時にセレクタにクラス名を付加（CSSアニメーション） */
		if (attr.indexOf('toggle') > 0 && $(window).scrollTop() > top + $(window).height() - 100) {
			$(this).removeClass('effected');
		};
		/* ↑ 上スクロール時にセレクタから付加したクラス名を削除 */
	});
};

// スムーススクロール
function ui_scroll(target, mode = null) {
	var top = $(target).offset().top;
	if ($(window).width() < 1020 && mode == 'gnavi') {
		gnavi_toggle();
	};
	/* ↑ スマホ時のナビゲーションアクション */
	$('body,html').animate({ scrollTop: top }, 500);
	/* ↑ ページ全体を対象ブロックの位置にスクロール */
	btn_currentinfo(target);
	/* ↑ 現在地情報を切替 */
};

// 現在地の情報から切替（ナビゲーション、ドット）
function btn_currentinfo(target) {
	$('.current-info').find('.active').removeClass('active');
	$('.current-info').find(`[href="${target}"]`).attr('class', 'active');
};

// スマホ時のナビゲーション表示／非表示
function gnavi_toggle(mode = null) {
	if ($('#gnavi').attr('class').indexOf('opened') > 0 || mode == 'resize') {
		$('#gnavi').removeClass('opened');
		$('body').removeAttr('data-state');
		$(window).scrollTop(once.scrollTop);
		/* ↑ ナビゲーションの非表示、奥レイヤーのスクロール有効、前のスクロール位置に戻す */
	} else {
		$('#gnavi').addClass('opened');
		once.scrollTop = $(window).scrollTop();
		$('body').attr('data-state', 'gnavi');
		/* ↑ ナビゲーションの表示、スクロール位置の保存、奥レイヤーのスクロール無効 */
	};
};

// ナビゲーションの出現・引込
function gnavi_sink() {
	$('#gnavi').addClass('sink');
	setTimeout(function () {
		if ($('.header').outerHeight() - 100 < $(window).scrollTop()) {
			setTimeout(function () {
				$('#gnavi').removeClass('sink');
				clearTimeout();
			}, 100);
			/* ↑ 現在地がヘッダー以外の時は出現 */
		} else {
			$('#gnavi').addClass('sink');
			/* ↑ 現在地がヘッダーの時は引込 */
		};
	}, 100);

	flag.loading2 = true;
	/* ↑ ローディングを終了させる変数 2 */
};

// 高さ統一
function height_match() {
	$('.header, #loadingField').outerHeight($(window).height());
	/* ↑ ヘッダーとローディングアニメーションの領域をウィンドウの高さに */
	flag.loading1 = true;
	/* ↑ ローディングを終了させる変数 1 */
};

// 画像の上のローディング停止
function loading_hidden(){
	setTimeout(function () {
		$('.figure-area').remove();
		clearTimeout();
	}, 2000);
};