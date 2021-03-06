document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	document.querySelector("#playMp3").addEventListener("touchend", playMP3, false);
	document.querySelector("#playMp3Mild").addEventListener("touchend", playMp3Mild, false);
	document.querySelector("#playRemoteFile").addEventListener("touchend", playRemoteFile, false);
	
};

function playMP3() {
    var mp3URL = getMediaURL("sounds/button-1.mp3");
    var media = new Media(mp3URL, null, mediaError);
	media.setVolume(1.0);
    media.play();
}

function playMp3Mild() {
    var mp3URL = getMediaURL("sounds/button-1.mp3");
    var media = new Media(mp3URL, null, mediaError);
	media.setVolume(0.1);
    media.play();
}

function playRemoteFile() {
	var media = new Media("http://192.168.103.178:8080/AG723/reports/test.mp3");
	media.setVolume(0.1);
    media.play();
}

function getMediaURL(s) {
    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}

function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}