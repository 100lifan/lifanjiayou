var event = require("events"); //事件模块请求
// 事件发射器
var eventEmitter= new event.EventEmitter(); // 实例化事件模块方法

// commonJS 规范 .on("事件名"，callback)
// cmd .on("事件名"，callback) reactJS vueJS
// amd .on(["模块"]，callback) jquery angular1.0 TypeScript 2.0 
// 订阅者模式 单例模式 
// 报刊收到订阅需求，把报纸发送给你
eventEmitter.once("lilin",function(arg) {
	 console.log(arg);
}) // 事件名
// 我去订一份 青少年文摘
eventEmitter.emit("lilin","陈雪莲正在看射雕英雄传")
eventEmitter.emit("lilin","李林要吃鸡蛋糕")


//on("seeFilm","某某正在看电影")