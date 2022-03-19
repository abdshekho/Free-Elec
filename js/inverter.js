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

    //tags header
    // servicest = document.getElementsByClassName("servicest")[0],
    // products = document.getElementsByClassName("products")[0],
    // contactt = document.getElementsByClassName("contactt")[0];

    document.querySelectorAll('.iconColor')[0].onclick = () => {
        document.querySelectorAll('.side')[0].classList.toggle('open');
        document.querySelectorAll('.iconColor i')[0].classList.toggle('fa-spin');
        document.querySelectorAll('.iconColor')[0].classList.toggle('openicon');
    }
    
    
// when clicking and side icon is open 
const AllDivWithoutSide = document.querySelectorAll('div:not(.side, .side div,.iconColor,.iconColor i)');
var sideBar = document.querySelectorAll('.side')[0];


AllDivWithoutSide.forEach(i => {
    i.onclick = () => {
        if (sideBar.className == 'side open') {
            document.querySelectorAll('.side')[0].classList.toggle('open');
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

var iconColor = document.querySelectorAll('.iconColor')[0];

iconColor.onclick = () => {
    document.querySelectorAll('.side')[0].classList.toggle('open');

    
    document.querySelectorAll('.iconColor i')[0].classList.toggle('fa-spin');
    document.querySelectorAll('.iconColor')[0].classList.toggle('openicon');

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


var imgScreen = document.querySelectorAll('.view .details .screen')[0];

var barimg = document.querySelectorAll('.barimg img');


barimg.forEach(img => {
    img.addEventListener('click', () => {
        barimg.forEach(i => {

            i.classList.remove('active')
        })
        img.classList.add('active')
        imgScreen.style.opacity = '0';

        
        setTimeout(() => {
            imgScreen.src = `../../../img/${img.dataset.sr}.png`;
            myresult.style.backgroundImage = "url('" + img.src + "')";
            imgScreen.style.opacity = '1';
        }, 400)
    })
})
// var path = window. location. pathname;
// var page = path.split("/");

// Start img Zoom
/*create lens:*/
var lens = document.createElement("DIV");
lens.setAttribute("class", "img-zoom-lens");


function imageZoom(imgID, resultID) {
    var img,  result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    
    
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    result.style.backgroundImage = "url('" + img.src + "')";
    
    
    
    
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy ) + "px";

    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    // lens.addEventListener("touchmove", moveLens);
    // img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
        var pos, x, y;
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        /*calculate the position of the lens:*/
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /*prevent the lens from being positioned outside the image:*/
        if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
        if (y < 0) { y = 0; }
        /*set the position of the lens:*/
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /*display what the lens "sees":*/
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        // var le = document.querySelectorAll('.img-zoom-lens')[0];
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}
imageZoom("myimage", "myresult");
// var le = document.querySelectorAll('.img-zoom-lens')[0];


// when mouse leave 
var imgContainer = document.querySelectorAll('.img-zoom-container')[0];
myresult.style.display = 'none'
lens.style.display = 'none'
imgContainer.addEventListener('mouseleave',()=>{
    myresult.style.display = 'none'
    lens.style.display = 'none'            
})
imgContainer.addEventListener('mouseover',()=>{
    myresult.style.display = 'block'
    lens.style.display = 'block'
})

// End Zoom img




