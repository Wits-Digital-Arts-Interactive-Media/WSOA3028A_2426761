
function bigImg(imgId, linkId) {
	var img = document.getElementById(imgId)
	img.style.height = "250px";
	img.style.width = "250px";
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


//I will get all icons on the home page roataing soon.. I just wanted to make sure it could be done :)
var rotatingIcons = [
	{ name: "Blogs", iconId: "blogIcon", icon: null, rotation: 0 },
	{ name: "Designs", iconId: "designIcon", icon: null, rotation: 0 },
	{ name: "Essays", iconId: "essayIcon", icon: null, rotation: 0 },
	{ name: "Portfolio", iconId: "portfolioIcon", icon: null, rotation: 0 },
	{ name: "Profile", iconId: "profileIcon", icon: null, rotation: 0 }
];

const angle = 1;

function rotateImage() {
	for (let rotatingIcon of rotatingIcons) {
		if (rotatingIcon.icon == null) { rotatingIcon.icon = document.getElementById(rotatingIcon.iconId); }
		rotatingIcon.rotation = (rotatingIcon.rotation + angle) % 360;
		rotatingIcon.icon.style.transform = `rotate(${rotatingIcon.rotation}deg)`;
	}
}

setInterval(rotateImage, 100)
