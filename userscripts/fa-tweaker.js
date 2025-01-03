// ==UserScript==
// @name         FurAffinity Tweaker~
// @version      v1.2
// @description  Making the best out of FurAffinity (aka. Furaffinity[dot]net) :3
// @author       Nayra* & SoftyBnuny
// @match        https://www.furaffinity.net/*
// @match        https://furaffinity.net/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

if (window.location.pathname == '/') {
GM_addStyle ( `
.news-block, [title="FA+"], [href="https://shop.furaffinity.net"][title="Shop"], [title="Shop"], div#footer, site-banner, .leaderboardAd, .sidebarAds, [href="/browse/"], .lileft[tabindex="0"], .lileft>.top-heading[href="#"] {
  display: none !important;
}
#header.has-adminmessage {
  height: 50px!important;
  padding: 0px!important;
  margin: 0px!important;
}
` );
}
*/

else if (window.location.pathname.indexOf == '/browse') {
GM_addStyle ( `
.news-block, [title="FA+"], [href="https://shop.furaffinity.net"][title="Shop"], [title="Shop"], div#footer, site-banner, .leaderboardAd, .sidebarAds, [href="/browse/"], .lileft[tabindex="0"], .lileft>.top-heading[href="#"] {
  display: none !important;
}
#header.has-adminmessage {
  height: 50px!important;
  padding: 0px!important;
  margin: 0px!important;
}
` );
}

else {
GM_addStyle ( `
.news-block, [title="FA+"], [href="https://shop.furaffinity.net"][title="Shop"], [title="Shop"], div#footer, .leaderboardAd, .sidebarAds, [href="/browse/"], .lileft[tabindex="0"], .lileft>.top-heading[href="#"] {
  display: none !important;
}
` );
}
})();
