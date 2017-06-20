# nw-swfobject

![nw-swfobject version](http://img.shields.io/npm/v/nw-swfobject.svg)![swfobject version](https://img.shields.io/github/tag/swfobject/swfobject.svg?label=swfobject.js)


## Installation

This module is intended to be used in browserify and can therefor be installed
using npm:

```
npm install --save nw-swfobject
```

## Usage
```[javascript]
var swfobject = require('nw-swfobject').swfobject;

var el = document.getElementById("my-target-element");
swfobject.embedSWF(
	"myContent.swf", 
    el, 
    300, 
    120, 
    10,
    this.expressInstallPath,
	flashvarsObj, 
    parObj, 
    attObj, 
    callbackFn
);
```

## Versioning

This module follows the versioning scheme that the swfobject uses. The minor version is also used by the project. So swfobject 2.3 maps to 2.3.x on semver. The patch versions are used by this library to misc changes.

## License

Same as the swfobject's license, MIT