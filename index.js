

let modal = document.querySelector('#registr');
let login = document.querySelector('#login');
let menu = document.querySelector('.navbar');
let hamMenu = document. querySelector(".hamMenu");
let arrowTop = document.querySelector('#arrowTop');
function opened(arg){
    arg.classList.add ('show');
    console.log(modal)
}

modal.addEventListener('click', function(event){
    if(event.target == this){
    modal.classList.remove ('show');
    }
});

login.addEventListener('click', function(event){
    if(event.target == this){
        closed(login);   
    }
})
function closed(arg){
    arg.classList.remove ('show');
}

hamMenu.addEventListener('click', function(){
    console.log(1);
    menu.classList.toggle('show');
    if(hamMenu.innerHTML === '<i class="bi bi-x-lg"></i>'){
        hamMenu.innerHTML = '<i class="bi bi-list"></i>';
    } else{
        hamMenu.innerHTML = '<i class="bi bi-x-lg"></i>';
    }
    } );

    arrowTop.onclick = function() {
        window.scrollTo(pageXOffset, 0);
      };
  
      window.addEventListener('scroll', function() {
        arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
      });
        
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1.5,
    
    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    570: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    960: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

});

const swiper2 = new Swiper('.carousel-testimonial', {
    loop: true,
    spaceBetween: 100,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
    },
})


