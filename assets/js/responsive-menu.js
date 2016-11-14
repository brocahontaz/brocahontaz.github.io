$(document).ready(function(){
	$(".menu-icon").click(function(){
		$(".responsive").toggle();
	});
	$(window).on("resize", function () {
		if ($(window).width() > 670) {
			$(".responsive").show();
		} else {
			$(".responsive").hide();
		}
	});
});
$(window).on("load", function () {
	if ($(window).width() > 670) {
		$(".responsive").show();
	} else {
		$(".responsive").hide();
	}
});