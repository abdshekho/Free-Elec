// root
var mainColor = localStorage.getItem('color-option') == null?
getComputedStyle(document.documentElement).getPropertyValue('--maincolor')
 :localStorage.getItem('color-option');

        // Start header
//Start declare elements header 
let   //menue icon
    menue = document.getElementsByClassName("toggle-menu")[0],
    menueul = document.getElementsByClassName("menue-ul")[0],
    menueone = document.querySelectorAll('.toggle-menu .one')[0],
    menuetow = document.querySelectorAll('.toggle-menu .tow')[0],
    menuethree = document.querySelectorAll('.toggle-menu .three')[0],
    // end menue icon
    //tags header
  
    servicest = document.getElementsByClassName("servicest")[0],
    Portfoliot = document.getElementsByClassName("Portfoliot")[0],
    contactt = document.getElementsByClassName("contactt")[0];












// when clicking and side icon is open 
var AllDivWithoutSide = document.querySelectorAll('div:not(.side, .side div)');
var sideBar =document.querySelectorAll('.side')[0];
AllDivWithoutSide.forEach(i =>{
  i.onclick = ()=>{
      if(sideBar.className == 'side open'){
        sideBar.classList.toggle('open')
        document.querySelectorAll('.iconColor i')[0].classList.toggle('fa-spin');
        document.querySelectorAll('.iconColor')[0].classList.toggle('openicon');
      }
    }
  })





  //Events of tags bar Scroll



  //Start menue icon
  menuetow.style.opacity = '1';
menue.onclick = () =>{
    if(menueul.style.display == 'none'){
        menueul.style.display = 'flex';
        menueone.style.transform = ' rotate(-45deg)';
        menueone.style.backgroundColor = mainColor;

        menuethree.style.transform = ' rotate(45deg)';
        menuethree.style.backgroundColor = mainColor;

        menuetow.style.opacity = '0';
    }
    else if(menueul.style.display == ''){
        menueul.style.display = 'flex';
        menueone.style.transform = ' rotate(-45deg)';
        menueone.style.backgroundColor = mainColor;

        menuethree.style.transform = ' rotate(45deg)';
        menuethree.style.backgroundColor = mainColor;

        menuetow.style.opacity = '0';
    }


    else{
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
    var menu =document.querySelectorAll('.menue-ul')[0];
    
    AllDivWithoutMenu.forEach(i =>{
      i.addEventListener('click',()=>{
        if(menu.style.display == 'flex'){
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

              //side list menu

//iconSide onclick
document.querySelectorAll('.iconColor')[0].onclick = () =>{
  document.querySelectorAll('.side')[0].classList.toggle('open');
  document.querySelectorAll('.iconColor i')[0].classList.toggle('fa-spin');
  document.querySelectorAll('.iconColor')[0].classList.toggle('openicon');
  }


  //colors
  const colorList = document.querySelectorAll(".colors-list li");
  document.documentElement.style.setProperty('--maincolor',localStorage.getItem('color-option'));
  colorList.forEach(li =>{
      li.className  = "";
      // set localStorage of active
      if(li.dataset.count == localStorage.li){
          li.className = "active";
      }
      li.addEventListener("click",(e)=>{
          
          localStorage.setItem('li',e.target.dataset.count);
          
          for(var i=0;i<colorList.length;i++){
              if(colorList[i].className == 'active')
              colorList[i].className = "";
          }
          li.classList.toggle('active');
          mainColor = e.target.dataset.color;
          document.documentElement.style.setProperty('--maincolor',e.target.dataset.color);
  
          //set value of localStorage
          localStorage.setItem('color-option',e.target.dataset.color);
          
      });
  });





    //rest Storage
    var BReset = document.querySelectorAll('.side .ResetStorage')[0];
    BReset.onclick = ()=>{
      localStorage.clear();
      location.reload();
      
    }
//End restStorage
  

//End Option menu










          //Start Scroll
    scrolling.style.display = "none";
window.onscroll = () => {
  if (pageYOffset < 600 ||pageYOffset == 0) {
    scrolling.style.display = "none";
  } else {
    scrolling.style.display = "block";
  }
};
scrolling.onclick = () => {
  window.scrollTo(0, 0);
};
          //End Scroll


//Start calc Text area
var maxLength = text.getAttribute("maxlength");
text.oninput = function () {
  count1.innerHTML = text.value.length + "/100";
  count2.innerHTML = this.value.split(" ").length;

  if (this.value.length == 100) {
    count1.style.color = "red";
  }
  if (this.value == " " || this.value == "  ") {
    this.value = this.value.replace(" ", "");
  }

  this.value = this.value.replace("  ", " ");
};
//End calc Text area

//Start Effect input 
var labelPlace = document.querySelectorAll('.contact .content form .label');
var inputField = document.querySelectorAll('.contact .content form .main-input');
inputField.forEach(
  (input, k)=>{
    input.onfocus = ()=>{
      input.style.borderColor = mainColor;
      // labelPlace[k].style.fontWeight = '600';
      
      setInterval(()=>{
        
        if(input.value.length >= 0){
      input.style.borderColor = mainColor;

          labelPlace[k].style.color = mainColor;
          labelPlace[k].style.top = '-10px';
          labelPlace[k].style.left = '80px';
          labelPlace[k].style.zIndex = '2';

        }
      },100);

    }

  }
)
//End  Effect input 

//Start copy number
var phonNumber = document.querySelectorAll('.way span');
var ways = document.querySelectorAll('.way')
var note = document.getElementById('iscopy');

ways.forEach(m=>{
  m.addEventListener('click',()=>{
    var num = m.childNodes[3].textContent.slice(m.childNodes[3].textContent.indexOf('+')).replace(' ','').replace(' ','').replace(' ','');
        navigator.clipboard.writeText(num)
        note.style.opacity = 1;

        setTimeout(()=>{
          note.style.opacity = 0;
        },1000)

  })
})

var nw = window.getComputedStyle(document.querySelector('.way'), ':after');

ways[0].addEventListener('click',(event)=>{
  event.target.setAttribute('data-before', 'anything');
})
          //End contact
