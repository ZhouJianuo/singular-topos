$(function () {

    var lang_ = $('#LANG').val()
    if (!lang_) {
        var lang = 'CH'
    } else {
        var lang = lang_
    }

    if (lang == 'EN') {$('body').css('font-family', "'Segoe UI', sans-serif")}
    else {$('body').css('font-family', "'Microsoft YaHei', sans-serif")}

    $('h3 .title').html(txt.Title[lang])
    $('h3 .links').html(txt.Page[lang]);
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Lang[lang])

    $('body').on('click', '.links', function() {
        popLinks(lang)
    })

    

})