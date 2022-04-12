const darkMode = document.getElementById('theme-button');
const darkMode1 = document.getElementById('theme-button1');
const container = document.querySelector('.container');
const skillIcon = document.querySelectorAll('.ico1');
const disp = document.querySelectorAll('.disp');
const line = document.querySelectorAll('.line');
const percT = document.querySelectorAll('.perc');
const input = document.querySelectorAll('.input')
const label = document.querySelectorAll('.label')
const nav = document.querySelector('.nav');
const icons = document.querySelectorAll('.ico');
const apps = document.getElementById('uil-apps');
const navClose = document.getElementById('nav-close');
const about = document.getElementById('about');
const imag = document.querySelector('.about-image')
const boxes = document.querySelectorAll('.box');
const home = document.getElementById('home')
const conttext = document.querySelector('.cont-text')
const navLinks = document.querySelectorAll('.nav__link');
const servise = document.getElementById('services');

let count = 0;
checkBoxes();
navLink();

window.addEventListener('scroll', () => {
    nav.classList.add('shadow');
})

window.addEventListener('scroll', checkBoxes);
window.addEventListener('scroll', navLink);


apps.addEventListener('click', () => {
    nav.classList.add('active')
})

navClose.addEventListener('click', () => {
    nav.classList.remove('active')
})

darkMode.addEventListener('click', () => {
    container.classList.toggle('dark')
})

darkMode1.addEventListener('click', () => {
    container.classList.toggle('dark')
})

skillIcon.forEach((icon, idx) => {

    icon.addEventListener('click', () => {
         
   
        percT.forEach((perc, idx1) => {
            const percentage = perc.getAttribute('data-target')
            line[idx1].style.width = percentage + "%";

            if(idx == 1){
                skillIcon[1].classList.toggle('rot');
                skillIcon[0].classList.remove('rot');
                skillIcon[2].classList.remove('rot');
                skillIcon[3].classList.remove('rot');
                disp[1].classList.toggle("show");
                disp[0].classList.remove("show");
                disp[2].classList.remove("show");
                disp[3].classList.remove("show");
            }
            if(idx == 2){
                skillIcon[2].classList.toggle('rot');
                skillIcon[0].classList.remove('rot');
                skillIcon[1].classList.remove('rot');
                skillIcon[3].classList.remove('rot');
                disp[2].classList.toggle("show");
                disp[1].classList.remove("show");
                disp[0].classList.remove("show");
                disp[3].classList.remove("show");
            }
            if(idx == 3){
                skillIcon[3].classList.toggle('rot');
                skillIcon[0].classList.remove('rot');
                skillIcon[2].classList.remove('rot');
                skillIcon[1].classList.remove('rot');
                disp[3].classList.toggle("show");
                disp[1].classList.remove("show");
                disp[2].classList.remove("show");
                disp[0].classList.remove("show");
            }
            if(idx == 0){
                skillIcon[0].classList.toggle('rot');
                skillIcon[1].classList.remove('rot');
                skillIcon[2].classList.remove('rot');
                skillIcon[3].classList.remove('rot');
                disp[0].classList.toggle("show");
                disp[1].classList.remove("show");
                disp[2].classList.remove("show");
                disp[3].classList.remove("show");


            }
           
         })
    })
})




input.forEach((inp , idx) => {
    inp.addEventListener('click', () => {
        label[idx].classList.toggle('up');
    })
})



function checkBoxes(){
    let trigger = window.innerHeight / 5 * 4;

    const btnHIght = about.getBoundingClientRect().bottom;
    const imgHight = imag.getBoundingClientRect().top;

    if(imgHight < trigger){
        imag.classList.add('show')
        conttext.classList.add('show')
        }else{
            imag.classList.remove('show')
            conttext.classList.remove('show')
        }
    
    if(btnHIght > trigger){
        about.classList.remove('show')
        }else{
        about.classList.add('show')
         }

    boxes.forEach(box => {
        const boxhight = box.getBoundingClientRect().top;

        if(boxhight < trigger){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}

function navLink(){
    let trigger = window.innerHeight / 5 * 4;

    const abt = home.getBoundingClientRect().bottom;
    const skl = about.getBoundingClientRect().bottom;
    const srvTop = servise.getBoundingClientRect().top;
    const srvBtm = servise.getBoundingClientRect().bottom


    if(abt < trigger){
        navLinks[1].classList.add('active-link');
    }else{
        navLinks[1].classList.remove('active-link')
    }

    if(skl < trigger){
        navLinks[2].classList.add('active-link');
    }else{
        navLinks[2].classList.remove('active-link');
    }

    if(srvTop  < trigger){
        navLinks[3].classList.add('active-link');
    }else{
        navLinks[3].classList.remove('active-link');
    }

    if(srvBtm < trigger){
        navLinks[4].classList.add('active-link');
        navLinks[5].classList.add('active-link');
    }else{
        navLinks[4].classList.remove('active-link');
        navLinks[5].classList.remove('active-link');
    }

}