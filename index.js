



let modal = document.querySelector('#registr');
let login = document.querySelector('#login');
let menu = document.querySelector('.navbar');
let burger = document. querySelector(".header__burger");
let arrowTop = document.querySelector('#arrowTop');
let buttons = document.querySelector('.navbar__buttons');
function opened(arg){
    arg.classList.add ('show');
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


burger.addEventListener('click', function(){
    menu.classList.toggle('show');
    if(burger.innerHTML === '<i class="bi bi-x-lg"></i>'){
        burger.innerHTML = '<i class="bi bi-list"></i>';
    } else{
        burger.innerHTML = '<i class="bi bi-x-lg"></i>';
    }
    } );

    arrowTop.onclick = function() {
        window.scrollTo(pageXOffset, 0);
      };
  
      window.addEventListener('scroll', function() {
        arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
      });

let form = document.forms.form;
let email = form.elements.email;
console.log(email);
email.onblur = function() {
  if (!email.value.includes('@')) { // не email
   alert('Пожалуйста, введите правильный email.');
  }
};
  
        
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    
    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    350: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
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
    spaceBetween: 70,
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 570px
      570: {
        // slidesPerView: 1,
        spaceBetween: 80,
      },
      // when window width is >= 960px
      960: {
        // slidesPerView: 1,
        spaceBetween: 100,
      },
      // when window width is >= 1200px
      1200: {
        // slidesPerView: 1,
        spaceBetween: 100,
      }
    },
  
    navigation: {
        nextEl: '.carousel-testimonial .swiper-button-next',
        prevEl: '.carousel-testimonial .swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

