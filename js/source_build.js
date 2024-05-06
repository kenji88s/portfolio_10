const build = {
    // ローディング時
    loading: () => {
        let source_code = '<div class="loading_area_text"><p>Now Loading</p></div>';
        return source_code;
    },
    // ヘッダータイトルSVG
    title: addclass => {
        var judge = $(window).width() >= 880;
        var source_code = '<svg id="textTitleContainer" ';
        if (addclass == 'active') source_code += `class="${addclass}"`;
        source_code += (judge ? 'viewBox="0 0 800 180" width="800" height="180">' : 'viewBox="0 0 300 100" width="100%" height="400">');
        if (judge) source_code += '<text x="400" y="90" class="text">Welcome to My Portfolio</text>';
        if (!judge) source_code += '<text x="38%" y="30%" class="text">Welcome to</text><text x="58%" y="70%" class="text">My Portfolio</text>';
        source_code += '</svg>';
        return source_code;
    },
    // お問い合わせフォーム
    contact: () => {
        let source_code = `<table>`;
        source_code += `<tr><th>${data.language[lang.kind]['name']}</th>`;
        source_code += `<td><input type="text" name="entry.1079412704" required="required" data-input="お名前" /></td></tr>`;
        source_code += `<tr><th>${data.language[lang.kind]['subject']}</th>`;
        source_code += `<td><input type="text" name="entry.631258150" required="required" data-input="件名"/></td></tr>`;
        source_code += `<tr><th>${data.language[lang.kind]['email']}</th>`;
        source_code += `<td><input type="email" name="entry.801978071" required="required" data-input="メールアドレス" /></td></tr>`;
        source_code += `<tr><th>${data.language[lang.kind]['inquiry']}</th>`;
        source_code += `<td><textarea name="entry.959752743" required="required" data-input="お問い合わせ内容"></textarea></td></tr>`;
        source_code += `</table>`;
        source_code += `<div class="contact_form_btns">`;
        source_code += `<button type="submit">${data.language[lang.kind]['confirm']}</button>`;
        source_code += `<button type="reset">${data.language[lang.kind]['reset']}</button>`;
        source_code += `</div>`;
        return source_code;
    },
    // 言語選択（ページ遷移時）
    lang1: () => {
        let source_code = `<div class="lang_select">`;
        source_code += `<p class="lang_select_text">which language?</p>`;
        source_code += `<ul class="lang_select_btns">`;
        for (var str in data.language) {
            source_code += `<li><a onclick="window_loading.select('${str}','load')">${data.language[str].lang}</a></li>`;
        };
        source_code += `</ul></div>`;
        return source_code;
    },
    // 言語選択（フローティング）
    lang2: () => {
        let source_code = `<a class="lang_icon" onclick="lang_toggle('icon')">${figure.icon4()}</a>`;
        source_code += `<ul class="lang_list">`;
        for (var str in data.language) {
            source_code += `<li><a onclick="lang_select('${str}','icon')">${data.language[str].lang}</a></li>`;
        };
        source_code += `</ul>`;
        return source_code;
    },
};

/* ======================================================================================= */

const preview = {
    // プロフィール詳細
    profile: () => {
        let source_code = `<table class="profile">`;
        for (let i in data.profile) {
            var target = data.profile[i];
            if (target.label != "basic" && target.label != "outside") {
                source_code += `<tr><th>${data.language[lang.kind][target.label]}</th><td><dl>`;
                for (let n in target.items) {
                    source_code += `<dt>${target.items[n].title}`;
                    source_code += (target.label != "qualification" ? `：</dt><dd>${target.items[n].period}` : `</dt><dd>（${target.items[n].period}）`);
                    source_code += `</dd>`;
                };
                /* ↑ 基本情報と外部サイト以外を出力、取得資格の時は括弧付き */
                source_code += `</dl></td></tr>`;
            };
        };
        source_code += `</table>`;
        return source_code;
    },
    // 作品詳細
    item: (number, index) => {
        let source_code = `<table class="product">`;
        var target = data.contents[number].items[index];
        for (var string in target) {
            if (target[string] && string != "image" && string != "type" && string != "youtube") {
                source_code += `<tr><th>${data.language[lang.kind][string]}</th><td>`;
                source_code += (string == "url" ? `<a href="${target[string]}" target="_blank">${target[string]}</a>` : target[string]);
                source_code += `</td></tr>`;
            };
            /* ↑ 項目が画像とタイプ以外を出力、URLの時はテキストリンク */
        };
        source_code += `</table>`;
        return source_code;
    },
    // 動画
    /*
    video: (image, url) => {
        let source_code = `<video class="overlay_detail_video" controls muted autoplay playsinline width="640" height="360" `;
        source_code += `poster="${image}" preload="none">`;
        source_code += `<source src="${url}">`;
        source_code += `<p>${data.language[lang.kind]['alertVideo']}</p>`;
        source_code += `</video>`;
        return source_code;
    },
    */
    video: (image, youtube) => {
        let source_code = `<iframe width="560" height="315" src="${youtube}?rel=0&modestbranding=1&mute=1" title="YouTube video player" `;
        source_code += `frameborder="0" allow="accelerometer; autoplay; `;
        source_code += `clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" `;
        source_code += `referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>`;
        source_code += `</iframe>`;
        return source_code;
    },
    // 画像
    image: (image, title) => {
        let source_code = `<img src="${image}" alt="${title}">`;
        return source_code;
    },
};

/* ======================================================================================= */

const form = {
    // お問い合わせ内容確認
    confirm: () => {
        let source_code = `<div class="confirm_block">`;
        source_code += `<div class="confirm_table">`;
        source_code += `<table class="contact">`;
        source_code += `<tr><th>${data.language[lang.kind]['name']}</th>`;
        source_code += `<td>${form_action.decode('[data-input="お名前"]')}</td></tr>`;
        source_code += `<tr><th>${data.language[lang.kind]['subject']}</th>`;
        source_code += `<td>${form_action.decode('[data-input="件名"]')}</td></tr>`;
        source_code += `<tr><th>${data.language[lang.kind]['email']}</th>`;
        source_code += `<td>${form_action.decode('[data-input="メールアドレス"]')}</td></tr>`;
        source_code += `<tr><th>${data.language[lang.kind]['inquiry']}</th>`;
        source_code += `<td>${form_action.decode('[data-input="お問い合わせ内容"]')}</td></tr>`;
        source_code += `</table></div>`;
        source_code += `<div class="confirm_loading">`;
        source_code += `<div class="figure"><div class="loader"></div></div>`;
        source_code += `<div class="text">${data.language[lang.kind]['sending']}</div>`;
        source_code += `</div>`;
        source_code += `</div>`;
        source_code += `<div class="confirm_btns">`;
        source_code += `<button onclick="overlay_show.close()">${data.language[lang.kind]['retry']}</button>`;
        source_code += `<button onclick="form_action.submit()">${data.language[lang.kind]['send']}</button>`;
        source_code += `</div>`;
        return source_code;
    },
    // 送信完了
    success: () => {
        let source_code = `<div class="figure">${figure['icon3']()}</div>`;
        source_code += `<div class="text">${data.language[lang.kind]['success']}</div>`;
        source_code += `<div class="close" onclick="overlay_show.close()"><a>${figure['icon2']()}</a></div>`;
        return source_code;
    },
};
