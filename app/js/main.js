var playList = [
	{
		name: '01',
		src_mp3: 'audios/1.mp3',
		src_ogg: 'audios/1.ogg'
	},
	{
		name: '02',
		src_mp3: 'audios/2.mp3',
		src_ogg: 'audios/2.ogg'
	},
	{
		name: '03',
		src_mp3: 'audios/3.mp3',
		src_ogg: 'audios/3.ogg'
	}
];


jQuery(document).ready(function () {
	var player = new NativePlayer(playList);
});