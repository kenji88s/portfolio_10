// 設定
const config = {
    json1: 'https://raw.githubusercontent.com/kenji88s/portfolio/main/json/language.json',
    json2: 'https://raw.githubusercontent.com/kenji88s/portfolio/main/json/contents.json',
    json3: 'https://raw.githubusercontent.com/kenji88s/portfolio/main/json/profile.json',
    /* ↑ 読み込むJSONファイル */

    lang1: true,
    lang2: true,
    langKind: 'jpn',
    /* ↑ 言語設定機能のON/OFF、言語のデフォルト設定 */

    postUrl: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfQTt1NVY1mu1iD4pa-a7xeG5GnHVdkt1_EqWLmYm_nKLh1pg/formResponse',
    /* ↑ お問い合わせフォームの送信先 */

    alertJson: 'ファイルが存在しない<span>もしくはネット接続不可です</span>',
    /* ↑ JSONデータが読む込み不可のときの通知 */
};

/* ======================================================================================= */

// JSON情報
let data = new Vue({
    data: {
        language: [],
        contents: [],
        profile: [],
    }
});

// 言語関連
var lang = new Vue({
    data: {
        kind: config.langKind,
        alert: config.alertJson,
    }
});

// ソースコードの変数
let code = new Vue({
    data: {
        loading: null,
        svg: null,
        overlay: null,
        contact: null,
    },
});

// 一時的な変数
var once = new Vue({
    data: {
        scrollTop: null,
        addClass: null
    },
});

// 表示／非表示の変数
let flag = new Vue({
    data: {
        loading1: false,
        loading2: false,
        /* ↑ ローディングアニメーション時 */

        jsons: false,
        json1: false,
        json2: false,
        json3: false,
        /* ↑ JSONファイル読み込み時 */

        overlay: false,
        overlayBtn: false,
        /* ↑ オーバーレイ時 */
    }
});

/* ======================================================================================= */

// ウィンドウ各アクション時
new Vue({
    methods: {
        window: onload = function () {
            height_match();
            gnavi_sink();
            loading_hidden();
        },
        window: onscroll = function () {
            height_match();
            bg_effect();
            item_transit();
            gnavi_sink();
            lang_toggle();
        },
        window: onresize = function () {
            height_match();
            lang_toggle();
            gnavi_toggle('resize');
            code.svg = build.title('active');
        },
    }
});
