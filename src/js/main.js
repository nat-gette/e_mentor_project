// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//     myInput.focus()
// })

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('menu-open');
        menu.classList.add('menu-active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('menu-open');
        menu.classList.remove('menu-active');
        menuOpen = false;
    }
});

