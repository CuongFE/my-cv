/*===== SHOW MENU ======*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*====== REMOVE MENU MOBILE =======*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
    // khi chúng ta click vào mỗi nav__link, chúng ta sẽ xoá đi class 'show menu'
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*====== SCROLL SECTIONS ACTIVE LINK  =======*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrolly = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight

        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')

        if(scrolly > sectionTop && scrolly <= sectionTop +sectionHeight ) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
        
}
window.addEventListener('scroll', scrollActive)




/*====== SHOW SCROLL TOP =======*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll

    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*====== DARK LIGHT THEME =======*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


    // previously selected topic ( if user selected )
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

    // we obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

    // we validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

    // active / deactive the theme manually with the button 
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* ===== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====== */

function scaleCv() {
    document.body.classList.add('scale-cv')
}

/* ===== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====== */

function removeScale() {
    document.body.classList.remove('scale-cv')
}

/* ===== GENERATE PDF ======*/
// PDF generated area
let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

// Html2pdf options


// Function to call areaCv and Html2pdf options
function generateResume() {
    html2pdf(areaCv)
}

// when the button is clicked, it executes the three function



resumeButton.addEventListener('click', () => {
    // 1. the class .scale-cv is added to the body, where it reduces the size of the
    scaleCv()

    // 2. The PDF is generated
    generateResume()
    
})
