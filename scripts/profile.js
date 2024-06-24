window.addEventListener('load', () => {
	const images = document.querySelectorAll('.image-container img');
	const activeImage = images[0];
	const nextImage = images[1];

	setTimeout(() => {
		activeImage.src = "../images/profile/cartoonMikisha_with_speech_trans.png";
		document.getElementById("profileDetails").style.visibility = "visible";
	}, 1250); // Delay of 1.25 second before the transition
});