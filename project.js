let menuicon = document.querySelector('#menu-icon');
let itnavbar = document.querySelector('navbar');
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let Id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a [href*='+Id + ']').classList.add
                ('active')

            })
        }
    })
}

menuicon.onclick = ()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}