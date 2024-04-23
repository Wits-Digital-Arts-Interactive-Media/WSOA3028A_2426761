export function initialize(currentPage) {
	const menuItems = [
		{ name: "Home", href: "../index.html" },
		{ name: "Blogs", href: "../blogs/blogs.html" },
		{ name: "Designs", href: "../design/design.html" },
		{ name: "Essays", href: "../essay/essay.html" },
		{ name: "Profile", href: "../profile/profile.html" },
		{ name: "Portfolio", href: "../portfolio/portfolio.html" }
	];

	var nav = document.querySelector("header > nav");
	var ul = document.createElement("ul"); // the unordered list

	for (let menuItem of menuItems) {
		if (currentPage != menuItem.name) {
			var li = document.createElement("li")
			var a = document.createElement("a")
			a.innerText = menuItem.name
			a.setAttribute("href", menuItem.href)
			li.appendChild(a)
			ul.appendChild(li)
		}
	}

	nav.appendChild(ul)
}