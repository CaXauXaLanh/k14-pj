// Xử lý header
const header = document.getElementById("sticky_nav");
let hoverItem = document.querySelectorAll(".header__nav-list li");
let img = document.createElement("img");
console.log(header)
img.src = "./assets/img/logokenh14_don.png"

let sticky = header.offsetTop;

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.pageYOffset > sticky);
  header.classList.toggle("sticky__header", window.pageYOffset > sticky);
  //   for (let index = 0; index < hoverItem.length; index++) {
  //           hoverItem[index].classList.toggle("after__hover",window.pageYOffset > sticky);        
  //   }
  //   let homeButton = document.querySelector(".header__nav-list .icon");
  //   if (window.pageYOffset > sticky) {
  //     homeButton.outerHTML = `
  //                             <li class="icon">
  //                                 <img src="./assets/img/logokenh14_don.png" alt="" class="logo">
  //                             </li>
  //     `
  //   }
  //   else {
  //     homeButton.outerHTML = `
  //                             <li class="icon">
  //                               <i class='bx bxs-home icon-home'></i>
  //                             </li>
  //                         `
  //   }
})

// // Xử lý slider

let listBox = document.querySelectorAll('.box');
let wrapperBox = document.querySelector('.slider-box');
let btnLeft = document.querySelector('.btnLeft');
let btnRight = document.querySelector('.btnRight');
let reviewDiv = document.querySelector('.slider');
let dots = document.querySelectorAll('.dot');

let widthItemAndMargin = reviewDiv.offsetWidth / 3;
let widthAllBox = widthItemAndMargin * listBox.length;
wrapperBox.style.width = `${widthAllBox}px`;
let dot = 0;
let count = 0;
let spacing = widthAllBox - 3 * widthItemAndMargin;

function make_slide() {
  listBox.forEach((element) => {
    element.style.width = `${widthItemAndMargin}px`;
  });

  btnRight.addEventListener('click', function () {
    count += widthItemAndMargin;
    dot++;
    if (dot == listBox.length - 2) {
      dot = 0;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[dot].className += " active";

    if (count > spacing) {
      count = 0;
    }
    wrapperBox.style.transform = `translateX(${-count}px)`;
  });

  btnLeft.addEventListener('click', function () {
    count -= widthItemAndMargin;
    if (dot == 0) {
      dot = listBox.length - 2;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dot--;
    // console.log(dot);s
    dots[dot].className += " active";
    if (count < -10) {
      count = spacing;
    }
    wrapperBox.style.transform = `translateX(${-count}px)`;
  });
}

function plusSlides(n) {
  count = 0;
  count += widthItemAndMargin * (n);
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[n].classList.add("active");

  console.log(count)
  if (count > spacing) {
    count = 0;
  }
  if (count < -10) {
    count = spacing;
  }
  wrapperBox.style.transform = `translateX(${-count}px)`;
}


make_slide()


// // Xử lý slider 2

let listBox2 = document.querySelectorAll('.box2');
let wrapperBox2 = document.querySelector('.slider-box2');
let btnLeft2 = document.querySelector('.btnLeft2');
let btnRight2 = document.querySelector('.btnRight2');
let reviewDiv2 = document.querySelector('.slider2');
let dots2 = document.querySelectorAll('.dot2');

let widthItemAndMargin2 = reviewDiv2.offsetWidth / 3;
let widthAllBox2 = widthItemAndMargin2 * listBox2.length;
wrapperBox2.style.width = `${widthAllBox2}px`;
let dot2 = 0;
let count2 = 0;
let spacing2 = widthAllBox2 - 3 * widthItemAndMargin2;

function make_slide2() {
  listBox2.forEach((element) => {
    element.style.width = `${widthItemAndMargin2}px`;
  });

  btnRight2.addEventListener('click', function () {
    count2 += widthItemAndMargin2;
    dot2++;
    if (dot2 == listBox2.length - 2) {
      dot2 = 0;
    }
    for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
    }
    dots2[dot2].className += " active";

    if (count2 > spacing2) {
      count2 = 0;
    }
    wrapperBox2.style.transform = `translateX(${-count2}px)`;
  });

  btnLeft2.addEventListener('click', function () {
    count2 -= widthItemAndMargin2;
    if (dot2 == 0) {
      dot2 = listBox2.length - 2;
    }
    for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
    }
    dot2--;
    // console.log(dot);s
    dots2[dot2].className += " active";
    if (count2 < -10) {
      count2 = spacing2;
    }
    wrapperBox2.style.transform = `translateX(${-count2}px)`;
  });
}

function plusSlides(n) {
  count2 = 0;
  count2 += widthItemAndMargin2 * (n);
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  dots2[n].classList.add("active");

  console.log(count2)
  if (count2 > spacing2) {
    count2 = 0;
  }
  if (count2 < -10) {
    count2 = spacing2;
  }
  wrapperBox2.style.transform = `translateX(${-count2}px)`;
}


make_slide2()

