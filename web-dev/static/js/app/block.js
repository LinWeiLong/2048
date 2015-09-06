define(function(require,exports,module){
	'use strict';
	var $ = require("jquery.1.11.3.min.js");
	exports.newBlk = function(pos){
		var val = Math.random()>0.5?2:4;
		var posIndex = pos;
		var blk = $("<div>",{"class":"blk blk"+val}).text(val);
		var top = 10+110*(parseInt(posIndex/4));
		var left = 10+110*(Math.ceil(posIndex%4));
		return blk.appendTo($(".mainCont")).css({
			"top":top+"px",
			"left":left+"px"
		});
	};
	exports.randomPos = function(array){
		var tempPos = Math.ceil(Math.random()*100/6.26)-1;
		if(array[tempPos]===0){
			return tempPos;
		}else{
			this.randomPos(array);
		}
	};
	exports.blkMark = function(index,posIndex,objArray){
			posIndex[index] = 1;
			objArray[index] = this.newBlk(index);
	};
});