// ==UserScript==
// @name         RemovedEDM Tweaker~
// @version      2.04
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
    article#tabber-tabpanel-About-0.tabber__panel > center,
    /* article#tabber-tabpanel-Videos-0.tabber__panel > center, */
    .citizen-page-header-inner > .citizen-page-heading > .firstHeading-container, .citizen-page-header-inner > .citizen-page-heading > #siteSub,
    img[src="/w/thumb_handler.php/d/d0/default.jpg/900px-default.jpg"],
    div#footer-sitetitle>.mw-logo-wordmark,
    #dice-a,
    #skin-client-prefs-citizen-feature-pure-black,
    #citizen-pref-header,
    #citizen-search-trigger,
    #pt-userpage-username, a[href="/Special:Notifications"][title="Your notices"],
    div#footer-sitetitle > .mw-logo-wordmark,
    a.mw-file-description[style="cursor:auto"] > img.mw-file-element,
    div.mw-content-ltr > h2.citizen-section-heading, div.mw-content-ltr > section#citizen-section-1.citizen-section,
    div.mw-content-ltr > #citizen-section-0.citizen-section > hr {
    display:none!important;
}
h1.home-header__title::before,
div#footer-sitetitle.mw-wiki-title::before {
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

h2.fwcp_cn > .mw-headline > font {
font-size: 20px;
display: block;
margin-top: -5px;
}
.fwcp_fr > .b_factrow {
  margin-top: -1.25px;
  display: block;
}
.fwcp_ct > .fwcp_jcd {
  margin-top: 8px;
  display: block;
}
.fwcp_ctc > .fwcp_ct {
  margin-top: -30px;
}

td.field_‎‎[style="background-image: repeating-linear-gradient(135deg, rgb(255, 165, 0), rgb(255, 165, 0) 10px, transparent 10px, transparent 20px); background-size: 20px 20px;"] {
background-color: rgb(255, 165, 0)!important;
}
td.field_‎‎[style="background-image: repeating-linear-gradient(45deg, red, red 5px, transparent 5px, transparent 10px), repeating-linear-gradient(-45deg, red, red 5px, transparent 5px, transparent 10px); background-size: 20px 20px;"] {
background-color: red!important;
}

article#tabber-tabpanel-Overview-0.tabber__panel > center,
article#tabber-tabpanel-Videos-0.tabber__panel > center {
  margin-top: 15px;
  margin-bottom: -15px;
}

article#tabber-tabpanel-Videos-0.tabber__panel {
overflow: hidden!important;
}
` );

})();
