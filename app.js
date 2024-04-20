let menu = document.getElementById('nav_menu');
let nav_bar = document.getElementById('Menu');
let close = document.getElementById('Close');

// open function of menu

nav_bar.addEventListener('click', () => {
    menu.style.display = 'block';
    nav_bar.style.display = 'none'
    close.style.display = 'block'
});

// Close Function of menu

close.addEventListener('click', () => {
    menu.style.display = 'none';
    close.style.display = 'none'
    nav_bar.style.display = 'block'
})



let icon1 = document.getElementById('icon1');
let icon2 = document.getElementById('icon2');
let sec_img1 = document.getElementById('img1');
let sec_img2 = document.getElementById('sec_img');

icon1.addEventListener('click', () => {
    sec_img2.style.display = 'none';
    sec_img1.style.display = 'block'
})

icon2.addEventListener('click', () => {
    sec_img1.style.display = 'none';
    sec_img2.style.display = 'block'
})