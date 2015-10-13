var playList = [
	{
		name: '01',
		src_mp3: '../audios/1.mp3',
		src_ogg: '../audios/1.ogg'
	},
	{
		name: '02',
		src_mp3: '../audios/2.mp3',
		src_ogg: '../audios/2.ogg'
	},
	{
		name: '03',
		src_mp3: '../audios/3.mp3',
		src_ogg: '../audios/3.ogg'
	},
	{
		name: '04',
		src_mp3: '../audios/4.mp3',
		src_ogg: '../audios/4.ogg'
	},
	{
		name: '05',
		src_mp3: '../audios/5.mp3',
		src_ogg: '../audios/5.ogg'
	},
	{
		name: '06',
		src_mp3: '../audios/6.mp3',
		src_ogg: '../audios/6.ogg'
	},
	{
		name: '07',
		src_mp3: '../audios/7.mp3',
		src_ogg: '../audios/7.ogg'
	},
	{
		name: '08',
		src_mp3: '../audios/8.mp3',
		src_ogg: '../audios/8.ogg'
	},
	{
		name: '09',
		src_mp3: '../audios/9.mp3',
		src_ogg: '../audios/9.ogg'
	},
	{
		name: '10',
		src_mp3: '../audios/10.mp3',
		src_ogg: '../audios/10.ogg'
	},
	{
		name: '11',
		src_mp3: '../audios/11.mp3',
		src_ogg: '../audios/11.ogg'
	},
	{
		name: '12',
		src_mp3: '../audios/12.mp3',
		src_ogg: '../audios/12.ogg'
	},
	{
		name: '13',
		src_mp3: '../audios/13.mp3',
		src_ogg: '../audios/13.ogg'
	},
];


jQuery(document).ready(function () {
	var player = new NativePlayer(playList);
});