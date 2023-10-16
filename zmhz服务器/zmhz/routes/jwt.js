var express = require('express');
var router = express.Router();
var usermodel = require('../model/usersmodel')
var JWT = require('../utils/JWT')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send({
        ok: 1
    });
});
router.post('/', async function (req, res, next) {
    const { token } = req.body
    const newtoken=JWT.generate({//在响应头中设置新的token。配合相应拦截器重新计时过期时间
        _id:JWT.verify(token)._id,
        username:JWT.verify(token).username
      },'1d')
    if (JWT.verify(token)) {
        res.send({
            ok: 1,
            username:JWT.verify(token).username,
            newtoken:newtoken
        })
    }
    else{
        res.send({
            ok:0
        })
    }


});

module.exports = router;
