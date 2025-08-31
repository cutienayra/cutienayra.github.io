// ==UserScript==
// @name         FurAffinity[dot]net Tweaker~
// @version      v2
// @description  Making the best out of FurAffinity (aka. Furaffinity[dot]net) :3
// @author       Nayra* aka. SoftyBnuny
// @match        *://*.furaffinity.net/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

// Main CSS (All pages has to apply this CSS)

function mainCSSload() {
GM_addStyle ( `
.news-block,
[title="FA+"], [href="https://shop.furaffinity.net"][title="Shop"],
[title="Shop"], div#footer, .leaderboardAd, .sidebarAds, .lileft[tabindex="0"],
.lileft>.top-heading[href="#"], section.gallery-section:nth-child(3),
section.gallery-section:nth-child(4), section.gallery-section:nth-child(5), site-banner {
display: none !important;
}

#header.has-adminmessage {
  height: 50px!important;
  padding: 0px!important;
  margin: 0px!important;
}
` );

setTimeout(function(){
console.clear();
console.log(`♡ Thank you for using the FurAffinity[dot]net Tweaker ♡

If there is any bugs involving this project, feel free to let Nayra* or SoftyBnuny know via. Discord!
`);
},5000);
}

// Individual page load (Important)

if (document.location.pathname.indexOf("/user/") != -1 || document.location.pathname.indexOf("/gallery/") != -1 || document.location.pathname.indexOf("/scraps/") != -1 || document.location.pathname.indexOf("/favorites/") != -1 || document.location.pathname.indexOf("/journals/") != -1 || document.location.pathname.indexOf("/commissions/") != -1 || document.location.pathname.indexOf("/stats/") != -1) {
mainCSSload();
GM_addStyle ( `
site-banner {
display: block !important;
}
userpage-nav-header {
margin-top: -100px !important;
}
`);
}

else {
mainCSSload();
}
})();
