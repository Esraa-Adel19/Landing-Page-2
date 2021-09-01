//Check Color Option//
let mainColors = localStorage.getItem("color-option");
if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', mainColors);
    //Remove Active Class From Color List//
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
    //Add Active Class For One Element On Color List === Local Storage Item//
    if (element.dataset.color === mainColors) {
        //Add Active Class//
        element.classList.add("active");
    }
    });


}
//Background Option//
let backgroundOption = true;

//Variable To Control Background Interval//
let backgroundInterval;

//Check If Local Storage Background Item//
let backgroundLocalItem = localStorage.getItem("background_option");

//Check If Background Local Storage Isn't Empty//
if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === 'true') {
        
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
//Remove Active Class//
document.querySelectorAll(".background span").forEach(element => {
    element.classList.remove("active");
});
if (backgroundLocalItem === 'true') {
    document.querySelector(".background .yes").classList.add("active");

} else {
    document.querySelector(".background .no").classList.add("active");

}

}

//Toggle-Spin-Class On Icon//
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    //Toggle Class For Rotation//
    this.classList.toggle("fa-spin");
//Toggle Class For Open//
document.querySelector(".settings-box").classList.toggle("open");  

};

//Switch Colors//
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        console.log(e.target.dataset.color);
        //Set Color on Root//
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        //Set Color On Local Storage//
        localStorage.setItem("color-option", e.target.dataset.color);
        
        handleActive(e);
    });
});

//Switch Background//
const randomBackgroundsElement = document.querySelectorAll(".background span");
//Loop on Span
randomBackgroundsElement.forEach(span => {
    //Click on Span
    span.addEventListener("click", (e) => {
        console.log(e.target.dataset.color);

        handleActive(e);


        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImg();
            localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        }
    });
});

//-Selelct-Landing-Page-Element//
let landingPage = document.querySelector(".landing-page");

//Get Array Of Images//
let imgsArray = ["space.png", "space2.jpg", "space3.jpg", "space4.jpg", "space5.jpg"];

//Function To Randomize Imgs//
function randomizeImg () {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            //Get Random Number//
                let randomNumber = Math.floor(Math.random() * imgsArray.length);
            
            //Change Background Image URL//
                landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
            },1000);
            
    }
}

randomizeImg();

/*Select Skills Selector*/
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
    /*Skills Offset-Top*/
    let skillsOffsetTop = ourSkills.offsetTop;

    /*Outer Height*/
    let skillsOuterHeight = ourSkills.offsetHeight;

    /*Window Height*/
    let windowHeight = this.innerHeight;

    /*Window Scroll Top*/
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
};

/*Popup Image In Gallery*/
 let ourGallery = document.querySelectorAll(".gallery img");

 ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        
        /*Overlay Element*/
        let overlay = document.createElement("div");

        /*Add class to overlay*/
        overlay.className = 'popup-overlay';

        /*Append overlay to body*/
        document.body.appendChild(overlay);

        /*Create Popup*/
        let popupBox = document.createElement("div");

        /*Add class to popup box*/
        popupBox.className = 'popup-box';

        if (img.alt !== null) {
            
            /*Create Heading*/
            let imgHeading = document.createElement("h3");

            /*Create Text For Heading*/
            let imgText = document.createTextNode(img.alt);

            /*Append The Text To Heading*/
            imgHeading.appendChild(imgText);

            /*Append Heading To Popup Box*/
            popupBox.appendChild(imgHeading);
        }

        /*Create the image*/
        let popupImage = document.createElement("img");

        /*Set Image Src*/
        popupImage.src = img.src;

        /*Add Image to Popup*/
        popupBox.appendChild(popupImage);

        /*Append Popup to Body*/
        document.body.appendChild(popupBox);

        /*Create Close Span*/
        let closeButton = document.createElement("span");

        /*Create Close Button*/
        let closeButtonText = document.createTextNode("x");

        /*Append Text To Close Button*/
        closeButton.appendChild(closeButtonText);

        /*Add Class To Close Button*/
        closeButton.className = 'close-button';

        /* Add Close Button To Popup Box */
        popupBox.appendChild(closeButton);

    });
 });

/* Close Popup */
document.addEventListener("click", function (e) {
    if (e.target.className == 'close-button') {
        
        /* Remove Current Popup */
        e.target.parentNode.remove();

        /* Remove Overlay */
        document.querySelector(".popup-overlay").remove();
    }
});

/* Select All Bullets */
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

/* Select All Links*/

const allLinks = document.querySelectorAll(".links a");

function scrollToSection(elements) {
    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'
        });
    });
});
}

scrollToSection(allBullets);
scrollToSection(allLinks);

/* Handle Active State */
function handleActive (event) {
    /* Remove Active Class */
    event.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

    });
    /* Add Active Class */
    event.target.classList.add("active");   
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {
    bulletsSpan.forEach( span => {
        span.classList.remove ("active");
    });

    if (bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");

    }
}

bulletsSpan.forEach(span => {
    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets-option", 'block');
        } else {

            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets-option", 'none');

        }
        handleActive(e);
    });
});

/* Reset Button */
document.querySelector(".reset").onclick = function () {

    localStorage.removeItem("color-option");
    localStorage.removeItem("background-option");
    localStorage.removeItem("bullets-option");

    /* Reload Window */

    window.location.reload();
};

/* Toggle Menu */
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open");
};

/* Close Menu On Click Anywhere */
document.addEventListener("click", (e) => {
    
    if (e.target !== toggleBtn && e.target !== tLinks) {

    /* Check If Menu Open */        

    if (tLinks.classList.contains("open")) {

        toggleBtn.classList.toggle("menu-active");

        tLinks.classList.toggle("open");
    }

    } 
});

/* Stop Propagation On Menu */
tLinks.onclick = function (e) {
    e.stopPropagation();
}