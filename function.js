document.getElementById("code").addEventListener("keypress", function(event) {
  //event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("codeButton").click();
  }
});

let indice = 0;

function triangleGo() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "42") {
		location.href='rond.html';
	} else if (indice >= 5) {
		alert("Code source");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
}

function rondGo() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "360") {
		location.href='carre.html';
	} else if (indice >= 5) {
		alert("Degré");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
}

function carreGo() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "Gin du jardin") {
		location.href='https://www.youtube.com/watch?v=ltSQ-czeDEE';
	} else if (indice >= 5) {
		alert("CTRL+A");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
}