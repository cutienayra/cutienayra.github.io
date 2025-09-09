// ==UserScript==
// @name         FurAffinity[dot]net Tweaker~
// @version      2.02
// @description  Making the best out of FurAffinity (aka. Furaffinity[dot]net) :3
// @author       Nayra* aka. SoftyBnuny
// @match        *://*.furaffinity.net/*
// @include      *://*.furaffinity.net/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?domain=furarchiver.net
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

// Main CSS (All pages has to apply this CSS)

function mainCSSload() {
GM_addStyle ( `
[title="FA+"], [href="https://shop.furaffinity.net"][title="Shop"],
[title="Shop"], div#footer, .leaderboardAd, .rectangleAd, .tallRectangleAd, .sidebarAds, .lileft[tabindex="0"],
.lileft>.top-heading[href="#"], site-banner, #c-videoAd--outer, .userpage-section-right > .c-shoutPaginationForm:nth-child(3) {
display: none !important;
}

#header.has-adminmessage {
  height: 50px;
  padding: 0px;
  margin: 0px;
}
#ddmenu {
border-bottom: hidden;
}
.news-block {
position: fixed;
}
` );
consoleMsg();
}

function consoleMsg() {
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
