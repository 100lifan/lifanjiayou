var express = require("express");
var router= express.Router();

router.get("/",function (req,res) {
	 res.render("login",{'title': '登录页面', userName:"账号",passWord:"密码"})
});

module.exports = router;