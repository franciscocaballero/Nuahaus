window.odnAppId = '55f1d8f3a7f9095312620c51';
window.odnApiKey = '5124f32117f91fb66299b9756991ce2b2c87d6fb';

let numberOfScans = 1;


function isVisible(element) {

    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -200;

    if(elementBox.top - window.innerHeight < distanceFromTop){
        return true;
    } else {
        return false;
    }
}


function scanDocument() {
    let sectionList = document.querySelectorAll(".hidden");
    sectionList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden');
        };
    });

    console.log(numberOfScans);
    numberOfScans++;
}

document.addEventListener("scroll", _.throttle(scanDocument, 500));



var scrollPositionY = window.scrollY;

window.addEventListener('scroll',function() {
   var navBar = document.querySelector(".navigation");
   scrollPositionY = window.scrollY;
    if (scrollPositionY >= 700) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
});





// var animateHTML = function() {
//     var elems;
//     var windowHeight;
//     function init() {
//       elems = document.querySelectorAll('.hidden');
//       windowHeight = window.innerHeight;
//       addEventHandlers();
//       checkPosition();
//     }
//     function addEventHandlers() {
//       window.addEventListener('scroll', checkPosition);
//       window.addEventListener('resize', init);
//     }
//     function checkPosition() {
//       for (var i = 0; i < elems.length; i++) {
//         var positionFromTop = elems[i].getBoundingClientRect().top;
//         if (positionFromTop - windowHeight <= 0) {
//           elems[i].className = elems[i].className.replace(
//             'hidden',
//             'fade-in-element'
//           );
//         }
//       }
//     }
//     return {
//       init: init
//     };
//   };
//   animateHTML().init();