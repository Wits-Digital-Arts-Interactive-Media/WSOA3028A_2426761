const root = "/WSOA3028A_2426761"

const menuItems = [
	{ name: "Home", href: root + "/index.html" }, //change this to be like the other href
	{ name: "Blogs", href: `${root}/blogs/blogs.html` },
	{ name: "Designs", href: `${root}/design/design.html` },
	{ name: "Essays", href: `${root}/essay/essay.html` },
	{ name: "Profile", href: `${root}/profile/profile.html` },
	{ name: "Portfolio", href: `${root}/portfolio/portfolio.html` }
];
//export function initialize(currentPage) {
//	var nav = document.getElementById("navMenu");
//	var ul = document.createElement("ul"); // the unordered list

//	for (let menuItem of menuItems) {
//		var li = document.createElement("li")
//		if (currentPage != menuItem.name) {
//			var a = document.createElement("a")
//			a.innerText = menuItem.name
//			a.setAttribute("href", menuItem.href)
//			li.appendChild(a)
//		}
//		else { li.innerText = menuItem.name }
//			ul.appendChild(li)
//	}
//	nav.appendChild(ul)
//}


export function initialize(currentPage) {
	let nav = document.getElementById("navMenu");
	let menuContainer = document.createElement("span");
	//alert(nav);
	menuItems.forEach((menuItem) => {
		let text = document.createTextNode(menuItem.name);
		if (currentPage !== menuItem.name) {
			let a = document.createElement("a");
			a.appendChild(text);
			a.href = menuItem.href;
			menuContainer.appendChild(a);
		} else {
			menuContainer.appendChild(text);
		}
		menuContainer.appendChild(document.createTextNode("\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"));
	});
	nav.appendChild(menuContainer);
}