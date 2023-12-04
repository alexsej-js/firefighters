

// Swiper
const swiper = new Swiper('.swiper', {

    autoplay: {
      delay: 5000,
    },
    speed: 2000,
    // Optional parameters
    // loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

  });
  
  // Swiper2
  const swiper2 = new Swiper('.swiper2', {
    autoplay: {
      delay: 4000,
    },
    speed: 1000,
    // Optional parameters
    loop: true,
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  })


    // Swiper3
    const swiper3 = new Swiper('.swiper3', {
      autoplay: {
        delay: 4000,
      },
      speed: 1000,
      // Optional parameters
      loop: true,
      // Default parameters
      slidesPerView: 1,
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    })
