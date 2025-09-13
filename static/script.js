// -- NAYRA MAIN SCRIPT -- //

document.addEventListener('DOMContentLoaded', function() {

/* Main Page Show // Button Disable */

document.getElementById('main-btn').addEventListener('click', function() {
document.getElementById('main-page').classList.remove('hide');
document.getElementById('main-btn').classList.add('disabled');

document.getElementById('archives-page').classList.add('hide');
document.getElementById('archives-btn').classList.remove('disabled');

mobileOpt();

document.getElementById('bfdi-page').classList.add('hide');
document.getElementById('bfdi-btn').classList.remove('disabled');

document.getElementById('friendos-page').classList.add('hide');
document.getElementById('friendos-btn').classList.remove('disabled');
});

/* Archive Page Show // Button Disable */

document.getElementById('archives-btn').addEventListener('click', function() {
document.getElementById('main-page').classList.add('hide');
document.getElementById('main-btn').classList.remove('disabled');

document.getElementById('archives-page').classList.remove('hide');
document.getElementById('archives-btn').classList.add('disabled');

mobileOpt();

document.getElementById('bfdi-page').classList.add('hide');
document.getElementById('bfdi-btn').classList.remove('disabled');

document.getElementById('friendos-page').classList.add('hide');
document.getElementById('friendos-btn').classList.remove('disabled');
});

/* BFDI Page Show // Button Disable */

document.getElementById('bfdi-btn').addEventListener('click', function() {
document.getElementById('main-page').classList.add('hide');
document.getElementById('main-btn').classList.remove('disabled');

document.getElementById('archives-page').classList.add('hide');
document.getElementById('archives-btn').classList.remove('disabled');

mobileOpt();

document.getElementById('bfdi-page').classList.remove('hide');
document.getElementById('bfdi-btn').classList.add('disabled');

document.getElementById('friendos-page').classList.add('hide');
document.getElementById('friendos-btn').classList.remove('disabled');
});

/* Friendos Page Show // Button Disable */

document.getElementById('friendos-btn').addEventListener('click', function() {
document.getElementById('main-page').classList.add('hide');
document.getElementById('main-btn').classList.remove('disabled');

document.getElementById('archives-page').classList.add('hide');
document.getElementById('archives-btn').classList.remove('disabled');

mobileOpt();

document.getElementById('bfdi-page').classList.add('hide');
document.getElementById('bfdi-btn').classList.remove('disabled');

document.getElementById('friendos-page').classList.remove('hide');
document.getElementById('friendos-btn').classList.add('disabled');
});

/* --- SOCIAL MEDIA LINKS --- */

document.getElementById('yt-btn').addEventListener('click', function() {
window.open('https://youtube.com/channel/UCvb27xnvrVgMNo_687Ja4Tg', '_blank').focus();
});

/* - */

document.getElementById('pin-btn').addEventListener('click', function() {
window.open('https://pinterest.com/cutienayra_', '_blank').focus();
});

/* - */

document.getElementById('sc-btn').addEventListener('click', function() {
window.open('https://soundcloud.com/nayra-beatz', '_blank').focus();
});

/* - */

document.getElementById('x-btn').addEventListener('click', function() {
window.open('https://x.com/cutienayra_', '_blank').focus();
});

/* -- MOBILE BAR UI ENABLE -- */

document.getElementById('mobile-bar-button').addEventListener('click', function() {
document.getElementById('bar').classList.add('show');
document.getElementById('mobile-bar-button').classList.add('hide');
document.getElementById('backdrop-menu').classList.remove('hide');
});

document.getElementById('backdrop-menu-btn').addEventListener('click', function() {
mobileOpt();
});

function mobileOpt() {
document.getElementById('backdrop-menu').classList.add('hide');
document.getElementById('bar').classList.remove('show');
document.getElementById('mobile-bar-button').classList.remove('hide');
}

});
