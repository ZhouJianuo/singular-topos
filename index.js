const express = require('express');
const router = express.Router();
const app = express();

app.set('view engine', 'pug');

router.get('/', (req, res) => {
    res.render('home', {
        title: '玉衡杯数据库',
    });
});

router.get('/en', (req, res) => {
    res.render('home_en', {
        title: 'HomDGCat Database',
    });
});

app.use(express.static(__dirname + '/public'));
app.listen(8080);

module.exports = app;