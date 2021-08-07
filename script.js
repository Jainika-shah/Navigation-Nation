// getting all elements
const menuBar = document.getElementById('menu-container');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const body = document.getElementsByTagName('BODY')[0];
const about = document.getElementById('about');

// array of all nav items
const navItems = [nav1, nav2, nav3, nav4, nav5];

// this () will trigger the animation of overlay, this is short version, below in comments is the previous(long) version of function.
function navAnimation(dir1, dir2){
  navItems.forEach((nav, index) =>{
    nav.classList.replace(`slide-${dir1}-${index+1}`, `slide-${dir2}-${index+1}`)
  });
}

// the button toggling, the slide in and out, and the animation is triggered from here.
function toggleNav() {
  menuBar.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if(overlay.classList.contains('overlay-active')){
    overlay.classList.replace('overlay-slide-hide', 'overlay-slide-show');
    navAnimation('out','in');
  }else{
    overlay.classList.remove('overlay-slide-show');
    overlay.classList.add('overlay-slide-hide');
    overlay.classList.replace('overlay-slide-show', 'overlay-slide-hide');
    navAnimation('in','out');
  }
}

// the change of color of menu bars as we scroll down is handle in here.
document.onscroll = function() {
  const specs = document.querySelector('#about-me');
  const nav = document.querySelectorAll('.bar');
  
  if(specs.getBoundingClientRect().top <= 0) { 
   nav.forEach(nav => {
    nav.classList.add('dark');
   });
    
  } else {
    nav.forEach(nav => {

    nav.classList.remove('dark');
    });
  }
}

// event listeners
menuBar.addEventListener('click', toggleNav);

// event listeners for each nav: short hand version
navItems.forEach(nav => {
  nav.addEventListener('click', toggleNav);
});



// long versions of code: 

// nav1.addEventListener('click', toggleNav);
// nav2.addEventListener('click', toggleNav);
// nav3.addEventListener('click', toggleNav);
// nav4.addEventListener('click', toggleNav);
// nav5.addEventListener('click', toggleNav);


// nav1.classList.remove('slide-in-1');
// nav1.classList.add('slide-out-1');
// nav2.classList.remove('slide-in-2');
// nav2.classList.add('slide-out-2');
// nav3.classList.remove('slide-in-3');
// nav3.classList.add('slide-out-3');
// nav4.classList.remove('slide-in-4');
// nav4.classList.add('slide-out-4');
// nav5.classList.remove('slide-in-5');
// nav5.classList.add('slide-out-5');


    
// nav1.classList.remove('slide-out-1');
// nav1.classList.add('slide-in-1');
// nav2.classList.remove('slide-out-2');
// nav2.classList.add('slide-in-2');
// nav3.classList.remove('slide-out-3');
// nav3.classList.add('slide-in-3');
// nav4.classList.remove('slide-out-4');
// nav4.classList.add('slide-in-4');
// nav5.classList.remove('slide-out-5');
// nav5.classList.add('slide-in-5');