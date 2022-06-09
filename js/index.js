$("#sourceList .audiosource").bind('click', function () {
	if ($(this).hasClass("radio-item_active")) {
		$("#audioElement").get(0).pause();
		$(this).removeClass("radio-item_active");
		return
	}

	$(".audiosource").removeClass("radio-item_active");
	$(this).addClass("radio-item_active");
	$("#audioElement").attr("src", $(this).data("src")).get(0).play();
});
