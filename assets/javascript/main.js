const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;




/// For Mobile Nav to Work

const btnNavEl = document.querySelector('.mobile-nav');
const headEl = document.querySelector('.head');
btnNavEl.addEventListener('click', function(){
  headEl.classList.toggle('nav-open')
});
/////


//// For Smooth Scrolling 

//const allLinks = document.querySelectorAll('a:link');
//allLinks.forEach(function(link){
//link.addEventListener('click', function(e){
 // e.preventDefault();
 // const href = link.getAttribute('href');
//  console.log(href);
  
  
  /// Smooth Back to Top
//  if (href === "#")
 // window.scrollTo({
 //   top: 0,
//    behavior: 'smooth'
//  });
  
  
//  if (href !== '#' && href.startsWith('#')){
   // const sectionEl = document.querySelector(href);
   // sectionEl.scrollIntoView({behavior:'smooth'})
 // };
  
  /// Close Nav 
  
//  if (link.classList.contains('main-nav-link'))
//  headEl.classList.toggle('nav-open');

//});
  
  
//})

///


const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');

    // ONLY prevent default if it's an internal link (#) or back to top (#)
    if (href === "#" || href.startsWith("#")) {
      e.preventDefault();

      // Smooth Back to Top
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Smooth Scroll to Sections
      if (href !== '#' && href.startsWith('#')) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // If it's a normal page link (like pages/about.html), 
    // e.preventDefault() is skipped, and the page opens!

    // Close Mobile Nav if link is clicked
    if (link.classList.contains('main-nav-link')) {
      headEl.classList.remove('nav-open');
    }
  });
});

const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(function (entries){
  const ent = entries[0];
  if (ent.isIntersecting === false){
    console.log(ent);
    document.body.classList.add('sticky');
  }
  if (ent.isIntersecting === true){
    console.log(ent);
    document.body.classList.remove('sticky');
  }
},
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

obs.observe(sectionHeroEl);
