$(function () {

    var imgpre = $('#IMGPRE').val()

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_SR + "</b></color>")
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Home_Lang)
    $('h3 .lang').hide()
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

    $('body').on('click', '._menu_', function () {
        popLinks(lang3)
    })

    $('body').on('click', '._subtitle', function () {
        IS_SW += 1
        if (IS_SW % 4 == 1) {
            $('body').css('font-family', "'FW', sans-serif")
        } else if (IS_SW % 4 == 2) {
            $('body').css('font-family', "'SW', sans-serif")
        } else if (IS_SW % 4 == 3) {
            $('body').css('font-family', "'TW', sans-serif")
        } else {
            if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
            else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }
        }
    })

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