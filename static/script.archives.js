// -- NAYRA ARCHIVES SCRIPT -- //

document.addEventListener('DOMContentLoaded', function() {
// -- //

launchArchivesPage();

function launchArchivesPage() {
	document.getElementById("archives-page").innerHTML = `<h1 id="backbtn"><i class="fa-regular fa-box-arrow-down-magnifying-glass"></i>Teh Archive Area</h1>
	<archivebox id="ab">
	<gridbx id="ab-m">
	</gridbx>
	</archivebox>`;
	launchMainDir();
}

// -- //

document.getElementById('backbtn').addEventListener('click', function() {
	launchMainDir();
});

// -- //

function launchMainDir() {
	var fhr = `uQugV_TUsvzmn6hMjIpZYvJ6Yaxut9DfZCwET4EdYEYTuFPjkWPTA5NSUUxUzZqd-HpRiLimhwg`;
	var hsc = `-9YlFYwYhpwuNhM1VWkpCtRqrueu-etGhlVCpiOd_Z2UcT1rXIGuMiMnC5QBPKU5e3y7bO3ebQ`;
	
	// - //
	
	let video095 = `https://ia801008.us.archive.org/35/items/youtube-zM-3Yed954c/`;
	let video310 = `https://ia800806.us.archive.org/33/items/youtube-RAus7ZH4VDI/`;
	
	// - //
	
	document.getElementById("ab-m").innerHTML = `<!-- start -->
	<a type="item" id="">
	<imgbox>
	<img src="` + video095 + `zM-3Yed954c.thumb.webp">
	</imgbox>
	<detailsbox>
    <h1>Laffy - Future Houseeeee [FHR Fanmade]</h1>
	<channelnametext><ch-icon ch="futurehousefanmades"></ch-icon><p>Future House Fanmades</p></channelnametext>
	<additionaltext><p>Video</p><dot></dot><p>Sep 5, 2025</p></additionaltext>
    </detailsbox>
	</a>
		
	<a type="item">
	<imgbox>
	<img src="` + video310 + `RAus7ZH4VDI.thumb.webp">
	</imgbox>
	<detailsbox>
	<h1>Synical - Balance [FHR Fanmade]</h1>
	<channelnametext><ch-icon ch="futurehousefanmades"></ch-icon><p>Future House Fanmades</p></channelnametext>
	<additionaltext><p>Video</p><dot></dot><p>Mar 10, 2025</p></additionaltext>
	<detailsbox>
	</a>
	<!-- end -->`;

}

// -- //

document.querySelector('#zM-3Yed954c')?.addEventListener('click', function() {
		document.getElementById("archives-page").innerHTML = `<!-- start -->
<h1 id="backbtn"><i class="fa-regular fa-box-arrow-down-magnifying-glass"></i>Teh Archive Area</h1>`;
});

});
