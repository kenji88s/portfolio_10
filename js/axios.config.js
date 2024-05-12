// ページ遷移時 //
var window_loading = new Vue({
    el: '#loadingField',
    methods: {
        // 言語選択画面
        lang: function () {
            config.lang1 ? code.loading = build.lang1() : this.select(lang.kind, 'load');
            /* ↑ 言語設定の有効化で選択画面を表示 */
        },
        // 言語選択時
        select: function (target, mode) {
            lang_select(target, mode);
            this.ing();
            /* ↑ 言語選択アクション → ローディング */
        },
        // ローディング
        ing: function () {
            code.loading = build.loading() + figure['loading1']();
            /* ↑ ローディングソースの作成 */

            let interval = setInterval(function () {
                if (flag.loading1 && flag.loading2) {
                    $('body').removeAttr('data-state');
                    $('.building_square').css({ 'animation-play-state': 'paused' });
                    /* ↑ スクロールバーの表示 → ローディングアニメーションの停止 */

                    $('#loadingField').fadeOut(500, () => {
                        $('#loadingField').remove();
                        code.svg = build.title('active');
                        /* ↑ ローディングレイヤーの削除 → SVGアニメーションの実行 */

                        clearInterval(interval);
                        once.addClass = (!flag.jsons ? 'active' : null);
                        /* ↑ JSONデータが読み込まれないときは通知 */
                    });
                };
            }, 1000);
        }
    }
});

/* ======================================================================================= */

// コンテンツ読み込み //
var get_json = new Vue({
    el: '#ui',
    mounted: function () {
        this.contents();
        this.profile();
        this.language();
    },
    methods: {
        // 言語情報
        language: function () {
            axios.get(config.json1)
                .then(response => {
                    data.language = response.data;
                    window_loading.lang();
                    /* ↑ レスポンスデータを保存 → 言語選択画面 */
                    flag.json1 = true;
                    flag.jsons = flag.json1 && flag.json2 && flag.json3;
                    /* ↑ 各ブロックの表示／非表示 */
                })
                .catch(error => {
                    $('body').removeAttr('data-state');
                    code.svg = build.title('active');
                    /* ↑ SVGの表示 → アニメーション実行 */
                    once.addClass = 'active';
                    /* ↑ アラートの通知 */
                    console.log(error);
                })
        },
        // コンテンツ内容
        contents: function () {
            axios.get(config.json2)
                .then(response => {
                    data.contents = response.data;
                    for (var int in data.contents) {
                        var category = data.contents[int].label;
                        (items_more.countFinish[category] ? null : items_more.countFinish[category] = data.contents[int].loadCount);
                    };
                    /* ↑ レスポンスデータを保存 → 各コンテンツのページ遷移時の件数を保存 */
                    flag.json2 = true;
                    flag.jsons = flag.json1 && flag.json2 && flag.json3;
                    /* ↑ 各ブロックの表示／非表示 */
                })
        },
        // プロフィール情報
        profile: function () {
            axios.get(config.json3)
                .then(response => {
                    data.profile = response.data;
                    flag.json3 = true;
                    flag.jsons = flag.json1 && flag.json2 && flag.json3;
                    /* ↑ レスポンスデータを保存 → 各ブロックの表示／非表示 */
                })
        },
    }
});

/* ======================================================================================= */

// アイテム追加読み込み //
var items_more = new Vue({
    data: {
        countFinish: {},
    },
    methods: {
        then: function (category, categoryIndex) {
            var placeInsert = `[${'data-insert'}="${category}"]`;
            var placeLoading = `${placeInsert} + ${'.contents_section_loading'}`;
            /* ↑ アイテム追加エリアのdata属性とその下のボタンの領域のセレクタを取得 */
            var countClick = data.contents[categoryIndex].clickCount;
            var countEnd = data.contents[categoryIndex].items.length;
            var countPrev = items_more.countFinish[category];
            /* ↑ 最初の個数・ボタンクリック時の出現の個数・アイテムのすべての個数を取得 */
            var countJudge = countPrev + countClick > countEnd;
            /* ↑ ボタンクリック時のすべての個数がアイテムのすべての個数以下か判定 */
            var countNext = (countJudge ? countEnd : countPrev + countClick);
            /* ↑ アイテムのすべての個数もしくはボタンクリック時のすべての個数を取得 */
            this.disable(placeLoading);
            /* this.image(countPrev, countNext, categoryIndex); */
            this.effect(category, countNext, placeInsert);
            this.enable(placeLoading);
        },
        effect: function (category, next, area) {
            items_more.$set(items_more.countFinish, category, next);
            items_more.countFinish = Object.assign({}, items_more.countFinish, { category });
            /* ↑ 改めてvueの変数に反映後の個数をセット */
            let timeout = setTimeout(function () {
                $(area).find('.transit-item').addClass('effected');
                clearTimeout(timeout);
            }, 300);
            loading_hidden();
            /* ↑ 遅延でCSSエフェクトを実行 → 画像の上のローディングアニメーションの停止 */
        },
        disable: function (loading) {
            $(loading).find('.more_btn').addClass('disable');
            $(loading).append(figure['loading2']);
            /* ↑ ボタンクリックを無効化 → 上にローディングアニメーション */
        },
        enable: function (loading) {
            $('.half_circles').css({ 'animation-play-state': 'paused' }).fadeOut(500, () => { $(this).remove(); });
            $(loading).find('.more_btn').removeClass('disable');
            /* ↑ ローディングアニメーションの停止 → ボタンの有効化 */
        },
        image: function (prev, next, categoryIndex) {
            var categoryImages = [];
            for (var i = 0, n = prev; n < next; i++, n++) {
                categoryImages[i] = new Image();
                var imageSrc = data.contents[categoryIndex].items[n].image;
                if (imageSrc) categoryImages[i].src = imageSrc;
            };

            categoryImages.forEach(function (image) {
                image.onload = function () {
                };
            });
        },
    },
});

