var http = require('http');
var ip = require('ip');
var querystring = require('querystring');
var port = 8080;
var server = http.createServer().listen(port);



server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
				console.log(req.method);
    console.log(req.headers);
    console.log(req.url);
    }
 if (req.method == 'GET') {
        var body = '';
				console.log(req.method);
    console.log(req.headers);
    console.log(req.url);
    }
    req.on('data', function (data) {
        body += data;
    });
	sleep(10000, function() {
   // executes after one second, and blocks the thread
});
	
    req.on('end', function () {
        var post = querystring.parse(body);
        console.log(post);
res.writeHead(200, {
  'Content-Type': 'application/json',
  'X-Powered-By': 'bacon'
});
        var j={"success":"okkkkk","class":"awethiyagusome"};
var dq='"';
var json="{";
var last=Object.keys(j).length;
var count=0;
for(x in j)
{
json += dq+x+dq+":"+dq+j[x]+dq;
count++;
if(count<last)
   json +=",";
}
json+="}";
//document.write(json);
		
		
		
		res.end(json);

    });
	
	
	
	
});
function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}
console.log('Listening on http://'+ip.address()+':'+port);
