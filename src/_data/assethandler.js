const fs = require('fs');

var cssFileName = "";
var jsFileName = "";

fs.readdirSync("./public/_includes/assets/css/").forEach(file => {
    cssFileName = file;
});

fs.readdirSync("./public/_includes/assets/js/").forEach(file => {
    console.log(file);
    jsFileName = file;
});

module.exports =
{
    cssFileName: cssFileName,
    jsFileName: jsFileName
}