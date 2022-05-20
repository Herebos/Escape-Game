function triangleGo() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "42") {
		location.href='rond.html';
	} else {
		alert("Raté")
	}
}

function rondGo() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "360") {
		location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
	} else {
		alert("Raté")
	}
}