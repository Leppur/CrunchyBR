// ==UserScript==
// @name         CrunhyBR, Crunchyroll banner remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes banners and notifications from crunchyroll
// @author       Leppur
// @match        https://www.crunchyroll.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==
//
// github        https://github.com/Leppur/CrunchyBR

document.getElementById("marketing_banner").remove();
document.getElementById("message_box").remove();

