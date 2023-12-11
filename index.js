const express = require('express');
const app = express();
var path = require ('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', {
        title: '玉衡杯数据库',
    });
});

app.get('/en', (req, res) => {
    res.render('home_en', {
        title: 'HomDGCat Database',
    });
});

app.get('/mons', (req, res) => {
    res.render('mons', {
        title: 'HomDGCat Database',
    });
});

app.use(express.static(path.join(__dirname, '/public')));
app.listen(8080);

module.exports = app;