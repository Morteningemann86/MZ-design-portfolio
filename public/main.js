const menu = document.querySelector('#menu');
const body = document.body

// When we click on the burger icon, this script will see of the class 'hidden' is present using the 'contain' function. If it is, then it will remove the class with the 'remove' function. If the class 'hidden' is NOT present then the 'else' part of the script will fire and 'add' the class 'hidden


// Hamburger menu animation
const menuBtn =  document.querySelector('#menu-btn')
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('tham-active');
        menu.classList.remove('hidden');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('tham-active');
        menu.classList.add('hidden');
        menuOpen = false;
    }
})


