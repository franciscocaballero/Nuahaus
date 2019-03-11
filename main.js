window.odnAppId = '55f1d8f3a7f9095312620c51';
window.odnApiKey = '5124f32117f91fb66299b9756991ce2b2c87d6fb';



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