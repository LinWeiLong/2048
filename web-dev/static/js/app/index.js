define(function(require,exports,module){
	'use strict';
	var Blks = require("block.js");
	var Area = require('area.js');
	var posIndex = [0,0,0,0,
					0,0,0,0,
					0,0,0,0,
					0,0,0,0];
	var blkRecorder = new Array(16);
	Area.initArea(blkRecorder,posIndex);
	$(document).on("keyup",function(e){
		if(e.keyCode===38){
			Area.toTop(blkRecorder,posIndex);
		}
	});
});