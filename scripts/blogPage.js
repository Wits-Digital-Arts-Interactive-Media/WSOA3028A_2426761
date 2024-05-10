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
	"reflection2.html"
]

var blogIndex = 0;

function moveNext() {
	if (blogIndex < blogItems.length - 1) {
		blogIndex++;
		var post = document.getElementById("blogFrame");
		post.src = blogItems[blogIndex];
	}
}

function moveBack() {
	if (blogIndex > 0) {
		blogIndex--;
		var post = document.getElementById("blogFrame");
		post.src = blogItems[blogIndex];
	}
}
