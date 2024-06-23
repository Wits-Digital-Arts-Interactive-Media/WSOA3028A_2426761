const essayItems = [
	"essay1.html",
	"essay2.html"
]

let essayIndex = 0;

function moveNext() {
	if (essayIndex < essayItems.length - 1) {
		essayIndex++;
		let post = document.getElementById("essayFrame");
		post.src = essayItems[essayIndex];
	}
}

function moveBack() {
	if (essayIndex > 0) {
		essayIndex--;
		let post = document.getElementById("essayFrame");
		post.src = essayItems[essayIndex];
	}
}
