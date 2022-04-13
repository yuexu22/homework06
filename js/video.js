var video = document.querySelector('#player1');
/*var video= document.querySelector('#player1');*/
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay=false;
	video.loop= false;

});

document.querySelector('#play').addEventListener("click", function() {
	console.log('Play Video');
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log('I want to slow the video');
	video.playbackRate *= 0.95;
	console.log("spead is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log('speeding up');
	video.playbackRate /= 0.95;
	console.log('spead is', video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 15;
	if (video.currentTime>=video.duration)
		video.currentTime = 0;
	console.log("Video current time is", video.currentTime);
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Change Volume");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log("Mute");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}else {
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
})
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	document.querySelector("video").classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	document.querySelector("video").classList.remove("oldSchool");
})