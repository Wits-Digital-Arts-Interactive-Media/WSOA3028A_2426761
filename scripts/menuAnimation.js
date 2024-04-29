
function bigImg(imgId, linkId) {
	var img = document.getElementById(imgId)
	img.style.height = "300px";
	img.style.width = "300px";
	var imgRect = img.getBoundingClientRect();
	setTimeout(rotateImage, 5);

	var div = document.getElementById(linkId);
	var divRect = div.getBoundingClientRect();
	div.style.top = (imgRect.top + (imgRect.height - divRect.height) / 2) + 'px';
	div.style.left = (imgRect.left + (imgRect.width - divRect.width) / 2) + 'px';
	div.style.visibility = "visible";
}

function normalImg(imgId, linkId) {
	var img = document.getElementById(imgId)
	img.style.height = "200px";
	img.style.width = "200px";
	document.getElementById(linkId).style.visibility = "hidden";
}

var rotated = document.getElementById("blogIcon");

let rotation = 0;
const angle = 1;

//I will get all icons on the home page roataing soon.. I just wanted to make sure it could be done :)
function rotateImage() {
	if (rotated == null) { rotated = document.getElementById("blogIcon"); }
	rotation = (rotation + angle) % 360;
	rotated.style.transform = `rotate(${rotation}deg)`;
	// setInterval(rotateImage, 100)
	//if (onmouseover()) {
	//  setTimeout(rotateImage)
	//}
}
setInterval(rotateImage, 100)

