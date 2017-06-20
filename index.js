var fs = require('fs');

var rawSWFObject = fs.readFileSync(process.cwd() +'/node_modules/nw-swfobject/swfobject.js', 'utf8').toString();
eval(rawSWFObject);

exports.swfobject = swfobject;