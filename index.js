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
    result.title = 'HomDGCat Wiki'
    res.render('home', result);
});

app.get('/en', (req, res) => {
    let result = {};
    let { game = '', lang = '' } = req.query;
    result.game = game;
    result.lang = lang;
    result.title = 'HomDGCat Wiki'
    res.render('home', result);
});

app.get('/gi', (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.game = 'GI';
    result.lang = lang;
    result.title = 'HomDGCat Wiki'
    res.render('home', result);
});

app.get('/sr', (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.game = 'SR';
    result.lang = lang;
    result.title = 'HomDGCat Wiki'
    res.render('home', result);
});

app.get('/sr/monster/', async (req, res) => {
    let result = {};
    let { monster = '', id = '', lv = '', lang = '', eg = '', hlg = '', def = '' } = req.query;
    result.lang = lang;
    result.monster = monster;
    result.id = id;
    result.level = lv;
    result.eg = eg;
    result.hlg = hlg;
    result.def = def;
    result.imgpre = '../../'
    result.title = 'HomDGCat Wiki';
    res.render('mons', result);
});

app.get('/sr/monster/:id', async (req, res) => {
    let result = {};
    let { monster = '', lv = '', lang = '', eg = '', hlg = '', def = '' } = req.query;
    result.lang = lang;
    result.monster = monster;
    result.id = req.params.id;
    result.level = lv;
    result.eg = eg;
    result.hlg = hlg;
    result.def = def;
    result.imgpre = '../../'
    result.title = 'HomDGCat Wiki';
    res.render('mons', result);
});

app.get('/sr/monster', async (req, res) => {
    let result = {};
    let { monster = '', id = '', lv = '', lang = '', eg = '', hlg = '', def = '' } = req.query;
    result.lang = lang;
    result.monster = monster;
    result.id = id;
    result.level = lv;
    result.eg = eg;
    result.hlg = hlg;
    result.def = def;
    result.imgpre = '../'
    result.title = 'HomDGCat Wiki';
    res.render('mons', result);
});

app.get('/sr/chaos/', async (req, res) => {
    let result = {};
    let { lang = '', id = '', floor = '' } = req.query;
    result.lang = lang;
    result.cid = id;
    result.fid = floor;
    result.imgpre = '../../'
    result.title = 'HomDGCat Wiki';
    res.render('chaos', result);
});

app.get('/sr/chaos/:id', async (req, res) => {
    let result = {};
    let { lang = '', floor = '' } = req.query;
    result.lang = lang;
    result.cid = req.params.id;
    result.fid = floor;
    result.imgpre = '../../'
    result.title = 'HomDGCat Wiki';
    res.render('chaos', result);
});

app.get('/sr/chaos', async (req, res) => {
    let result = {};
    let { lang = '', id = '', floor = '' } = req.query;
    result.lang = lang;
    result.cid = id;
    result.fid = floor;
    result.imgpre = '../'
    result.title = 'HomDGCat Wiki';
    res.render('chaos', result);
});

app.get('/sr/fiction/', async (req, res) => {
    let result = {};
    let { lang = '', id = '', floor = '' } = req.query;
    result.lang = lang;
    result.cid = id;
    result.fid = floor;
    result.imgpre = '../../'
    result.title = 'HomDGCat Wiki';
    res.render('fiction', result);
});

app.get('/sr/fiction/:id', async (req, res) => {
    let result = {};
    let { lang = '', floor = '' } = req.query;
    result.lang = lang;
    result.cid = req.params.id;
    result.fid = floor;
    result.imgpre = '../../'
    result.title = 'HomDGCat Wiki';
    res.render('fiction', result);
});

app.get('/sr/fiction', async (req, res) => {
    let result = {};
    let { lang = '', id = '', floor = '' } = req.query;
    result.lang = lang;
    result.cid = id;
    result.fid = floor;
    result.imgpre = '../'
    result.title = 'HomDGCat Wiki';
    res.render('fiction', result);
});

app.get('/sr/ach/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.id = id;
    result.imgpre = '../../'
    result.title = 'HomDGCat Wiki';
    res.render('achsr', result);
});

app.get('/sr/ach/:id', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.id = req.params.id;
    result.imgpre = '../../'
    result.title = 'HomDGCat Wiki';
    res.render('achsr', result);
});

app.get('/sr/ach', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.id = id;
    result.imgpre = '../'
    result.title = 'HomDGCat Wiki';
    res.render('achsr', result);
});

app.get('/sr/load/', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../../'
    result.title = 'HomDGCat Wiki';
    res.render('loadsr', result);
});

app.get('/sr/load', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../'
    result.title = 'HomDGCat Wiki';
    res.render('loadsr', result);
});

app.get('/sr/blessing/', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../../'
    result.title = 'HomDGCat Wiki';
    res.render('blessing', result);
});

app.get('/sr/blessing', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../'
    result.title = 'HomDGCat Wiki';
    res.render('blessing', result);
});

app.get('/sr/curio/', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../../'
    result.title = 'HomDGCat Wiki';
    res.render('curio', result);
});

app.get('/sr/curio', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../'
    result.title = 'HomDGCat Wiki';
    res.render('curio', result);
});

app.get('/sr/char/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('char', result);
});

