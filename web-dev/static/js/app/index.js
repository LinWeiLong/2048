define(function(require,exports,module){
	'use strict';
	var blks = require("block.js");
	var posIndex = [0,0,0,0,
					0,0,0,0,
					0,0,0,0,
					0,0,0,0];
	blks.newBlk(blks.posCounter(posIndex));
});