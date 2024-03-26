var cookie_lang = "EN"
document.cookie.split(";").forEach(function (c) { 
    if ((c.includes('lang=')) && !(c.includes('session'))) {
        cookie_lang = c.substring(c.indexOf('lang=') + 5, c.indexOf('lang=') + 7)
    }
});
var AVAILABLE_LANG = ["CH", "EN", "RU", "JP", "KR", "DE", "FR", "ES", "PT"]
var is_ru = 0
var param_lang = $('#LANG').val().toUpperCase()
if (param_lang == "SP") param_lang = "ES"
var store_lang = param_lang
if (!AVAILABLE_LANG.includes(store_lang)) {
    store_lang = "EN"
}
var lang3 = "EN"
if (param_lang) {
    var DATE = new Date()
    document.cookie = 'lang=' + store_lang + ';expires=' + new Date(DATE.getTime() + 8640000000).toUTCString() + ';path=/'
    lang3 = store_lang
} else {
    lang3 = cookie_lang
}
var lang2 = lang3
if ((lang2 != "CH") && (lang2 != "EN") && (lang2 != "RU")) lang2 = "EN"
var lang = lang2
if (lang == "RU") lang = "EN"

// lang3 = actual language
// lang2 = if not CH EN RU then set to EN
// lang = if not CH EN then set to EN