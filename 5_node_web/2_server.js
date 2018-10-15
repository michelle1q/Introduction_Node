var fs=require('fs');

var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'COntent-Type':'text/plain'});
    if(req.url === '/file.txt'){
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    }else{
        res.end('Hello World');
    }
}).listen(3434);

console.log(process.env.PORT);

console.log('Server running!');