function checkname1()
{
	var val = document.getElementById("f1").value;
	var regex = /^[A-Za-z]{3,15}$/;	/* Regex for characters to be alphabets and 5
									count lies between 3 and 1*/
	if(regex.test(val))
	{
		document.getElementById("sf1").style.color = "green";			//Colour change to show Accepted
		document.getElementById("sf1").innerHTML = "<b>Accepted</b>";
	}
	else{
		document.getElementById("sf1").style.color = "red";		//Colour change to show Rejected
		document.getElementById("sf1").innerHTML = "<b>Name must contain only 3-15 alphabets</b>";
	}
}
function checkname2()
{
	var val = document.getElementById("f2").value;
	var regex = /^[A-Za-z]{3,15}$/;
	if(regex.test(val))
	{
		document.getElementById("sf2").style.color = "green";
		document.getElementById("sf2").innerHTML = "<b>Accepted</b>";
	}
	else{
		document.getElementById("sf2").style.color = "red";
		document.getElementById("sf2").innerHTML = "<b>Name must contain only 3-15 alphabets</b>";
	}
}

function respond()		//Alert after pressing the button
{
	//document.getElementById("div1").innerHTML = "<b> Submission successfull<b>";
	alert("Submission successfull");
}

function checkmail() {		//validation of email field
	// body...
	var mail = document.getElementById("mail").value;

	if(mail.indexOf("@")==-1 ){		//If character @ is not present reject the text
		document.getElementById("sf3").style.color = "red";
		document.getElementById("sf3").innerHTML = "<b>Enter a valid email id</b>";
	}
}