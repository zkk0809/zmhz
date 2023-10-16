var express = require('express');
var router = express.Router();
var usermodel=require('../model/usersmodel')

/* GET users listing. */
router.get('/',async function (req, res, next) {
  const data=await usermodel.find()
  res.send({
    ok: 1,
    data
  });
});
router.post('/',async function (req, res, next) {
  const { username, password,email,sex, age } = req.body
  await usermodel.create({
    username,password,email,sex,age
  })//执行数据库操作
  res.send({ ok: 1 })
});
router.delete('/:id',async (req,res)=>{
  // const {_id}=req.body
  // console.log(req.params)
  const _id=req.params.id
  const result=await usermodel.deleteOne({_id})
  console.log(result)
  if(result.acknowledged){
    res.send({ ok: 1 })
  }
  
})
router.put('/:id',async (req,res)=>{
  // const {_id}=req.body
  // console.log(req.params)
  const _id=req.params.id
  const { username, password,email,sex, age } = req.body
  const result=await usermodel.updateOne({_id},{
    username, password,email,sex, age
  })
  console.log(result)
  if(result.acknowledged){
    res.send({ ok: 1 })
  }
  
})
module.exports = router;
