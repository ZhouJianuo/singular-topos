$(function () {

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.TITLE[lang]

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Load_Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_);
    $('h3 .tlsub').hide()
    $('h3 .links').render([
        {
            img: imgpre + 'images/menu.png',
            class: '_menu_'
        },
        {
            img: imgpre + 'images/translate.png',
            class: '_translate_'
        }
    ]);

    begin()

    function begin() {

        $('container').render({
            div: [
                {
                    h4: {'CH': '敬请期待', 'EN': 'Coming Soon'}[lang],
                    style: {
                        'font-weight': 'bold',
                        'text-align': 'center',
                        'font-size': '23px'
                    }
                }
            ],
            class: 'content'
        })

    }

})