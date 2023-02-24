setTimeout(() => {
  $("#loader").fadeOut();
}, 2000);

setTimeout(() => {
  let home_1 = document.querySelector('#home_1');
  home_1.classList.remove('animate__animated', 'animate__fadeInUp');

  setTimeout(() => {
    home_1.classList.add('animate__animated', 'animate__fadeInUp');
  }, 10);

  let home_2 = document.querySelector('#home_2');
  home_2.classList.remove('animate__animated', 'animate__bounceInLeft');

  setTimeout(() => {
    home_2.classList.add('animate__animated', 'animate__bounceInLeft');
  }, 10);

  let home_3 = document.querySelector('#home_3');
  home_3.classList.remove('animate__animated', 'animate__fadeInUp');

  setTimeout(() => {
    home_3.classList.add('animate__animated', 'animate__fadeInUp');
  }, 10);

}, 2300);

// document.querySelector("#home_3").addEventListener("insideViewport", (event) => {
//   home_3.classList.remove('animate__animated', 'animate__fadeInUp');

//   setTimeout(() => {
//     home_3.classList.add('animate__animated', 'animate__fadeInUp');
//   }, 200);

// }, false);

document.documentElement.style.setProperty('--animate-duration', '1.2s');

let navBar = document.querySelector("#navbar");
let navBarPadding = navBar.offsetHeight;
let pageState = {};
let url = "";

let pageSection = document.querySelectorAll("section.page");
const repairSection = (pageSection) => {
  pageSection.forEach((element) => {
    element.style.paddingTop = 65 + "px";
  });
}

let allRoutes = document.querySelectorAll(".route");

allRoutes.forEach(element => {
  element.addEventListener("click", (event) => {
    event.preventDefault();

    url = element.getAttribute("href");
    route(url);
  })
});

window.onload = function () {
  repairSection(pageSection);
  engageFaq();

  //if (window.location.hash == '') {
    //route("#home");
  //} 
  
  if (window.location.hash) {
    route(window.location.hash);
  }
}

window.onpopstate = function () {
  url = window.location.hash;
  route(url);
  pageState.pageHash = url;
}

const route = url => {
  if (window.location.hash != url) {
    pageState.pageHash = url;
    doScroll(url);
    window.history.pushState(pageState, '', url);
  } else {
    doScroll(url);
    pageState.pageHash = url;
    window.history.replaceState(pageState, '', url);
  }
}

const doScroll = element => {
  let elemOffset = document.querySelector(element).offsetTop;
  window.scrollTo(0, elemOffset);

  //Add Animation To The Scrolled In Pages
}

const do404 = () => {
  window.location = window.location.hostname + "/404";
}

let menuBars = document.querySelector(".menu_bars");
let navContents = $("#nav_contents");
let navContentsAnchor = $("#nav_contents li a");

var open = false;

const openMenu = () => {
  menuBars.classList.remove("close");
  menuBars.classList.add("open");

  navContents.removeClass("fadeOut");
  navContents.addClass("fadeIn");
}

const closeMenu = () => {
  menuBars.classList.remove("open");
  menuBars.classList.add("close");

  navContents.removeClass("fadeIn");
  navContents.addClass("fadeOut");
}
const resizeNavs = () => {
  if (window.innerWidth <= 850) {
    navContents.addClass("mobile");
    closeMenu(menuBars);
  } else {
    navContents.removeClass("mobile");
  }
}

window.onresize = function () {
  resizeNavs();
  repairSection(pageSection);
  engageFaq();

}

resizeNavs();

menuBars.addEventListener("click", (event) => {
  mobileNav(menuBars);
});

const mobileNav = (menuBars) => {
  if (open == false) {
    openMenu(menuBars);
    open = true;
  } else {
    closeMenu(menuBars);
    open = false;
  }
}

navContentsAnchor.click(function () {
  mobileNav(menuBars);
});

var slider = document.querySelectorAll(".slider__title");

slider.forEach((element, index, array) => {
  element.addEventListener('click', () => {
    $(element.nextElementSibling).slideToggle('fast');
  });
});

const engageFaq = () => {
  $(".slider__content").css('width', $(".slider__title").eq(0).outerWidth() + "px");
}

engageFaq();