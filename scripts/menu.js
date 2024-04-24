const root = "/WSOA3028_2426761"

const menuItems = [
	{ name: "Home", href: root + "/index.html" },
	{ name: "Blogs", href: `${root}/blogs/blogs.html` },
	{ name: "Designs", href: `${root}/design/design.html` },
	{ name: "Essays", href: root + "/essay/essay.html" },
	{ name: "Profile", href: "/profile/profile.html" },
	{ name: "Portfolio", href: "/portfolio/portfolio.html" }
];
export function initialize(currentPage) {
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