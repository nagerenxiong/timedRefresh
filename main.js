var tabId=0;
$("#queding").click(function(){
	if(tabId==0){
		alert("请设置标签页");
		return;
	}
	var arrayFen=[$.trim($("#fen1").val()),$.trim($("#fen2").val()),$.trim($("#fen3").val()),$.trim($("#fen4").val()),$.trim($("#fen5").val())];
	var arrayMiao=[$.trim($("#miao1").val()),$.trim($("#miao2").val()),$.trim($("#miao3").val()),$.trim($("#miao4").val()),$.trim($("#miao5").val())];
	chrome.extension.sendRequest({"fen":arrayFen,"miao":arrayMiao}, function(res){
		
	})
})
$("#tabId").click(function(){
	chrome.tabs.getSelected(null, function(tab) {
		tabId=tab.id;
		chrome.extension.sendRequest({"tabId":tabId}, function(res){})
	});
})