
//LIGHT AND DARK MODE
const toggleBtn = document.querySelector('.checkbox')
const child = document.querySelector('.child')

const lightOrDark = function(isDrakTrue) {
 child.children[0].textContent = isDrakTrue ? 'Dark Mode' : 'Light Mode'
 isDrakTrue ? child.children[1].setAttribute('name', 'moon') : child.children[1].setAttribute('name', 'sunny-sharp')
}


const switchTheme = function(e) {
  console.log(e.target.checked)
 if(e.target.checked) {
  document.documentElement.setAttribute('data-theme', 'dark')
  lightOrDark(true)
  localStorage.setItem('theme', 'dark')
 } else {
   document.documentElement.setAttribute('data-theme', 'light')
   lightOrDark(false)
   localStorage.setItem('theme', 'light')
 }
}
toggleBtn.addEventListener('change', switchTheme)

const theme = localStorage.getItem('theme')
if(theme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark')
  lightOrDark(true)
  toggleBtn.checked = true
}

console.log("Move to new Folder");











// YEAR CHHANGE AUTOMATICALLY

const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;



// MAKING THE MENU WORK
const btnNavEL = document.querySelector(".nav-btn");
const headerEL = document.querySelector(".logo-nav");

btnNavEL.addEventListener("click", function() {
  headerEL.classList.toggle("open");
});



// smooth scrolling for safari 
const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks); NOT NECCESARY
allLinks.forEach(function (link) {
  link.addEventListener("click", function(e) {
   e.preventDefault();
   const href = link.getAttribute("href");
  //  console.log(href); 

  //  SCROLL BACK TO THE TOP
  if (href === "#") window.scrollTo({
    top:0,
    behavior: "smooth",
  });

  // scrollto other  links

  if (href !=="#" && href.startsWith("#")) {
    const sectionEL = document.querySelector(href);
    sectionEL.scrollIntoView({
      behavior: "smooth" });
  }


  // close mobile navigation
     if (link.classList.contains("nav-link"))
     headerEL.classList.toggle("open");

  });
  });




  // sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries)
   {
const ent = entries[0];


if (ent.isIntersecting === false)
   {
  document.body.classList.add("sticky");
}

if (ent.isIntersecting)
   {
  document.body.classList.remove("sticky");
}
}, 


{
  root: null,
  threshold: 0,
  rootMargin: "-80px"
}
);
obs.observe(sectionHeroEl);



const AllSection = document.querySelectorAll('.section')
const revealSection = function(entries, observer) {
entries.forEach(function(entry) {
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('hidden')
  observer.unobserve(entry.target)

})
}
const sectionObs = new IntersectionObserver(revealSection, {root: null, threshold: 0.15})
AllSection.forEach(function(section1) {
  sectionObs.observe(section1)
  section1.classList.add('hidden')
})

const nav = document.querySelector('.nav')
const fadeMenu =  function(e) {
  e.preventDefault()
  if(e.target.classList.contains('nav-link')) {
    const clicked = e.target;
    const AllSibiling = clicked.closest('.nav').querySelectorAll('.nav-link')  
    AllSibiling.forEach(sib1 => {
      if(sib1 !== clicked ) sib1.style.opacity = this
    })
  }
  }
nav.addEventListener('mouseover',fadeMenu.bind(0.5))
nav.addEventListener('mouseout',fadeMenu.bind(1))




///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
