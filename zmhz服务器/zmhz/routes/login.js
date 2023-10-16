var express = require('express');
var router = express.Router();
var usermodel=require('../model/usersmodel')
var JWT=require('../utils/JWT')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({
    ok: 1
  });
});
router.post('/',async function (req, res, next) {
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const {username,password}=req.body
    const data=await usermodel.find({username,password})
    // console.log(data)
    if(data.length===0){
        res.send({ok:0})
    }else{
        //cookie和session
        /* req.session.user=data[0]//登陆成功后设置session对象,存在内存中 */
        //jwt
        const token=JWT.generate({
            _id:data[0]._id,
            username:data[0].username
        },'1d')
        // res.header("Authorization",token)
        // res.setHeader('Authorization',token );
        res.setHeader('Authorization', `${token}`);
        res.send({ok:1,Authorization:token})
    }
});

module.exports = router;
