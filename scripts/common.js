function toggleMenu() {
	let chkBox = document.getElementById("chkBMenu");
	if (chkBox != null) {
		if (chkBox.checked) {
			document.getElementById("navContainer").style.left = "0%";
		}
		else {
			document.getElementById("navContainer").style.left = "105%";
		}
	}
}