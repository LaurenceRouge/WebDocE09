/*
*
* 			SETUP
*/


var player = document.querySelector('.player');
var audio  = document.querySelector('.music audio');


var current;
setInterval(function()
{ 
	current             = document.querySelector('.current');
	player.video        = current.querySelector('video');
 	player.video.play();

}, 1000);


document.addEventListener('keydown',function(e){
	switch (e.keyCode){
		// spacebar
		// case 32:
		// 	if(player.video.paused){
		// 		player.video.play();
		// 		audio.play();
		// 	}
		// 	else{
		// 	player.video.pause();
		// 	audio.pause();
		// 	}
		// 	break;
		// right and left keys
		case 37:
			player.video.muted=true;
			audio.muted=true;
			break;
		case 39:
			player.video.muted=true;
			audio.muted=true;
			break;
		// down and up key 
		case 40:
			player.video.muted=true;
			audio.muted=true;
			break;
		case 38:
			if(player.video.play()==false)
			{
				audio.pause();
			}
			else
			{
				if(audio.play()==false)
					player.video.muted=false;
				audio.muted=false;
			}
			break;
	}
});	

function listenMusic(id)
{
	player.video.muted=true;
	player.video.currentTime=0;
	audio.pause();

	switch (id){
		case 1:
			player.video.muted=false;
			audio.currentTime=0;
			audio.muted=true;
			break;
		case 2:
			audio = document.querySelector('.music2 audio');
			audio.currentTime=0;
			audio.play();
			audio.muted=false;
			break;
		case 3:
			audio = document.querySelector('.music3 audio');
			audio.currentTime=0;
			audio.play();
			audio.muted=false;
			break;
		case 4:
			player.video.muted=false;
			setInterval(function()
			{
				audio.currentTime=0;
				audio.pause();	
			},100);
			break;
		case 5:
			audio = document.querySelector('.music5 audio');
			audio.currentTime=0;
			audio.play();
			audio.muted=false;
			break;
		case 6:
			audio = document.querySelector('.music6 audio');
			audio.currentTime=0;
			audio.play();
			audio.muted=false;
			break;
		case 7:
			player.video.muted=false;
			audio.currentTime=0;
			audio.muted=true;
			break;
		case 8:
			audio = document.querySelector('.music8 audio');
			audio.currentTime=0;
			audio.play();
			audio.muted=false;
			break;
		case 9:
			audio = document.querySelector('.music9 audio');
			audio.currentTime=0;
			audio.play();
			audio.muted=false;
			break;
		case 10:
			player.video.muted=false;
			audio.currentTime=0;
			audio.muted=true;
			break;
		case 11:
			audio = document.querySelector('.music11 audio');
			audio.currentTime=0;
			audio.play();
			audio.muted=false;
			break;
		case 12:
			audio = document.querySelector('.music12 audio');
			audio.currentTime=0;
			audio.play();
			audio.muted=false;
			break;
		case 13:
			player.video.muted=false;
			audio.currentTime=0;
			audio.muted=true;
			break;
		case 14:
			audio = document.querySelector('.music14 audio');
			audio.currentTime=0;
			audio.play();
			audio.muted=false;
			break;
		case 15:
			audio = document.querySelector('.music15 audio');
			audio.currentTime=0;
			audio.play();
			audio.muted=false;
			break;
	}
}