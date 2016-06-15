var fag;
var tabid;
chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
	    if(req.tabId){
	    	tabid=req.tabId;
	    	return;
	    }
		clearInterval(fag);
		var timer = setInterval(function() {
			var date = new Date();
			var minute = date.getMinutes(); //分
			var second = date.getSeconds(); //秒
			console.log(minute);
			console.log(second);
			for (var i = 0; i < req["fen"].length; i++) {
				var fen = req["fen"][i];
				if (minute.toString()== fen) {
					chrome.tabs.reload(tabid);
				}
			}
			for (var i = 0; i < req["miao"].length; i++) {
				var miao = req["miao"][i];
				if (second.toString()== miao) {
					chrome.tabs.reload(tabid);
				}
			}
			fag = timer;
		}, 1000);
})