
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
    menuethree = document.querySelectorAll('.toggle-menu .three')[0],
    // end menue icon

    //tags header
    servicest = document.getElementsByClassName("servicest")[0],
    products = document.getElementsByClassName("products")[0],
    contactt = document.getElementsByClassName("contactt")[0];


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
//iconSide onclick
document.querySelectorAll('.iconColor')[0].onclick = () => {
    document.querySelectorAll('.side')[0].classList.toggle('open');
    document.querySelectorAll('.iconColor i')[0].classList.toggle('fa-spin');
    document.querySelectorAll('.iconColor')[0].classList.toggle('openicon');
}

document.querySelectorAll('body').onclick = () => {

}
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

    });
});





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


