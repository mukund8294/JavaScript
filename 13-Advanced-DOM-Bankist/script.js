'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////............................................................................................./////

//////////.....HELLO, BUDDY...........///////

/////.............................................................................................////

///////.. Selecting, Creating, and Deleting Elements....

/*
///Selecting elements...
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByClassName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));
*/

////..................................................................................................////

///.Creating and inserting elements..
/*
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionlity and analytics.';

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

// header.before(message);
// head.after(message);

/// Delete elements..
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  //message.remove();
  message.parentElement.removeChild(message);
});
*/

//////.............................................................................................//////

///// Styles, Attributes And Classes.....

/*
/// Styles...
messageChannel.style.backgroundColor = '#3738d';
messageChannel.style.width = '120%';

console.log(message.style.color);
console.log(messageChannel.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

/// Attributes...
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

/// Non-standard..
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

/// Data attributes...
console.log(logo.dataset.versionNumber);

/// Classes...
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');   //// not includes

// Don't use
logo.clasName = 'Jonas';
*/

/////................................................................................................/////

//// 007 Implementing Smooth Scrolling......

/*
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // /// Scrolling...
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});
*/

//////................................................................................................////

////008 Types of Events and Event Handlers....

/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};


h1.addEventListener('mouseenter', alertH1);


setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };
*/

////...........................................................................................//////

///// 010 Event Propagation in Practice.....

/*
// rgp (255,255,255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav_link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //stop propagation
  //e.stopPropagation();
});

document.querySelector('.nav_links').addEventListener('click',function (e){
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  
});
document.querySelector('.nav_links').addEventListener('click',function (e){
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
},
true
);
*/

////////...................................................................................//////////

/////Delegation_ Implementing Page Navigation.....

/*
document.querySelector('.nav_links').addEventListener('click', function (e){
  e.preventDefault();

  /// Matching strategy
  if (e.target.classList.contains('nav_link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'}):
  }
});
*/

/////........................................................................./////

///// 012 DOM Traversing.........

/*
const h1 = document.querySelector('h1');

/// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children):
h1.firstElementChild.computedStyleMap.color = 'white';
h1.lastElementChild.computedStyleMap.color = 'orangered';

//// going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').computedStyleMap.background = 'var (--gradient-primary)';

/// going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
  if (el !== h1) el.computedStyleMap.transform = 'scale(0.5)';
});
*/

/////...................................................................................../////////

//////013 Building a Tabbed Component......

/*
///Tabbed component
const tabs = document.querySelectorAll('.operations_tab');
const tabsContainer = document.querySelectorAll('.operations_tab-container');
const tabsContent = document.querySelectorAll('.operations_tab-content');

tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations_tab');
  console.log(clicked);

  ///Guard clause
  if(!clicked) return;

  /// Remove active classes
  tabs.forEach(t => t.classList.remove('operations_tab --active'));
  tabsContent.forEach(c=> c.classList.remove('operations_content--active'));

  // Activate tab
  clicked.classList.add('operations_tab --active');

  /// Activate content area 
  document
  .querySelector(`.operations_content--${clicked.dataset.tab}`)
  .classList.add('operations_tab --active');

});
*/

///////.................................................................//////////

////014 Passing Arguments to Event Handlers....

/*
///Menu fade animation
navigator.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav_link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    localStorage.style.opacity = this;
  }
});

/// passing "argument" into handler
navigator.addEventListener('mouseover', handleHover.bind(0,5));
navigator.addEventListener('mouseover', handleHover.bind(1));
*/

//////..........................................................................................////

/// 015 Implementing a Sticky Navigation_ The Scroll Event.....

/*
///Sticky Navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (this.window.scrollY > initialCoords.top)
    this.navigator.classList.add('sticky');
  else this.navigator.classList.add('sticky');
});
*/
