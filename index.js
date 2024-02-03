const express = require('express');
const app = express();
const router = express.Router();
var path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    let result = {};
    let { game = '', lang = '' } = req.query;
    result.game = game;
    result.lang = lang;
    result.title = 'HomDGCat Database'
    res.render('home', result);
});

app.get('/en', (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.game = 'GI';
    result.lang = lang;
    result.title = 'HomDGCat Database'
    res.render('home', result);
});

app.get('/gi', (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.game = 'GI';
    result.lang = lang;
    result.title = 'HomDGCat Database'
    res.render('home', result);
});

app.get('/sr', (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.game = 'SR';
    result.lang = lang;
    result.title = 'HomDGCat Database'
    res.render('home', result);
});

app.get('/sr/monster/:id', async (req, res) => {
    let result = {};
    let { monster = '', level = '', lang = '', eg = '', hlg = '', def = '' } = req.query;
    result.lang = lang;
    result.monster = monster;
    result.id = req.params.id;
    result.level = level;
    result.eg = eg;
    result.hlg = hlg;
    result.def = def;
    result.imgpre = '../../'
    result.title = 'HomDGCat Database';
    res.render('mons', result);
});

app.get('/sr/monster', async (req, res) => {
    let result = {};
    let { monster = '', id = '', level = '', lang = '', eg = '', hlg = '', def = '' } = req.query;
    result.lang = lang;
    result.monster = monster;
    result.id = id;
    result.level = level;
    result.eg = eg;
    result.hlg = hlg;
    result.def = def;
    result.imgpre = '../'
    result.title = 'HomDGCat Database';
    res.render('mons', result);
});

app.get('/sr/chaos/:id', async (req, res) => {
    let result = {};
    let { lang = '', floor = '' } = req.query;
    result.lang = lang;
    result.cid = req.params.id;
    result.fid = floor;
    result.imgpre = '../../'
    result.title = 'HomDGCat Database';
    res.render('chaos', result);
});

app.get('/sr/chaos', async (req, res) => {
    let result = {};
    let { lang = '', id = '', floor = '' } = req.query;
    result.lang = lang;
    result.cid = id;
    result.fid = floor;
    result.imgpre = '../'
    result.title = 'HomDGCat Database';
    res.render('chaos', result);
});

app.get('/sr/fiction/:id', async (req, res) => {
    let result = {};
    let { lang = '', floor = '' } = req.query;
    result.lang = lang;
    result.cid = req.params.id;
    result.fid = floor;
    result.imgpre = '../../'
    result.title = 'HomDGCat Database';
    res.render('fiction', result);
});

app.get('/sr/fiction', async (req, res) => {
    let result = {};
    let { lang = '', id = '', floor = '' } = req.query;
    result.lang = lang;
    result.cid = id;
    result.fid = floor;
    result.imgpre = '../'
    result.title = 'HomDGCat Database';
    res.render('fiction', result);
});

app.get('/sr/ach/:id', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.id = req.params.id;
    result.imgpre = '../../'
    result.title = 'HomDGCat Database';
    res.render('achsr', result);
});

app.get('/sr/ach', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.id = id;
    result.imgpre = '../'
    result.title = 'HomDGCat Database';
    res.render('achsr', result);
});

app.get('/sr/load', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../'
    result.title = 'HomDGCat Database';
    res.render('loadsr', result);
});

app.get('/sr/blessing', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../'
    result.title = 'HomDGCat Database';
    res.render('blessing', result);
});

app.get('/sr/curio', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../'
    result.title = 'HomDGCat Database';
    res.render('curio', result);
});

app.get('/sr/char/:id', async (req, res) => {
    let result = {};
    let { lang = ''} = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    res.render('char', result);
});

app.get('/sr/char', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    res.render('char', result);
});

app.get('/gi/monster', async (req, res) => {
    let result = {};
    let { id = '', level = '', lang = '' } = req.query;
    result.url = req.originalUrl;
    result.monster = id;
    result.interval = level;
    result.lang = lang;
    result.imgpre = '../';
    res.render('computer', result);
})

app.get('/gi/abyss', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../';
    result.h = ''
    res.render('database', result);
});

app.get('/gi/abyss2', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../';
    result.h = '1'
    res.render('database', result);
});

app.get('/gi/char/:id', async (req, res) => {
    let result = {};
    let { lang = ''} = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    res.render('avatar', result);
});

app.get('/gi/char', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    res.render('avatar', result);
});

app.get('/gi/weapon/:id', async (req, res) => {
    let result = {};
    let { lang = ''} = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    res.render('avatar', result);
});

app.get('/gi/weapon', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    res.render('avatar', result);
});

app.get('/gi/artifact/:id', async (req, res) => {
    let result = {};
    let { lang = ''} = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    res.render('avatar', result);
});

app.get('/gi/artifact', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    res.render('avatar', result);
});

app.get('/gi/ach', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.id = id;
    result.imgpre = '../';
    res.render('ach', result);
});

app.get('/gi/shield', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../';
    res.render('shield', result);
});

app.get('/gi/load', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../';
    res.render('load', result);
});

const PORT = process.env.PORT | 8080
app.listen(PORT);

module.exports = app;