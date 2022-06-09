      //
			// $(".audiosource").bind('click', function() {
			// 	$("#sourceList .audiosource").removeClass("selected");
			// 	$(this).addClass("selected");
			// 	$("#audioElement").attr("src", $(this).data("src")).get(0).play();
			// });
			// $("#playButton").bind('click', function() {
			// 	$("#audioElement").get(0).play();
      //
			// 	$("#sourceList .audiosource.selected").removeClass('paused');
			// });
			// $("#pauseButton").bind('click', function() {
			// 	$("#audioElement").get(0).pause();
			// 	$("#sourceList .audiosource.selected").addClass('paused');
			// });
			// $("#stopButton").bind('click', function() {
			// 	$("#audioElement").get(0).pause();
			// 	$("#audioElement").get(0).src = "";
			// 	$("#sourceList .audiosource").removeClass("selected").removeClass('paused');
			// });

let radioItem = document.querySelectorAll(".radio-item");
console.log(radioItem);
for (var i = 0; i < radioItem.length; i++) {
    radioItem[i].addEventListener("click", function(evt) {
    if (this.classList.contains("radio-item_active")) {
      this.classList.remove("radio-item_active")
    } else {
      for (var i = 0; i < radioItem.length; i++) {
        if (radioItem[i].classList.contains("radio-item_active")) {
        radioItem[i].classList.remove("radio-item_active")
      }
    };
      this.classList.add("radio-item_active")
    };
  })
}
