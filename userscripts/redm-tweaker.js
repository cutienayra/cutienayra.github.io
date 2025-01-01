// ==UserScript==
// @name         RemovedEDM Tweaker~
// @version      v1.2A2
// @description  Making the best out of RemovedEDM :3
// @author       Nayra* - Lilac Pillow
// @match        https://removededm.com/*
// @match        https://www.removededm.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle ( `
    h1.home-header__title > span#RemovedEDM,
    .citizen-preferences,
    a[title="Random page"],
    div.home-header>a[href="/Special:Search"],
    div.mw-cookiewarning-container {
  display: none!important;
}
h1.home-header__title::before {
  content: '"removed.edm"';
}
h1.home-header__title {
text-transform: none !important;
font-weight: normal !important;
}
a.new{
color: var(--color-link-red)!important;
}
` );

})();
