moduLoad.ready = function() {
	
	board.create();
	bind.newBoard();
	
}

board = {};
bind = {};

board.create = function() {
	
	ma = $("#master > .board").clone(false);
	$("#wrapper").append(ma);
	
	bind.slots();
	
}

bind.newBoard = function() {
	
	$("#newboard").click(function() {
		board.create();
		$("body").css("overflow","visible");
	});
	
}

bind.slots = function() {
	
	$(".slot").unbind("click");
	
	$(".slot").click(function() {
		bind.clickSlot(this);
	});
	
}

bind.clickSlot = function(obj) {
	
	if ($(obj).css("background-color") == "rgb(4, 6, 120)") {
		$(obj).css("background","none");
	} else {
		$(obj).css("background","#040678");
	}
}