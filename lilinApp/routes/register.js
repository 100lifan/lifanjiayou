var express = require("express");
var router= express.Router();
var queryString = require("querystring");
var fs = require("fs");
router.post("/",function (req,res) {
	 // get 请求头 req  header
	 // post 请求体 req body
	 console.log("++++++++++")
	 console.log(req.body)
	 console.log("++++++++++")
	 var data = JSON.stringify(req.query);
	 fs.writeFile("register.json", data, 'utf-8', function(err){
	 		if(err){
	 			console.log('注册失败')
	 		}else{
	 			console.log('注册成功')
	 		}
	 })
	 res.render("register",{'title': '登录页面', userName:"账号",passWord:"密码"})
});

module.exports = router;