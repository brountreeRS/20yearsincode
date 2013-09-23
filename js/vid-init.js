$.browser.device = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

$(function(){
	//vertical center align hero text
	function resize(){
		var $tagline = $('.huge');
		var $taglineHeight = $tagline.height();
		$tagline.css('marginTop', -$taglineHeight/2 + 10);
	}
	resize();
	$(window).bind('resize', resize);
	
	//for mobile/tablet - hide video and use image
	if( $.browser.device ) {
		$('#video_1').hide();
		$('#Video').append('<img src="//static.divisionof.com/v3/img/skyline.jpg" alt="" id="DeviceImg"/>');
	}
	
	//when video ends
	var myPlayer = videojs("video_1"), 
		videoContainer = $('#video_1');
		
	var videoFade = function(){
	  var myPlayer = this;
	  videoContainer.fadeOut(500, function(){
		myPlayer.currentTime(0);
		videoContainer.fadeIn(800, function(){
			myPlayer.play();
		});
      });
	};
	myPlayer.on("ended", videoFade);
	
});