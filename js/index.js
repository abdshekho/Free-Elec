

//iconSide onclick
  document.querySelectorAll('.iconColor')[0].onclick = () => {
  document.querySelectorAll('.side')[0].classList.toggle('open');
  document.querySelectorAll('.iconColor i')[0].classList.toggle('fa-spin');
  document.querySelectorAll('.iconColor')[0].classList.toggle('openicon');
}

var mainColor = localStorage.getItem('color-option') == null ?
  getComputedStyle(document.documentElement).getPropertyValue('--maincolor')
  : localStorage.getItem('color-option');



// Start header
//Start declare elements header 
let   //menue icon
  menue = document.getElementsByClassName("toggle-menu")[0],
  menueul = document.getElementsByClassName("menue-ul")[0],
  menueone = document.querySelectorAll('.toggle-menu .one')[0],
  menuetow = document.querySelectorAll('.toggle-menu .tow')[0],
  menuethree = document.querySelectorAll('.toggle-menu .three')[0];
// end menue icon


// when clicking and side icon is open 
var AllDivWithoutSide = document.querySelectorAll('div:not(.side, .side div)');
var sideBar = document.querySelectorAll('.side')[0];
AllDivWithoutSide.forEach(i => {
  i.onclick = () => {
    if (sideBar.className == 'side open') {
      sideBar.classList.toggle('open')
      document.querySelectorAll('.iconColor i')[0].classList.toggle('fa-spin');
      document.querySelectorAll('.iconColor')[0].classList.toggle('openicon');
    }
  }
})






//Events of tags bar Scroll

//Start menue icon
menuetow.style.opacity = '1';
menue.onclick = () => {
  if (menueul.style.display == 'none') {
    menueul.style.display = 'flex';
    menueone.style.transform = ' rotate(-45deg)';
    menueone.style.backgroundColor = mainColor;

    menuethree.style.transform = ' rotate(45deg)';
    menuethree.style.backgroundColor = mainColor;

    menuetow.style.opacity = '0';
  }
  else if (menueul.style.display == '') {
    menueul.style.display = 'flex';
    menueone.style.transform = ' rotate(-45deg)';
    menueone.style.backgroundColor = mainColor;

    menuethree.style.transform = ' rotate(45deg)';
    menuethree.style.backgroundColor = mainColor;
    menuetow.style.opacity = '0';
  }


  else {
    menueul.style.display = 'none';
    menueone.style.transform = ' rotate(0)';
    menuethree.style.transform = ' rotate(0)';
    menuetow.style.opacity = '1';
    menuethree.style.backgroundColor = '';
    menueone.style.backgroundColor = '';

  }
}
// when clicking and menu icon is open 
var AllDivWithoutMenu = document.querySelectorAll('div:not(.toggle-menu, .toggle-menu li,.menue-ul,header div)');
var menu = document.querySelectorAll('.menue-ul')[0];

AllDivWithoutMenu.forEach(i => {
  i.addEventListener('click', () => {
    if (menu.style.display == 'flex') {
      menu.style.display = 'none'
      menueone.style.transform = ' rotate(0)';
      menuethree.style.transform = ' rotate(0)';
      menuetow.style.opacity = '1';
      menuethree.style.backgroundColor = '';
      menueone.style.backgroundColor = '';
    }
  })
})

//End menue icon
// End header


//Start declare main div
let
  landing = document.getElementsByClassName("landing")[0];


//Start landing

//Background random landing 
var backgroundInterval = setInterval(
  () => {
    var rand = Math.ceil(Math.random() * 7);

    landing.style.backgroundImage = `url(img/background/${rand}.jpg)`;

  }
  , 6000);
// End Background random landing 

























var logoColor = [];
logoColor.push(document.querySelectorAll('header img')[0])
logoColor.push(document.querySelectorAll('footer img')[0])
logoColor.push(document.querySelectorAll('.landing h2 img')[0])

chooseColor();


