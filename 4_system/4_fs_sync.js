var fs=require('fs');

if(fs.existsSync('tem')){
    console.log('Directory exists , removing...');
    if(fs.existsSync('tem/newz.txt')){
        fs.unlinkSync('tem/newz.txt');
    }
    fs.rmdirSync('tem');
}

fs.mkdir('tem',function(err){
    fs.exists('tem',function(exists){
        if(exists){
            process.chdir('tem');
            fs.writeFile('test.txt','THis is some test text for the file ',function(err){
                fs.rename('test.txt','newz.txt',function(err){
                    fs.stat('newz.txt',function(err,stat){
                        console.log('File has size : '+stat.size+' bytes');
                        fs.readFile('newz.txt',function(err,data){
                            console.log('File contents : '+data.toString());
                        })
                    })
                })
            })
        }
    })
})