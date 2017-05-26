var url = require("url"); //  url 统一资源定位符 where ---->uri 统一资源标识符 what
var fs = require("fs");
var queryString = require("querystring");
var locationAddress = "https:www.lifanhaodiao.com/video/chenghualiang.avi?name=李烦&age=18";

var fanxuliehua = url.parse(locationAddress); // url 反序列化

//console.log(url.format(fanxuliehua)) // url 地址序列化

var resolve1 = "/lifan/song/";
var resolve2 = "最近比较烦.mp3"

//console.log(url.resolve(resolve1,resolve2)) // url 地址的合并 

// console.log(url)
// console.log(fs)

// restful API http://www.gonglihaomei.com/name=gongli&:show/:eat/gongli=100; 动词 名词 

var obj ={
	name : "孙转转",
	age:19,
	job:"student"
}

var address = "name=孙转转&age=19&job=student"

//console.log(queryString.parse(address)) 
// 地址栏路径？之后的参数 反序列化（转换成对象）
//console.log(queryString.stringify(obj)) // 序列化
var lilinStudent = "李林同学简直美的令人发指" // 只能加密汉字转换 Unicode 
console.log(escape(lilinStudent)); //防止溢出 加密
var S = escape(lilinStudent);
console.log(unescape(S))

var add = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=海阔天空"
