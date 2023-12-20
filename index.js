const express = require('express');
const app = express();
const router = express.Router();
var path = require('path');

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

app.get('/mons', async (req, res) => {
    let result = {};
    let { monster = '', level = '', lang = '', eg = '', hlg = '', def = '' } = req.query;
    result.lang = lang;
    result.monster = monster;
    result.level = level;
    result.eg = eg;
    result.hlg = hlg;
    result.def = def;
    result.title = 'HomDGCat Database';
    res.render('mons', result);
});

app.get('/chaos', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.title = 'HomDGCat Database';
    res.render('chaos', result);
});


app.get('/fiction', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.title = 'HomDGCat Database';
    res.render('fiction', result);
});


app.use(express.static(path.join(__dirname, '/public')));

const PORT = process.env.PORT | 8080
app.listen(PORT);

module.exports = app;