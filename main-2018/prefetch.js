function prefetch() {
	var srcs = [
		'img/Facebook_Profile_Pictures_2018/Emily.png',
		'img/Facebook_Profile_Pictures_2018/Aneri.png',
		'img/Facebook_Profile_Pictures_2018/Samantha.png',
		'img/Facebook_Profile_Pictures_2018/Henry.png',
		'img/Facebook_Profile_Pictures_2018/Tiffany.png',
		'img/Facebook_Profile_Pictures_2018/Nicole.png',
		'img/Facebook_Profile_Pictures_2018/Rahul.png',
		'img/Facebook_Profile_Pictures_2018/Ryan.png',
		'img/Facebook_Profile_Pictures_2018/Anita.png',
		'img/Facebook_Profile_Pictures_2018/Riley.png',
		'img/Facebook_Profile_Pictures_2018/Natasha.png',
		'img/Facebook_Profile_Pictures_2018/Andy.png',
		'img/Facebook_Profile_Pictures_2018/Hanad.png',
		'img/Facebook_Profile_Pictures_2018/Audi.png',
		'img/Facebook_Profile_Pictures_2018/Ruban.png',
		'img/Facebook_Profile_Pictures_2018/Yash.png',
		'img/Facebook_Profile_Pictures_2018/Hamilton.png',
		'img/Facebook_Profile_Pictures_2018/Anshul.png',
		'img/Facebook_Profile_Pictures_2018/Mitchell.png',
		'img/Facebook_Profile_Pictures_2018/Martin.png',
	];
	for(var i = 0; i < 20; i++) {
		var member = new Image();
		member.src = srcs[i];
	}
}

