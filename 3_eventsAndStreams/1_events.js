var EventEmitter=require('events').EventEmitter;

var getResource=function(c){
//instaintiate a new event emitter obj
var e=new EventEmitter();
process.nextTick(function(){
    //next tick we will gonna run this function 
    var count=0;
    e.emit('start');
    var t=setInterval(function(){
        //every 10 miliseconds -> run this function
        e.emit('data',++count);
        if(count===c){
            e.emit('end',count);
            clearInterval(t);
        }
    },10);
});
return(e);
};

var r=getResource(5);

r.on('start',function(){
    console.log("I've started!");
});

r.on('data',function(d){
    console.log(" I received data - > "+d);
});

r.on('end',function(t){
    console.log("I'm done with "+t+" data events.");
});