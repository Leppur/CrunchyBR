// ==UserScript==
// @name         CrunhyBR, Crunchyroll banner remover
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Removes banners and notifications from crunchyroll
// @author       Leppur
// @match        https://www.crunchyroll.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==
//
// github        https://github.com/Leppur/CrunchyBR


// Options

// What is removed
var removeBanner = true
var removeTextBox = true // It's about the blue text box that comes up every now and then

if(removeBanner === true) {
	document.getElementById("marketing_banner").remove();
} if(removeTextBox === true) {
	document.getElementById("message_box").remove();
}
