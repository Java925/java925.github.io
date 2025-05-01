function makeTextBigger() {
	alert("Hello, world!");
	document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyle() {
	const textArea = document.getElementById("textInput");
	const fancy = document.getElementById("fancy").checked;

	if (fancy) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

function makeMoo() {
	const textArea = document.getElementById("textInput");
	let text = textArea.value.toUpperCase();
	let sentences = text.split(".");

	for (let i = 0; i < sentences.length; i++) {
		let words = sentences[i].trim().split(" ");
		if (words.length > 0 && words[words.length - 1] !== "") {
			words[words.length - 1] += "-Moo";
		}
		sentences[i] = words.join(" ");
	}

	textArea.value = sentences.join(". ");
}
