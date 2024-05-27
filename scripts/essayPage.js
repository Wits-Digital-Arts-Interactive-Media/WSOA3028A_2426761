const essayItems = [
	"essay1.html"
]

let essayIndex = 0;

function moveNext() {
	if (essayIndex < essayItems.length - 1) {
		essayIndex++;
		let post = document.getElementById("frame");
		post.src = essayItems[essayIndex];
	}
}

function moveBack() {
	if (essayIndex > 0) {
		essayIndex--;
		let post = document.getElementById("frame");
		post.src = essayItems[essayIndex];
	}
}
