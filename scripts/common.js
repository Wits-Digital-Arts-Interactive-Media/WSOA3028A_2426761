function toggleMenu() {
	let chkBox = document.getElementById("chkBMenu");
	if (chkBox != null) {
		let nav = document.getElementById("navSpheres");
		let childDivs = null;
		let childDivsArray = null;
		if (nav != null) {
			childDivs = nav.querySelectorAll('div');
			childDivsArray = Array.from(childDivs);
		}

		if (chkBox.checked) {
			document.getElementById("navContainer").style.left = "0%";
			if (childDivsArray != null) {
				for (let i = 0; i < childDivsArray.length; i++) {
					childDivsArray[i].style.zIndex = -1;
				}
			}
		}
		else {
			document.getElementById("navContainer").style.left = "105%";
			if (childDivsArray != null) {
				for (let i = 0; i < childDivsArray.length; i++) {
					childDivsArray[i].style.zIndex = 0;
				}
			}
		}
	}
}