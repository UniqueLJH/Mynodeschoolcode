var fs = require('fs');
fs.readFile(process.argv[2],'utf-8',function (err,content){
    if (err) throw err;
    var num = content.split('\n').length-1;
    console.log(num);
}
           );
