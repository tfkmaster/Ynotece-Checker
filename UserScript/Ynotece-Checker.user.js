// ==UserScript==
// @name         Ynotece-Checker
// @namespace    http://ynotece.com
// @version      1.0
// @description  THIS IS HIHIHI ! *chocobal*
// @author       tfkmaster
// @grant        GM_registerMenuCommand
// ==/UserScript==

GM_registerMenuCommand("Ynotece is online ?", YnoCheck);

function YnoCheck()
{
    var audio = null;
	var request = new XMLHttpRequest();
	request.open("GET", "https://api.dailymotion.com/user/Ynotece/videos?fields=broadcasting,onair?timestamp=" + new Date().getTime(), false);
	request.send(null);

	var response = JSON.parse(request.responseText);
	if (response.list[0].broadcasting === true && response.list[0].onair === true)
	{
        audio = new Audio('http://oxygeno2.altervista.org/yno/Hihihi.ogg');
        audio.play();
        document.body.innerHTML += '<div id="yno_div" style="position:absolute;right:0px;width:auto;height:48px;top:0px;opacity:0.9;z-index:99999;line-height:48px;vertical-align:baseline;background:#fff;color:#0f0;text-align:center;border:1px solid black;"><img src="http://oxygeno2.altervista.org/yno/Yno.png" style="display: inline;vertical-align:baseline"/><p style="display: inline;margin:0px;font-family:Arial;font-size:24px;vertical-align:baseline;">♥~ PUTAIN OUAIS ELLE LIVE ! ~♥</p><img src="http://oxygeno2.altervista.org/yno/Yno.png" style="display: inline;vertical-align:baseline"/></div>';
        window.setTimeout(function(){document.getElementById("yno_div").outerHTML = "";}, 3000);
	}
	else
	{
        audio = new Audio('http://oxygeno2.altervista.org/yno/Naaan.ogg');
        audio.play();
        document.body.innerHTML += '<div id="yno_div" style="position:absolute;right:0px;width:auto;height:48px;top:0px;opacity:0.9;z-index:99999;line-height:48px;vertical-align:baseline;background:#fff;color:#f00;text-align:center;border:1px solid black;"><img src="http://oxygeno2.altervista.org/yno/isaac.png" style="display: inline;vertical-align:baseline"/><p style="display: inline;margin:0px;font-family:Arial;font-size:24px;vertical-align:baseline;">Non... Elle live pas...</p><img src="http://oxygeno2.altervista.org/yno/isaac.png" style="display: inline;vertical-align:baseline"/></div>';
        window.setTimeout(function(){document.getElementById("yno_div").outerHTML = "";}, 3000);
    }

}


