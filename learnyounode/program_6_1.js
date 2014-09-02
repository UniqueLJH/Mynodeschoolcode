var fs = require('fs')
module.exports = function (pathname,existion,callback){
    //console.log(pathname,existion);
    var files = [];
    fs.readdir(pathname,function (err,list){
        if (err) return callback(err);
        var i;
        for (i=0;i<list.length;i++)
        {
             //console.log(list[i]);
            if (list[i].split('.')[1] == existion){
                //console.log(list[i]);
                files.push(list[i]);
            }
        }
        return callback(null,files);
});
}
