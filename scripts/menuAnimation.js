function toggleSphereLinks() {
	if (navigator.userAgentData.mobile) {
		document.getElementById("myBlogs").style.visibility = "visible";
		document.getElementById("myDesigns").style.visibility = "visible";
		document.getElementById("myEssays").style.visibility = "visible";
		document.getElementById("myProfile").style.visibility = "visible";
		document.getElementById("myPortfolio").style.visibility = "visible";
	}
	else {
		document.getElementById("myBlogs").style.visibility = "hidden";
		document.getElementById("myDesigns").style.visibility = "hidden";
		document.getElementById("myEssays").style.visibility = "hidden";
		document.getElementById("myProfile").style.visibility = "hidden";
		document.getElementById("myPortfolio").style.visibility = "hidden";
	}
}

function bigImg(imgId, linkId) {
	let img = document.getElementById(imgId)
	img.style.height = "250px";
	img.style.width = "250px";
	let imgRect = img.getBoundingClientRect();
	setTimeout(rotateImage, 5);

	let div = document.getElementById(linkId);
	let divRect = div.getBoundingClientRect();
	//div.style.top = (imgRect.top + (imgRect.height - divRect.height) / 2) + 'px';
	//div.style.left = (imgRect.left + (imgRect.width - divRect.width) / 2) + 'px';
	div.style.visibility = "visible";
}

function normalImg(imgId, linkId) {
	let img = document.getElementById(imgId)
	img.style.height = "200px";
	img.style.width = "200px";
	document.getElementById(linkId).style.visibility = "hidden";
}


//I will get all icons on the home page roataing soon.. I just wanted to make sure it could be done :)
let rotatingIcons = [
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
