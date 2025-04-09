// ==UserScript==
// @name         FurAffinity Tweaker~
// @version      v1.3
// @description  Making the best out of FurAffinity (aka. Furaffinity[dot]net) :3
// @author       Nayra* & SoftyBnuny
// @match        https://www.furaffinity.net/*
// @match        https://furaffinity.net/*
// @match        https://www.sfw.furaffinity.net/*
// @match        https://sfw.furaffinity.net/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

function commitUserProfileCSSTweak() {
    GM_addStyle ( `
.news-block, [title="FA+"], [href="https://shop.furaffinity.net"][title="Shop"], [title="Shop"], div#footer, .leaderboardAd, .sidebarAds, .lileft[tabindex="0"], .lileft>.top-heading[href="#"], section.gallery-section:nth-child(3), section.gallery-section:nth-child(4), section.gallery-section:nth-child(5) {
  display: none !important;
}

#header.has-adminmessage {
  height: 50px!important;
  padding: 0px!important;
  margin: 0px!important;
}
` );
}

if (window.location.pathname == '/') {
GM_addStyle ( `
.news-block, [title="FA+"], [href="https://shop.furaffinity.net"][title="Shop"], [title="Shop"], div#footer, site-banner, .leaderboardAd, .sidebarAds, .lileft[tabindex="0"], .lileft>.top-heading[href="#"], section.gallery-section:nth-child(3), section.gallery-section:nth-child(4), section.gallery-section:nth-child(5) {
  display: none !important;
}

#header.has-adminmessage {
  height: 50px!important;
  padding: 0px!important;
  margin: 0px!important;
}

div#main-window > div#header {
    height: 0px !important;
    background: transparent !important;
}
` );
}

else if (window.location.pathname.indexOf == '/browse') {
GM_addStyle ( `
.news-block, [title="FA+"], [href="https://shop.furaffinity.net"][title="Shop"], [title="Shop"], div#footer, site-banner, .leaderboardAd, .sidebarAds, .lileft[tabindex="0"], .lileft>.top-heading[href="#"], div#main-window > div#header > site-banner {
  display: none !important;
}

#header.has-adminmessage {
  height: 50px!important;
  padding: 0px!important;
  margin: 0px!important;
}

div#main-window > div#header {
    height: 0px !important;
    background: transparent !important;
}
` );
}

/* For user profile CSS */
else if (document.location.pathname.indexOf("/user/") == 0) {
commitUserProfileCSSTweak();
}
else if (document.location.pathname.indexOf("/gallery/") == 0) {
commitUserProfileCSSTweak();
}
else if (document.location.pathname.indexOf("/scraps/") == 0) {
commitUserProfileCSSTweak();
}
else if (document.location.pathname.indexOf("/favorites/") == 0) {
commitUserProfileCSSTweak();
}
else if (document.location.pathname.indexOf("/commissions/") == 0) {
commitUserProfileCSSTweak();
}
else if (document.location.pathname.indexOf("/stats/") == 0) {
commitUserProfileCSSTweak();
}

else {
GM_addStyle ( `
.news-block, [title="FA+"], [href="https://shop.furaffinity.net"][title="Shop"], [title="Shop"], div#footer, .leaderboardAd, .sidebarAds, .lileft[tabindex="0"], .lileft>.top-heading[href="#"], div#main-window > div#header > site-banner {
  display: none !important;
}

div#main-window > div#header {
    height: 0px !important;
    background: transparent !important;
}
` );
}
})();
