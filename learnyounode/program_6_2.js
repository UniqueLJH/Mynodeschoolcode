var mymodule = require('./program_6_1.js');
mymodule(process.argv[2],process.argv[3],function (err,list){
    if (err) throw err;
    for (var i = 0;i<list.length;i++)
    {
        console.log(list[i]);
    }
});

