// var request=require('request');

// var s=request('http://www.pluralsight.com/');

// s.pipe(process.stdout);

var request =require('request');
var fs=require('fs');
var zlib=require('zlib');

// request('http://pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html'));
request('http://pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));
