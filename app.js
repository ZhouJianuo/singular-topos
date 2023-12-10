const express = require('express');

const app = express();

app.set('view engine', 'pug');

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

app.use(express.static(__dirname + '/public'));
app.listen(8080);