var maxTime=1000;

//If input is even => double it
//If input odd => error
//call takes random amount of time <1s

var evenDoubler=function(v,callback){
 var waitTime=Math.floor(Math.random()*(maxTime+1));
 ////calculating how much time to wait

 if(v%2){
     setTimeout(function(){
         callback(new Error("odd input"));  ////if it is odd  => throw error
     },waitTime);
 }else{
     setTimeout(function(){
         callback(null,v*2,waitTime);  ///if it is not odd  = > X2 + the time waited
     },waitTime);
 }
};

var count = 0;
// var handleResults=function(err,results,time){
    for(var i=0;i<100;i++){
    evenDoubler(i,function(err,results,time){
    if(err){
        console.log("ERROR: "+err.message);
    }else{
        console.log("The results are: "+results+ " ( "+ time+ " ms");
    }
    if(++count ===10 ){
        console.log("Done!");
    }
})}
// };

// for(var i=0;i<100;i++){
//     console.log("Calling evenDoubler for value : "+i);
//     evenDoubler(i,handleResults);
// };

// evenDoubler(2,handleResults);
// evenDoubler(34,handleResults);
// evenDoubler(13,handleResults);

//param and the callback function
//async -- when it's gonna come

console.log("------------");