$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 0.5em;'><br><b>" + VER_SR + "</b></color>")
    $('h3 .links').html(txt.Page[lang]);
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Lang[lang])

    $('body').on('click', '.links', function () {
        popLinks(lang2)
    })

})