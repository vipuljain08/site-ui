console.log('Hello world')
let mobileMenu = document.getElementById('mobile-menu'),
    mobileNavbar = document.getElementById('mobile-navbar'),
    logo = document.querySelector('.logo')

mobileMenu.addEventListener('click', function() {
    toggleClass(logo, 'is-active')
    toggleClass(mobileMenu, 'is-active')
    toggleClass(mobileNavbar, 'expand')
})

// helper functions
function toggleClass(element, className) {
    return element.classList.toggle(className)
}