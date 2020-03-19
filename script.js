let links = document.querySelectorAll(".nav-link");

function navColoring(activeNum, newNum){
        links[activeNum].style.color = "#FFFFFF";
        links[newNum].style.color = "#f06c64"
}

let activeNum = 1;
window.addEventListener('scroll', function() {
    let newNum;
    if(pageYOffset >= 0 && pageYOffset <= 600){
        newNum = 0;
    }
    else if(pageYOffset > 600 && pageYOffset <= 1100){
        newNum = 1;
    }
    else if(pageYOffset > 1100 && pageYOffset <= 1950){
        newNum = 2;
    }
    else if(pageYOffset > 1950 && pageYOffset < 2500){
        newNum = 3;
    }
    else{newNum = 4;}

    navColoring(activeNum, newNum);
    activeNum = newNum;
});

let sliderBox = document.querySelector("#slider-box"),
    leftArr = document.querySelector("#arrow-pre"),
    rigthArr = document.querySelector("#arrow-post"),
    imagineOne = document.querySelector(".iphone-vertical"),
    screenMain = document.querySelectorAll(".screen"),
    screenMonitoring= [true, true, true];


leftArr.addEventListener("click", function(){

    transformItem();
});
rigthArr.addEventListener("click", function(){

    transformItem();
});


function transformItem() {
    if(imagineOne.classList.contains("iphone-vertical")){
        // console.log("nen z");
        screenMonitoring.forEach(function (item, i){
            screenMonitoring[i] = false;
            screen(i);
        });
        imagineOne.src = "assets/slider-content-2.png";
        imagineOne.classList.replace("iphone-vertical", "iphone-vertical-2");
        screenMain[0].classList.replace("first-but", "page-first-but");
        screenMain[1].classList.replace("sec-but", "page-sec-but");
        screenMain[2].classList.replace("third-but", "page-third-but");
        sliderBox.style.backgroundColor = "#648bf0";
        sliderBox.style.borderBottomColor = "#648bf0";

    }
    else if(imagineOne.classList.contains("iphone-vertical-2")){
        screenMonitoring.forEach(function (item, i){
            screenMonitoring[i] = false;
            screen(i);
        });
        imagineOne.classList.replace("iphone-vertical-2", "iphone-vertical");
        imagineOne.src = "assets/iPhones.png";
        screenMain[0].classList.replace("page-first-but","first-but");
        screenMain[1].classList.replace("page-sec-but", "sec-but");
        screenMain[2].classList.replace("page-third-but", "third-but");
        sliderBox.style.backgroundColor = "#f06c64";
        sliderBox.style.borderBottomColor = "#EA676B";

    }
}


screenMain.forEach(function (item, i ) {
    item.addEventListener("click", function () {
        screen(i);
    })
});

function screen(i) {
    if(screenMonitoring[i]) {
        screenMain[i].style.opacity = "1";
        screenMonitoring[i] = false;
    }
    else{
        screenMain[i].style.opacity = "0";
        screenMonitoring[i] = true;
    }

}
