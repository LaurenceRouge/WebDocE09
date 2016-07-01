(function() {

	var overlay = document.getElementById( 'overlay' ),
		overlayClose = overlay.querySelector( 'button' ),
		header = document.getElementById( 'header' ),
		switchBtnn = header.querySelector( 'button.slider-switch' ),
		toggleBtnn = function() {
			if( slideshow.isFullscreen ) {
				classie.add( switchBtnn, 'view-maxi' );
			}
			else {
				classie.remove( switchBtnn, 'view-maxi' );
			}
		},
		toggleCtrls = function() {
			if( !slideshow.isContent ) {
				classie.add( header, 'hide' );
			}
		},
		toggleCompleteCtrls = function() {
			if( !slideshow.isContent ) {
				classie.remove( header, 'hide' );
			}
		},
		slideshow = new DragSlideshow( document.getElementById( 'slideshow' ), { 
			// toggle between fullscreen and minimized slideshow
			onToggle : toggleBtnn,
			// toggle the main image and the content view
			onToggleContent : toggleCtrls,
			// toggle the main image and the content view (triggered after the animation ends)
			onToggleContentComplete : toggleCompleteCtrls
		}),
		toggleSlideshow = function() {
			slideshow.toggle();
			toggleBtnn();
		},
		closeOverlay = function() {
			classie.add( overlay, 'hide' );
		};

	// toggle between fullscreen and small slideshow
	switchBtnn.addEventListener( 'click', toggleSlideshow );
	// close overlay
	overlayClose.addEventListener( 'click', closeOverlay );

}());

var musics = document.querySelector( '.music' );
var navli = $('#navigation button');
var nav = document.querySelector('#navigation');
function showMusic() {
	navli.stop().animate({'marginLeft':'-100px'},500);
 
	navli.hover(
    	function () {
			$('#navigation > button',$(this)).stop().animate({'marginLeft':'-2px'},200);
    	},
    	function () {
			$('#navigation > button',$(this)).stop().animate({'marginLeft':'-85px'},200);
    	}
    );
};

nav.addEventListener( 'mouseover', showMusic );

/*
	API IN JS
*/

function movie_api(id_movie)
{
	$.getJSON(
	    'https://api.themoviedb.org/3/'+id_movie+'?api_key=f6dfa935f34f869f08db46fb66e4e8d1',
	    function( data )
	    {
	        $('.movies').append(data.original_title+' (');
	        $('.movies').append(data.release_date+')<br>');
	    }
	);
}

//Game of Thrones
// movie_title('tv/1399-game-of-thrones');

//Le Seigneur des Anneaux 
movie_api('movie/122-the-lord-of-the-rings-the-return-of-the-king');

//Shining
movie_api('movie/694-the-shining');

//Les Dents de la mer
movie_api('movie/578-jaws');

// Il était une fois dans l'Ouest
movie_api('movie/335-c-era-una-volta-il-west');

function music_api(music_name)
{
 $.getJSON(
     'http://ws.audioscrobbler.com/2.0/?method=track.search&track='+music_name+'&api_key=9a570236620ebd1bf04cdb140ce682d2&format=json',
     function( data )
     {
        var rep = data.results.trackmatches.track[0];
        var name       = rep.name;
        var artist     = rep.artist;
        var url        = rep.url;
        var streamable = rep.streamable;
        var image0_url = rep.image[0]['#text'];//caractère # illégal dans la forme .#text
        var image0_size = rep.image[0].size;

        $('.credits').append(name+' - ');
        $('.credits').append(artist+'<br>');
     }
 );
}
//James Bond Theme
music_api('James Bond Theme (From "Dr. No.")');

//Borat 
music_api('Mahalageasca');


//Alerte à Malibu
music_api('Baywatch');

//Breaking Bad
music_api('Negro Y Azul: The Ballad of Heisenberg');

//Pirates des Caraibes
music_api('Drink Up Me Hearties Yo Ho');

//Tamacun
music_api('Tamacun');

//Vivaldi
music_api('Four Seasons Concerto');

//Clair de Lune
music_api('Clair De Lune');

//Céline
music_api("Pour Que Tu M'Aimes Encore");

//Acamar
music_api('Acamar');

//Queen
music_api("Don't Stop Me Now");