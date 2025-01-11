// ==UserScript==
// @name         RemovedEDM Tweaker~
// @version      v1.3
// @description  Making the best out of RemovedEDM :3
// @author       Nayra* - Lilac Pillow
// @match        https://removededm.com/*
// @match        https://www.removededm.com/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle ( `
    h1.home-header__title > span#RemovedEDM,
    .citizen-preferences,
    a[title="Random page"],
    div.home-header>a[href="/Special:Search"],
    div.mw-cookiewarning-container
    #pt-betafeatures,
    .mw-headline,
    img[src="/w/thumb_handler.php/d/d0/default.jpg/900px-default.jpg"],
    div#footer-sitetitle>.mw-logo-wordmark,
    #dice-a,
    #skin-client-prefs-citizen-feature-pure-black,
    #citizen-pref-header,
    #citizen-search-trigger,
    #pt-userpage-username, a[href="/Special:Notifications"][title="Your notices"],
    div#footer-sitetitle > .mw-logo-wordmark {
    display:none!important;
}
h1.home-header__title::before,
div#footer-sitetitle.mw-wiki-title {
  content: '"removed.edm"';
  content-visibility: visible;
}
h1.home-header__title {
text-transform: none !important;
font-weight: normal !important;
}
a.new{
color: var(--color-link-red)!important;
}
div#footer-sitetitle {
margin-bottom: 10.5px;
}
ul.citizen-menu__content-list>#pt-logout a[data-mw="interface"] {
background-color: #0d95ff!important;
border: none!important;
color: black!important;
}
ul.citizen-menu__content-list>#pt-logout a[data-mw="interface"]:hover {
background-color: #0c7cd3!important;
}
ul.citizen-menu__content-list>#pt-logout a[data-mw="interface"]:active{
background-color: #0a64ab!important;
}
.mw-portlet-skin-client-prefs-citizen-feature-custom-font-size .citizen-menu {
margin-top: 10px;
}
#pt-userpage-realname {
color: #0d95ff!important;
font-size: 24px;
}
li#pt-userpage-2>a>#pt-userpage-realname:hover, li#pt-userpage-2>a>#pt-userpage-realname:active {
text-decoration: underline!important;
}
li#pt-userpage-2>a, li#pt-userpage-2>a:hover, li#pt-userpage-2>a:active {
background-color: transparent!important;
border: transparent!important;
}
#p-notifications.citizen-menu {
margin-top: 0px1important;
}
` );

})();
