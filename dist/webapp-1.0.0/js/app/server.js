var http=require("http"),str='{"id":"123",name:"jack",arg:11111}',server=http.createServer(function(e,t){console.log("Request received."),t.writeHead(200,{"Content-Type":"text/plain",charset:"utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"}),t.write(str),t.end()});server.listen(1377,"localhost",function(){console.log("开始监听...")});