//colors
const colorList = document.querySelectorAll(".colors-list li");
document.documentElement.style.setProperty('--maincolor', localStorage.getItem('color-option'));
colorList.forEach(li => {
  li.className = "";
  // set localStorage of active
  if (li.dataset.count == localStorage.li) {
    li.className = "active"; 
  }
  li.addEventListener("click", (e) => {
    
    
    localStorage.setItem('li', e.target.dataset.count);

    for (var i = 0; i < colorList.length; i++) {
      if (colorList[i].className == 'active')
        colorList[i].className = "";
    }
    li.classList.toggle('active');
    mainColor = e.target.dataset.color;
    document.documentElement.style.setProperty('--maincolor', e.target.dataset.color);

    //set value of localStorage
    localStorage.setItem('color-option', e.target.dataset.color);
  
    chooseColor();

  });
});

function chooseColor(){
  logoColor.forEach(li => {
    if(mainColor == '#157bac'){
      li.style.filter = 'invert(31%) sepia(74%) saturate(1549%) hue-rotate(173deg) brightness(94%) contrast(84%)'
    
    }
    if(mainColor == '#c15151'){
      li.style.filter = 'invert(42%) sepia(39%) saturate(1086%) hue-rotate(316deg) brightness(89%) contrast(76%)'
    
    }
    if(mainColor == '#0a6575'){
      li.style.filter = 'invert(34%) sepia(17%) saturate(2041%) hue-rotate(141deg) brightness(91%) contrast(96%)'
    
    }
    if(mainColor == '#5eb98d'){
      li.style.filter = ' invert(73%) sepia(11%) saturate(1491%) hue-rotate(99deg) brightness(89%) contrast(84%)'
    
    }
    if(mainColor == '#648'){
      li.style.filter = 'invert(31%) sepia(12%) saturate(2482%) hue-rotate(227deg) brightness(94%) contrast(91%)'
    
    }

  })

}

// mode Backgroun Random
var randomButton = document.querySelectorAll('.side .random .btn span');


randomButton.forEach(span => {
  //onLoad
  if (span.dataset.check == localStorage.checkRandom) {
    span.className = 'active'
    if (span.dataset.check == 'no')
      clearInterval(backgroundInterval);
  }
  span.addEventListener('click', e => {

    localStorage.setItem('checkRandom', e.target.dataset.check);
    randomButton.forEach(span => {
      span.classList.remove('active')
    })
    e.target.classList.toggle('active');
    if (e.target.dataset.check == 'yes') {
      backgroundInterval = setInterval(
        () => {
          var rand = Math.ceil(Math.random() * 7);
          landing.style.backgroundImage = `url(img/background/${rand}.jpg)`;
        }
        , 6000);
    }
    if (e.target.dataset.check == 'no') {
      clearInterval(backgroundInterval);
    }
  })
});







// Animation 
var Animationspan = document.querySelectorAll('.Animation .btn span');

Animationspan.forEach(span => {
  if (span.dataset.check == localStorage.checkAnimation) {
    span.className = 'active';
    localStorage.checkAnimation == 'yes' ? landing.style.animation = 'backgroundLanding 60s linear  infinite' : landing.style.animation = 'nothing';


  }
  span.addEventListener('click', (e) => {
    localStorage.setItem('checkAnimation', e.target.dataset.check);

    Animationspan.forEach(span => {

      span.classList.remove('active');
    })
    e.target.classList.toggle('active')
    if (e.target.dataset.check == 'yes') {
      landing.style.animation = 'backgroundLanding 60s linear  infinite';
    }

    if (e.target.dataset.check == 'no') {
      landing.style.animation = 'nothing'
    }
  })
})


//Selectt background  img
var photos = document.querySelectorAll('.select-photo img');
landing.style.backgroundImage = `url(img/background/${localStorage.background}.jpg)`;
photos.forEach(el => {
  el.addEventListener('click', e => {
    localStorage.setItem('background', e.target.dataset.count);

    landing.style.backgroundImage = `url(img/background/${e.target.dataset.count}.jpg)`;
  })
})
if (localStorage.background == undefined)
  landing.style.backgroundImage = `url(img/background/${4}.jpg)`;









//rest Storage
var BReset = document.querySelectorAll('.side .ResetStorage')[0];
BReset.onclick = () => {
  localStorage.clear();
  location.reload();

}
//End restStorage


//End Option menu










//Start Scroll
scrolling.style.display = "none";
window.onscroll = () => {
  if (pageYOffset < 600 || pageYOffset == 0) {
    scrolling.style.display = "none";
  } else {
    scrolling.style.display = "block";
  }
};
scrolling.onclick = () => {
  window.scrollTo(0, 0);
};
          //End Scroll

