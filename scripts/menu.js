const root = "/WSOA3028A_2426761"

const menuItems = [
  { name: "Home", href: `${root}/index.html`, activeStyle: '' },
  { name: "Blogs", href: `${root}/blogs/blogs.html`, activeStyle: 'activeItem-blogs' },
  { name: "Designs", href: `${root}/design/design.html`, activeStyle: 'activeItem-designs' },
  { name: "Essays", href: `${root}/essay/essay.html`, activeStyle: 'activeItem-essays' },
  { name: "Portfolio", href: `${root}/portfolio/portfolio.html`, activeStyle: 'activeItem-portfolio' }
  { name: "Profile", href: `${root}/profile/profile.html`, activeStyle: 'activeItem-profile' },
];

export function initialize(currentPage) {
  let nav = document.getElementById("navMenu");
  menuItems.forEach((menuItem) => {
    let text = document.createTextNode(menuItem.name);
    let div = document.createElement("div");

    if (currentPage !== menuItem.name) {

      let a = document.createElement("a");
      a.appendChild(text);
      a.href = menuItem.href;
      a.className = "menuItem";

      div.className = "menuItemDiv";
      div.appendChild(a);
    }
    else {
      let s = document.createElement("span");
      s.appendChild(text);
      s.className = "menuItem";

      div.className = "menuItemDiv activeItem " + menuItem.activeStyle;
      div.appendChild(s);
    }

    nav.appendChild(div);
  });
}