// -- NAYRA ARCHIVES SCRIPT -- //

document.addEventListener('DOMContentLoaded', function() {

launchArchivesPage();

setTimeout(() => {
  launchDir();
}, "500");

// ----- //

function launchArchivesPage() {
	document.getElementById("archives-page").innerHTML = `<h1><i class="fa-regular fa-box-arrow-down-magnifying-glass"></i>Teh Archive Area</h1><direc id="dir"><loadingtext class="err">This page failed to load properly. which could be either of these things;<br><b>A.</b> From a incomplete and/or broken script (...which Nayra* is aware of and is fixing)<br><b>B.</b> you are running a old browser which doesn't support JavaScript.<br><b>C.</b> JavaScript as a feature, isn't enabled in your browser at the moment.</loadingtext></direc>`;
}

function launchDir() {
	document.getElementById("dir").innerHTML = `
	<filetable>
	<ft>
	<d type="disabled_" disabled>Name of Upload</d>
	<b type="disabled_" disabled>Date Added</b>
	<c type="disabled_" disabled>Video ID</c>
	</ft>
	
	<ft>
	<d type="folder" id="zM-3Yed954c">Laffy - Future Houseeeee [FHR Fanmade]</d>
	<b type="disabled_">Aug 5, 2025</b>
	<c type="disabled_" videoid="zM-3Yed954c">zM-3Yed954c</c>
	</ft>
	
	<ft>
	<d type="folder" id="vlVh2qwyhqM">SKILE - Time Of A Life (Extended Mix)</d>
	<b type="disabled_">Jun 16, 2025</b>
	<c type="disabled_" videoid="vlVh2qwyhqM">vlVh2qwyhqM</c>
	</ft>
	
	<ft>
	<d type="folder" id="8d6fwedots0">BFDI:TPOT Real Official Canon to Everything</d>
	<b type="disabled_">Mar 9, 2025</b>
	<c type="disabled_" videoid="zM-3Yed954c">8d6fwedots0</c>
	</ft>
	</filetable>`;
	
	document.getElementById('zM-3Yed954c').addEventListener('click', function() {
	console.clear();
	console.log("Successfully loaded directory.");
	zM3Yed954c();
});
	document.getElementById('8d6fwedots0').addEventListener('click', function() {
	console.clear();
	console.log("Successfully loaded directory.");
	d6fwedots0();
});
	document.getElementById('vlVh2qwyhqM').addEventListener('click', function() {
	console.clear();
	console.log("Successfully loaded directory.");
	vlVh2qwyhqM();
});

}

/* Actually load the video archive pages */

let _link1 = "https://ia801008.us.archive.org/35/items/youtube-zM-3Yed954c/";
let _link2 = "https://ia601805.us.archive.org/6/items/youtube-8d6fwedots0/";
let _link3 = "";
	
function zM3Yed954c() {
	
	var time = "Aug 5, 2025";
	
	document.getElementById("dir").innerHTML = `
	<filetable>
	<ft>
	<d type="disabled_" disabled>Name of File</d>
	<b type="disabled_" disabled no-otherdata>Date Added</b>
	</ft>
	
	<ft>
	<d id="_back" target="_blank" no-otherdata><- Back</d>
	</ft>
	
	<ft>
	<d type="vid" id="zM-3Yed954c.video.mkv" target="_blank">zM-3Yed954c.video.mkv</d>
	<b type="disabled_" no-otherdata>` + time + `</b>
	</ft>
	
	<ft>
	<d type="img" id="zM-3Yed954c.thumb.webp" target="_blank">zM-3Yed954c.thumb.webp</d>
	<b type="disabled_" no-otherdata>` + time + `</b>
	</ft>
	
	<ft>
	<a type="json" href="` + _link1 + `zM-3Yed954c.info.json" target="_blank">zM-3Yed954c.info.json</a>
	<b type="disabled_" no-otherdata>` + time + `</b>
	</ft>
	</filetable>`;
	
	document.getElementById('_back').addEventListener('click', function() {
	console.clear();
	launchDir();
});

	document.getElementById('zM-3Yed954c.video.mkv').addEventListener('click', function() {
	console.clear();
	loadVideo1();
});

	document.getElementById('zM-3Yed954c.thumb.webp').addEventListener('click', function() {
	console.clear();
	loadThumb1();
});
}

/* - */

function d6fwedots0() {
	
	var time = "Mar 9, 2025";
	
	document.getElementById("dir").innerHTML = `
	<filetable>
	<ft>
	<d type="disabled_" disabled>Name of File</d>
	<b type="disabled_" disabled no-otherdata>Date Added</b>
	</ft>
	
	<ft>
	<d id="_back" target="_blank" no-otherdata><- Back</d>
	</ft>
	
	<ft>
	<d type="vid" id="8d6fwedots0.webm" target="_blank">8d6fwedots0.webm</d>
	<b type="disabled_" no-otherdata>` + time + `</b>
	</ft>
	
	<ft>
	<d type="img" id="8d6fwedots0.webp" target="_blank">8d6fwedots0.webp</d>
	<b type="disabled_" no-otherdata>` + time + `</b>
	</ft>
	
	<ft>
	<a type="json" href="` + _link2 + `8d6fwedots0.info.json" target="_blank">8d6fwedots0.info.json</a>
	<b type="disabled_" no-otherdata>` + time + `</b>
	</ft>
	</filetable>`;
	
	document.getElementById('_back').addEventListener('click', function() {
	console.clear();
	launchDir();
});

	document.getElementById('8d6fwedots0.webm').addEventListener('click', function() {
	console.clear();
	loadVideo2();
});

	document.getElementById('8d6fwedots0.webp').addEventListener('click', function() {
	console.clear();
	loadThumb2();
});
}

function vlVh2qwyhqM() {
	
	var time = "Jun 16, 2025";
	
	document.getElementById("dir").innerHTML = `
	<filetable>
	<ft>
	<d type="disabled_" disabled>Name of File</d>
	<b type="disabled_" disabled no-otherdata>Date Added</b>
	</ft>
	
	<ft>
	<d id="_back" target="_blank" no-otherdata><- Back</d>
	</ft>
	
	<ft>
	<d type="vid" id="SKILE%20-%20Time%20Of%20A%20Life%20%28Extended%20Mix%29.webm" target="_blank">SKILE%20-%20Time%20Of%20A%20Life%20%28Extended%20Mix%29.webm</d>
	<b type="disabled_" no-otherdata>` + time + `</b>
	</ft>
	
	<ft>
	<d type="img" id="maxresdefault.webp" target="_blank">8d6fwedots0.webp</d>
	<b type="disabled_" no-otherdata>` + time + `</b>
	</ft>
	</filetable>`;
	
	document.getElementById('_back').addEventListener('click', function() {
	console.clear();
	launchDir();
});

	document.getElementById('SKILE%20-%20Time%20Of%20A%20Life%20%28Extended%20Mix%29.webm').addEventListener('click', function() {
	console.clear();
	loadVideo3();
});

	document.getElementById('maxresdefault.webp').addEventListener('click', function() {
	console.clear();
	loadThumb3();
});
}

// VIDEO PLAYER //

function clearVideoPlayer() {
	document.getElementById("vp").innerHTML = '';
}

// PLAYER - LOAD VIDEOS + THUMBNAILS //

function loadVideo1() {
	clearVideoPlayer();
	document.getElementById("vp").innerHTML = `
	<button type="exit-player" id="_exit"></button>
	<video src="` + _link1 + `zM-3Yed954c.video.mkv" poster="` + _link1 + `zM-3Yed954c.thumb.webp" controls="" type="video/mkv"></video>`;
	document.getElementById('vp').classList.remove('hide');
	document.getElementById('_exit').addEventListener('click', function() {
	document.getElementById('vp').classList.add('hide');
	clearVideoPlayer();
	});
}

function loadThumb1() {
	clearVideoPlayer();
	document.getElementById("vp").innerHTML = `
	<button type="exit-player" id="_exit"></button>
	<img src="` + _link1 + `zM-3Yed954c.thumb.webp"/>`;
	document.getElementById('vp').classList.remove('hide');
	document.getElementById('_exit').addEventListener('click', function() {
	document.getElementById('vp').classList.add('hide');
	clearVideoPlayer();
	});
}

/* - */

function loadVideo2() {
	clearVideoPlayer();
	document.getElementById("vp").innerHTML = `
	<button type="exit-player" id="_exit"></button>
	<video src="` + _link2 + `8d6fwedots0.webm" poster="` + _link2 + `8d6fwedots0.webp" controls="" type="video/webm"></video>`;
	document.getElementById('vp').classList.remove('hide');
	document.getElementById('_exit').addEventListener('click', function() {
	document.getElementById('vp').classList.add('hide');
	clearVideoPlayer();
	});
}

function loadThumb2() {
	clearVideoPlayer();
	document.getElementById("vp").innerHTML = `
	<button type="exit-player" id="_exit"></button>
	<img src="` + _link2 + `8d6fwedots0.webp"/>`;
	document.getElementById('vp').classList.remove('hide');
	document.getElementById('_exit').addEventListener('click', function() {
	document.getElementById('vp').classList.add('hide');
	clearVideoPlayer();
	});
}

/* - */

function loadVideo3() {
	clearVideoPlayer();
	document.getElementById("vp").innerHTML = `
	<button type="exit-player" id="_exit"></button>
	<video src="https://web.archive.org/web/20250913104410if_/https://ytdlp.online/download/SKILE%20-%20Time%20Of%20A%20Life%20%28Extended%20Mix%29.webm" poster="https://web.archive.org/web/20250913104655if_/https://i.ytimg.com/vi_webp/vlVh2qwyhqM/maxresdefault.webp" controls="" type="video/webm"></video>`;
	document.getElementById('vp').classList.remove('hide');
	document.getElementById('_exit').addEventListener('click', function() {
	document.getElementById('vp').classList.add('hide');
	clearVideoPlayer();
	});
}

function loadThumb3() {
	clearVideoPlayer();
	document.getElementById("vp").innerHTML = `
	<button type="exit-player" id="_exit"></button>
	<img src="https://web.archive.org/web/20250913104655if_/https://i.ytimg.com/vi_webp/vlVh2qwyhqM/maxresdefault.webp"/>`;
	document.getElementById('vp').classList.remove('hide');
	document.getElementById('_exit').addEventListener('click', function() {
	document.getElementById('vp').classList.add('hide');
	clearVideoPlayer();
	});
}

});
