var maxtime=1000;

var evenDoubler=function(v,callbacks){

};

var evenDOublerSync = function(v){
    if(v%2){
        throw (new Error("Odd input"));
    }else{
        return (v*2);
    }
};

module.exports.evenDoubler=evenDoubler;
module.exports.evenDOublerSync=evenDOublerSync;

module.exports.foo="bar";