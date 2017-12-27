let express = require('express');
let app = express();
app.listen(3000);

let ad = require('./home/ad');
//广告的接口
app.get('/api/ad', (req, res) => {
    res.send(ad);
});
let list = require('./home/list');
app.get('/api/list/:city/:page', (req, res) => {
    //需要传递城市,页码
    console.info(req.params.city);
    console.info(req.params.page);
    res.send(list);
});
//商户详情
let info = require('./detail/info');
app.get('/api/detail/info/:id', (req, res) => {
    res.send(info);
});
//评价列表
let comment = require('./detail/comment');
app.get('/api/detail/comment/:id/:page', (req, res) => {
    console.info(req.params.id);
    res.send(comment);

});