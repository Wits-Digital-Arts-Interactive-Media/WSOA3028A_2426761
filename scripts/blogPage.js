const blogItems = [
	"week1.html",
	"week2.html",
	"week3.html",
	"week4.html",
	"reflection1.html",
	"week6.html",
	"week8.html",
	"week9.html",
	"week10.html",
	"week11.html",
	"reflection2.html",
	"week12.html",
	"week13.html",
	"reflection3.html"
]

let blogIndex = 0;

function moveNext() {
	if (blogIndex < blogItems.length - 1) {
		blogIndex++;
		let post = document.getElementById("frame");
		post.src = blogItems[blogIndex];
	}
}

function moveBack() {
	if (blogIndex > 0) {
		blogIndex--;
		let post = document.getElementById("frame");
		post.src = blogItems[blogIndex];
	}
}
