function YnoCheck()
{

	var request = new XMLHttpRequest();
	request.open("GET", "https://api.dailymotion.com/user/Ynotece/videos?fields=broadcasting", false);
	request.send(null);

	var response = JSON.parse(request.responseText);
	if (response.list[0].broadcasting == true && response.list[0].onair == true)
	{
		document.getElementById("result").innerHTML = "♥~ PUTAIN OUAIS ELLE LIVE ! ~♥";
		document.getElementById("result").style.color = "#0F0";
		document.getElementById("s1").style.display = "inline";
		document.getElementById("s2").style.display = "inline";
		document.getElementById("s3").style.display = "none";
		document.getElementById("s4").style.display = "none";
		document.getElementById("yes").play();
	}
	else
	{
		document.getElementById("result").innerHTML = "Meeeh... Elle live pas...";
		document.getElementById("result").style.color = "#F00";
		document.getElementById("s1").style.display = "none";
		document.getElementById("s2").style.display = "none";
		document.getElementById("s3").style.display = "inline";
		document.getElementById("s4").style.display = "inline";
		document.getElementById("no").play();
	}

}

//
