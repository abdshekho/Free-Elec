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


var logoColor = [];
logoColor.push(document.querySelectorAll('header img')[0])
logoColor.push(document.querySelectorAll('footer img')[0])


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



function chooseColor() {
    logoColor.forEach(li => {
        if (mainColor == '#157bac') {
            li.style.filter = 'invert(31%) sepia(74%) saturate(1549%) hue-rotate(173deg) brightness(94%) contrast(84%)'

        }
        if (mainColor == '#c15151') {
            li.style.filter = 'invert(42%) sepia(39%) saturate(1086%) hue-rotate(316deg) brightness(89%) contrast(76%)'

        }
        if (mainColor == '#0a6575') {
            li.style.filter = 'invert(34%) sepia(17%) saturate(2041%) hue-rotate(141deg) brightness(91%) contrast(96%)'

        }
        if (mainColor == '#5eb98d') {
            li.style.filter = ' invert(73%) sepia(11%) saturate(1491%) hue-rotate(99deg) brightness(89%) contrast(84%)'

        }
        if (mainColor == '#648') {
            li.style.filter = 'invert(31%) sepia(12%) saturate(2482%) hue-rotate(227deg) brightness(94%) contrast(91%)'

        }

    })

}










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























// Start filtering main products
var tabMain = Array.from(document.querySelectorAll('.shuffle li'));
var boxProuduct = document.querySelectorAll('.imgs-container .box');
var box = Array.from(boxProuduct);

tabMain.forEach(t => {
    t.addEventListener('click', () => {
        tabMain.forEach(o => {
            o.classList.remove('active');
            t.classList.add('active');

        })
    })
    t.addEventListener('click', manageItem)
})
function manageItem() {
    box.forEach(i => {
        i.style.display = 'none';
    })
    document.querySelectorAll(this.dataset.f).forEach(i => {
        i.style.display = 'block'
        document.querySelectorAll('.inv')[0].parentElement.style.display = 'none'
        document.querySelectorAll('.accessories')[0].parentElement.style.display = 'none'
    })
}
//End filltering main products


//Start filltering inverter-tab


var tabsInverter = document.querySelectorAll('.inverter-tab li');
var proInverter = document.querySelectorAll('.imgs-container .two');

//when inverterTab is active...
var inverterTab = document.querySelectorAll('.shuffle li')[2];
inverterTab.addEventListener('click', () => {
    tabsInverter.forEach(o => {
        o.classList.remove('active');
        tabsInverter[0].classList.add('active')
    })
    document.querySelectorAll('.inv')[0].parentElement.style.display = 'block';
    document.querySelectorAll('.inv')[0].style.display = 'block';

})


tabsInverter.forEach(t => {
    t.addEventListener('click', () => {
        tabsInverter.forEach(o => {
            o.classList.remove('active');
            t.classList.add('active')
        })
    })
    t.addEventListener('click', () => {
        proInverter.forEach(o => {
            o.style.display = 'none'
        })

        tabsInverter.forEach(i => {
            document.querySelectorAll(t.dataset.f).forEach(j => {
                j.style.display = 'block'

            })


        })

    })

})

//End filltering inverter-tab

















//Start filltering accessories



var tabsAces = document.querySelectorAll('.accessories-tab li');
var proAces = document.querySelectorAll('.imgs-container .four');


//when accessoriesTab is active...
var accessoriesTab = document.querySelectorAll('.shuffle li');
accessoriesTab[4].addEventListener('click', () => {
    tabsAces.forEach(o => {
        o.classList.remove('active');
        tabsAces[0].classList.add('active')
    })
    document.querySelectorAll('.accessories')[0].parentElement.style.display = 'block';
    document.querySelectorAll('.accessories')[0].style.display = 'block';

    document.querySelectorAll('.inv')[0].parentElement.style.display = 'none';
})

tabsAces.forEach(t => {
    t.addEventListener('click', () => {
        tabsAces.forEach(o => {
            o.classList.remove('active');
            t.classList.add('active')
        })
    })
    t.addEventListener('click', () => {
        proAces.forEach(o => {
            o.style.display = 'none'
        })

        tabsAces.forEach(i => {
            document.querySelectorAll(t.dataset.f).forEach(j => {
                j.style.display = 'block'

            })


        })

    })

})

//End filltering accessories
