var fs = require('fs');

var rawSWFObject = fs.readFileSync(process.cwd() +'/node_modules/nw-swfobject/swfobject/swfobject/swfobject.js', 'utf8').toString();
eval(rawSWFObject);

swfobject.expressInstallPath = process.cwd() +'/node_modules/nw-swfobject/swfobject/swfobject/expressInstall.swf';

exports.swfobject = swfobject;