app.get('/sr/char/:id', async (req, res) => {
    let result = {};
    let { lang = ''} = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('char', result);
});

app.get('/sr/char', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('char', result);
});

app.get('/sr/change/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 1
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('char', result);
});

app.get('/sr/change', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 1
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('char', result);
});

app.get('/sr/update/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 1
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('char', result);
});

app.get('/sr/update', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 1
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('char', result);
});

app.get('/sr/upcoming/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 2
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('char', result);
});

app.get('/sr/upcoming', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 2
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('char', result);
});

app.get('/sr/hidden/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 2
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('char', result);
});

app.get('/sr/hidden', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 2
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('char', result);
});

app.get('/sr/item', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('item', result);
});

app.get('/sr/item/:id', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('item', result);
});

app.get('/sr/items', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('item', result);
});

app.get('/sr/items/:id', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('item', result);
});

app.get('/sr/event/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('event', result);
});

app.get('/sr/event', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('event', result);
});

app.get('/sr/events/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('event', result);
});

app.get('/sr/events', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('event', result);
});

app.get('/sr/rec/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('rec', result);
});

app.get('/sr/rec', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('rec', result);
});

app.get('/sr/mission/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('mission', result);
});

app.get('/sr/mission', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('mission', result);
});

app.get('/sr/message/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    result.title = 'HomDGCat Wiki';
    res.render('message', result);
});


app.get('/sr/message', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    result.title = 'HomDGCat Wiki';
    res.render('message', result);
});

app.get('/gi/monster/', async (req, res) => {
    let result = {};
    let { id = '', level = '', lang = '' } = req.query;
    result.url = req.originalUrl;
    result.monster = id;
    result.interval = level;
    result.lang = lang;
    result.imgpre = '../../';
    res.render('computer', result);
})

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

app.get('/gi/monster/:id', async (req, res) => {
    let result = {};
    let { level = '', lang = '' } = req.query;
    result.url = req.originalUrl;
    result.monster = req.params.id;
    result.interval = level;
    result.lang = lang;
    result.imgpre = '../../';
    res.render('computer', result);
})

app.get('/gi/abyss/', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../../';
    result.h = ''
    res.render('database', result);
});

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

app.get('/gi/char/', async (req, res) => {
    let result = {};
    let { lang = ''} = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    res.render('avatar', result);
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

app.get('/gi/update/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 1
    result.imgpre = '../../';
    res.render('avatar', result);
});

app.get('/gi/update', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 1
    result.imgpre = '../';
    res.render('avatar', result);
});

app.get('/gi/change/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 1
    result.imgpre = '../../';
    res.render('avatar', result);
});

app.get('/gi/change', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.update = 1
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

app.get('/gi/ach/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.id = id;
    result.imgpre = '../../';
    res.render('ach', result);
});

app.get('/gi/ach', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.id = id;
    result.imgpre = '../';
    res.render('ach', result);
});

app.get('/gi/shield/', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../../';
    res.render('shield', result);
});

app.get('/gi/shield', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../';
    res.render('shield', result);
});

app.get('/gi/load/', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../../';
    res.render('load', result);
});

app.get('/gi/load', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../';
    res.render('load', result);
});

app.get('/gi/codex/', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../../';
    res.render('codex', result);
});

app.get('/gi/codex', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../';
    res.render('codex', result);
});

app.get('/gi/geo/', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../../';
    res.render('codex', result);
});

app.get('/gi/geo', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../';
    res.render('codex', result);
});

app.get('/gi/geography/', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../../';
    res.render('codex', result);
});

app.get('/gi/geography', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.imgpre = '../';
    res.render('codex', result);
});

app.get('/gi/item/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    res.render('item_gi', result);
});

app.get('/gi/item', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    res.render('item_gi', result);
});

app.get('/gi/item/:id', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    res.render('item_gi', result);
});

app.get('/gi/items/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    res.render('item_gi', result);
});

app.get('/gi/items', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    res.render('item_gi', result);
});

app.get('/gi/items/:id', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    res.render('item_gi', result);
});

app.get('/gi/event/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    res.render('event_gi', result);
});

app.get('/gi/event', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    res.render('event_gi', result);
});

app.get('/gi/events/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    res.render('event_gi', result);
});

app.get('/gi/events', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    res.render('event_gi', result);
});

app.get('/gi/gcg/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    res.render('gcg', result);
});

app.get('/gi/gcg', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    res.render('gcg', result);
});

app.get('/gi/gcg/:id', async (req, res) => {
    let result = {};
    let { lang = '' } = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    res.render('gcg', result);
});

app.get('/gi/quest/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    res.render('quest', result);
});

app.get('/gi/quest', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    res.render('quest', result);
});

app.get('/gi/quest/:id', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = req.params.id;
    result.imgpre = '../../';
    res.render('quest_2', result);
});

app.get('/gi/teapot/', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../../';
    res.render('teapot', result);
});

app.get('/gi/teapot', async (req, res) => {
    let result = {};
    let { lang = '', id = '' } = req.query;
    result.lang = lang;
    result.avid = id;
    result.imgpre = '../';
    res.render('teapot', result);
});

const PORT = process.env.PORT | 8080
app.listen(PORT);

module.exports = app;