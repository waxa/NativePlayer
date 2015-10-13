function NativePlayer ( playList ) {
	var np = this;

	this.playList = playList;
	this.indice = 0;

	this.player = document.getElementById('player');
	this.source_mp3 = document.createElement('source');
	this.source_ogg = document.createElement('source');

	this.source_ogg.setAttribute('src', playList[this.indice].src_ogg);
	this.source_ogg.setAttribute('type', 'audio/ogg');
	this.source_mp3.setAttribute('src', playList[this.indice].src_mp3);
	this.source_mp3.setAttribute('type', 'audio/mp3');

	this.player.appendChild(this.source_mp3);
	this.player.appendChild(this.source_ogg);

	this.onPlayClick = function () {
		np.player.play();
	};

	this.onPauseClick = function () {
		np.player.pause();	
	};

	this.onNextClick = function () {
		np.indice += 1;
		if (np.indice >= np.playList.length) 
			np.indice = 0;
		np.setNewSong();
	};

	this.onPrevClick = function () {
		np.indice -= 1;
		if (np.indice < 0) 
			np.indice = np.playList.length - 1;
		np.setNewSong();
	};

	this.setNewSong = function () {
		np.player.pause()
		this.source_ogg.setAttribute('src', playList[np.indice].src_ogg);
		this.source_mp3.setAttribute('src', playList[np.indice].src_mp3);
		np.player.load();
		np.player.oncanplaythrough = np.player.play();
	};

	this.playButton = document.getElementById('play');
	this.playButton.addEventListener('click', this.onPlayClick, false);

	this.stopButton = document.getElementById('stop');
	this.stopButton.addEventListener('click', this.onPauseClick, false);

	this.nextButton = document.getElementById('forward');
	this.nextButton.addEventListener('click', this.onNextClick, false);

	this.prevButton = document.getElementById('backward');
	this.prevButton.addEventListener('click', this.onPrevClick, false);

	console.log(this.player);
};