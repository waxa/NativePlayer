'use strict';

function NativePlayer ( playList ) {
	var np = this;

	this.playList = playList;
	this.indice = 0;

	this.player = document.getElementById('player');
	this.songtitle = document.getElementById('songtitle');

	this.source_ogg = document.createElement('source');
	this.source_mp3 = document.createElement('source');

	this.source_ogg.setAttribute('type', 'audio/ogg');
	this.source_mp3.setAttribute('type', 'audio/mp3');

	this.player.appendChild(this.source_mp3);
	this.player.appendChild(this.source_ogg);



	this.onPlayClick = function () {
		np.player.play();
		np.playButton.style.display = 'none';
		np.pauseButton.style.display = 'inline-block';
	};

	this.onPauseClick = function () {
		np.player.pause();
		np.pauseButton.style.display = 'none';
		np.playButton.style.display = 'inline-block';
	};

	this.onStopClick = function () {
		np.player.pause();
		np.player.load();
		np.pauseButton.style.display = 'none';
		np.playButton.style.display = 'inline-block';
	};

	this.onPrevClick = function () {
		np.indice -= 1;
		if (np.indice < 0) 
			np.indice = np.playList.length - 1;
		np.loadNewSong();
	};

	this.onNextClick = function () {
		np.indice += 1;
		if (np.indice >= np.playList.length) 
			np.indice = 0;
		np.loadNewSong();
	};

	this.loadNewSong = function () {
		np.player.pause()
		this.source_ogg.setAttribute('src', np.playList[np.indice].src_ogg);
		this.source_mp3.setAttribute('src', np.playList[np.indice].src_mp3);
		np.player.load();
		np.songtitle.innerHTML = np.playList[np.indice].name;
		np.player.oncanplay = np.onPlayClick();
	};

	this.onProgress = function () {
		var position = np.player.currentTime;
		position = position / np.player.duration;
		position = position * 100;
		np.progressBar.style.width = (position + '%');
	}

	this.onProgressClick = function (e) {
		console.log("click");
		var percent = e.pageX - jQuery('#playprogress > div').offset().left;
		percent = (percent / jQuery('#playprogress > div').width()) * 100;
		if ( percent > 100 ) percent = 100;
		if ( percent < 0 ) percent = 0;
		np.progressBar.style.width = (percent + '%');
		var position = (np.player.duration / 100) * percent;
		np.player.currentTime = position;
	};

	this.onListClick = function () {
		if (np.songList.style.display == 'none'){
			np.songList.style.display = 'block';
		} else {
			np.songList.style.display = 'none';
		}
	};

	this.createSongList = function () {
		var songInnerList = "";
		np.playList.forEach(function(element, index, array) {
			songInnerList += '<li>' + element.name + '</li>';
		});
		return songInnerList;
	};

	this.setUpSongList = function () {
		jQuery('#songlist ul').children().each(function (index, element) {
			var indice2 = index;
			jQuery(this).on('click', function () {
				np.indice = indice2;
				np.loadNewSong();
				np.onListClick();
			})
		});
	};

	this.onVolumeChange = function (newVol) {
		np.player.volume = newVol;
	};

	this.onVolumeRangeChange = function () {
		var vol = jQuery(np.volumeRange).val() / 100;
		np.onVolumeChange(vol);
	};

	this.onMuteClick = function () {
		if (np.volume.classList.contains('mute')){
			np.volume.classList.remove('mute');
			np.player.muted = false;
		} else {
			np.volume.classList.add('mute');
			np.player.muted = true;
		}
	};

	this.songList = document.getElementById('songlist');
	this.songList.style.display = 'none';
	this.listButton = document.getElementById('playlist');
	this.listButton.addEventListener('click', this.onListClick, false);

	this.playButton = document.getElementById('playsong');
	this.playButton.addEventListener('click', this.onPlayClick, false);

	this.pauseButton = document.getElementById('pausesong');
	this.pauseButton.addEventListener('click', this.onPauseClick, false);

	this.stopButton = document.getElementById('stopsong');
	this.stopButton.addEventListener('click', this.onStopClick, false);

	this.prevButton = document.getElementById('prevsong');
	this.prevButton.addEventListener('click', this.onPrevClick, false);

	this.nextButton = document.getElementById('nextsong');
	this.nextButton.addEventListener('click', this.onNextClick, false);

	this.progressBar = document.getElementsByClassName('bar')[0];
	this.progressBar.style.width = '0%';

	this.volume = document.getElementById('volume');
	this.volume.addEventListener('click', this.onMuteClick, false);

	this.volumeRange = jQuery('#sound-player input');
	jQuery(this.volumeRange).on('change mousemove', this.onVolumeRangeChange);

	jQuery('#playprogress > div').on('click', this.onProgressClick);

	this.player.ontimeupdate = this.onProgress;
	this.player.onended = this.onNextClick;

	this.songLinks = jQuery('#songlist u');
	jQuery(this.songLinks).html(this.createSongList());
	this.setUpSongList();

	this.loadNewSong();
};