var _lang = 0
var DATE = new Date()
document.cookie.split(";").forEach(function (c) { 
    if ((c.includes('lang=')) && !(c.includes('session'))) {
        _lang = c.substring(c.indexOf('lang=') + 5, c.indexOf('lang=') + 7)
    }
});

var lang2 = ''

var lang_ = $('#LANG').val()
if (lang_ == 'RU') {
    lang_ = 'EN'
    lang2 = 'RU'
}
if (lang_) {
    var lang = lang_
    document.cookie = 'lang=' + lang_ + ';expires=' + new Date(DATE.getTime() + 8640000000).toUTCString() + ';path=/'
} else {
    var lang = (_lang === 'CH') ? 'CH' : 'EN';
}

if (lang2 != 'RU') lang2 = lang