/* ======================================================================================= */

// オーバーレイ時 //
var overlay_show = new Vue({
    el: '#detailField',
    methods: {
        // 出現
        open: function () {
            once.scrollTop = $(window).scrollTop();
            flag.overlay = true;
            /* ↑ 現在のスクロール位置を保存 → オーバーレイの表示 */

            $('body').attr('data-state', 'no-bar');
            setTimeout(function () {
                $('body').attr('data-state', 'detail');
                clearTimeout();
            }, 200);
            /* ↑ 奥のレイヤーのスクロールバーの非表示 → 手前のレイヤーのスクロールバーの表示 */
        },
        // 非表示
        close: function () {
            $('body').removeAttr('data-state');
            jump_prev();
            /* ↑ スクロールバーの出現 → オーバーレイ前のスクロール位置に戻す */

            flag.overlay = false;
            flag.overlayBtn = false;
            /* ↑ オーバーレイの非表示 → ボタンの非表示 */
        }
    },
});

/* ======================================================================================= */

// オーバーレイ時に表示するコンテンツ //
var contents_appear = new Vue({
    methods: {
        // 作品詳細
        detail: function (number, index) {
            code.overlay = preview.item(number, index);
            flag.overlayBtn = true;
            overlay_show.open();
            /* ↑ ソースの作成 → ボタンの表示 → オーバーレイの出現 */
        },
        // プロフィール詳細
        profile: function () {
            code.overlay = preview.profile();
            flag.overlayBtn = true;
            overlay_show.open();
            /* ↑ ソースの作成 → ボタンの表示 → オーバーレイの出現 */
        },
        // 動画・画像
        object: function (categoryIndex, itemIndex) {
            var object = data.contents[categoryIndex].items[itemIndex];
            switch (object.type) {
                case 'video':
                    code.overlay = preview.video(object.image, object.youtube);
                    break;
                case 'image':
                    code.overlay = preview.image(object.image, object.title);
                    break;
            };
            /* ↑ 動画もしくは画像のときのソースの作成  */

            overlay_show.open();
            /* ↑ オーバーレイの出現 */
        },
    },
});

/* ======================================================================================= */

// お問い合わせフォーム //
var form_action = new Vue({
    data: {
        inputData: null,
    },
    methods: {
        // 内容確認
        confirm: function () {
            this.inputData = $(".contact_form#form").serialize();
            code.overlay = form.confirm();
            /* ↑ 送信内容の格納 → 送信内容確認ソースの作成 */
            overlay_show.open();
            /* ↑ オーバーレイの出現 */
        },
        // 送信
        submit: function () {
            $('.overlay_detail_icon, .confirm_table, .confirm_btns').css({ 'opacity': 0.5, 'pointer-events': 'none' });
            $('.confirm_loading').css({ 'visibility': 'visible' });
            /* ↑ オーバーレイの各要素を半透明、クリック無効化 → ローディングの出現 */
            /*
            axios.post(config.postUrl, this.inputData)
            .then(response => {
                alert(response.status);
            })
            */
            $.ajax({
                url: config.postUrl,
                data: this.inputData,
                type: "POST",
                statusCode: {
                    0: function () {
                        form_action.success();
                    },
                    200: function () {
                        form_action.success();
                    }
                }
            });
            /* ↑ 非同期でGoogleフォームに送信 */
        },
        // デコード
        decode: function (target) {
            target = $(target).serialize();
            target = target.split('=').pop();
            /* ↑ 記入された情報をパラメータから取得 */

            while (target.indexOf('%0D%0A') > -1) {
                target = target.replace('%0D%0A', '<br>');
            };
            target = decodeURIComponent(target);
            /* ↑ 改行をHTMLコードに変換 → 日本語にデコード */

            return target;
        },
        // 送信完了
        success: function () {
            setTimeout(function () {
                $('.confirm_loading').html(form.success());
                $(".contact_form#form")[0].reset();
                /* ↑ 完了時のコードに差し替え → フォームの入力をリセット */
                clearTimeout();
            }, 1000);
        }
    }
});
