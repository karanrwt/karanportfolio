burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightbar = document.querySelector('.rightbar')

burger.addEventListener('click', ()=>{
        navbar.classList.toggle('h-class-resp');
        navlist.classList.toggle('v-class-resp');
        rightbar.classList.toggle('v-class-resp');
})
 