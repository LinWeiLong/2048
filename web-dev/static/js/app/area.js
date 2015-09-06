define(function(require,exports,module){
	'use strict';
	
	var blk = require("block.js");
	exports.initArea = function(blkRecorder,posIndex){
		if(!posIndex){
			posIndex = [0,0,0,0,
					0,0,0,0,
					0,0,0,0,
					0,0,0,0];
		}
		for(var i =0;i<2;i++){
			var pos = blk.randomPos(posIndex);
			blk.blkMark(pos,posIndex,blkRecorder);
		}	
	};
	exports.toTop = function(blkRecorder,posIndex){
		for(var i=0;i<posIndex.length;i++){
			if(blkRecorder[i]){
				if((i-4)>=0){
					//上方有空间
					//上方有没有方块的2种情况
					if(!blkRecorder[i-4]){
						var top = blkRecorder[i].css("top").replace("px","")*1-110;
						blkRecorder[i].animate({'top':top},500);
					}else{
						if(blkRecorder[i].text()===blkRecorder[i-4].text()){
							blkRecorder[i].remove();
							blkRecorder[i-4].remove();
							blk.newBlk(i-4,blkRecorder[i].text()*2);
						}
					}
				}else if((i-4)<0){
					//上面没空间，不动
				}
			}
		}
	};
});