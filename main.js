

/* Navigation Main Menü Desktop*/

var nav = document.getElementById('nav');
var navItems = document.querySelectorAll('.menu__item');
var navLine = document.querySelector('.nav-line');
var navActive = document.querySelector('#menu .active');
var navPadding = parseFloat(window.getComputedStyle(nav, null).getPropertyValue('padding-top'));

// Loop through nav items
for (var i = 0; i < navItems.length; i++) {
    // Animate nav line on hover
    navItems[i].addEventListener("mouseenter", function(e) {
        navLine.style.marginTop = this.offsetTop + (this.offsetHeight / 2) - 15 + navPadding + 'px';
    });
    // Reset nav line
    navItems[i].addEventListener("mouseleave", function(e) {
        navLine.style.marginTop =  navActive.offsetTop + (navActive.offsetHeight / 2) - 15 + navPadding + 'px';
    });
}

// Set nav line position for active menu item
window.onload = function() {
    navLine.style.marginTop = navActive.offsetTop + (navActive.offsetHeight / 2) - 15 + navPadding + 'px';
}
