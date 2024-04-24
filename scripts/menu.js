const root = "/WSOA3028A_2426761"

const menuItems = [
	{ name: "Home", href: root + "/index.html" }, //change this to be like the other href
	{ name: "Blogs", href: `${root}/blogs/blogs.html` },
	{ name: "Designs", href: `${root}/design/design.html` },
	{ name: "Essays", href: `${root}/essay/essay.html` },
	{ name: "Profile", href: `${root}/profile/profile.html` },
	{ name: "Portfolio", href: `${root}/portfolio/portfolio.html` }
];
export function initialize(currentPage) {
	var nav = document.querySelector("header > nav");
	var ul = document.createElement("ul"); // the unordered list

	for (let menuItem of menuItems) {
		var li = document.createElement("li")
		if (currentPage != menuItem.name) {
			var a = document.createElement("a")
			a.innerText = menuItem.name
			a.setAttribute("href", menuItem.href)
			li.appendChild(a)
		}
		else { li.innerText = menuItem.name }
			ul.appendChild(li)
	}
	nav.appendChild(ul)
}