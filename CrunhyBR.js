// ==UserScript==
// @name         Crunhyroll banner remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes banners and notifications from crunchyroll
// @author       Brynjar
// @match        https://www.crunchyroll.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

document.getElementById("marketing_banner").remove();
document.getElementById("message_box").remove();
