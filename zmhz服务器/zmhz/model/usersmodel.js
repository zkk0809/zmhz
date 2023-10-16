const mongoose=require("mongoose")
const usertype={
    username:String,
    password:String,
    email:String,
    sex:String,
    age:Number
}
const usermodel=mongoose.model('user',new mongoose.Schema(usertype))//创建user模型，就会新建一个users集合
module.exports=usermodel