"use strict";

function testimonials() {
  gsap.registerPlugin(ScrollTrigger);
  var el = document.querySelectorAll(".c-testimonial");
  Array.from(el).forEach(function (item) {
    var image1 = item.querySelector('.c-testimonial__img--1');
    if (image1) {
      if (item.classList.contains('c-testimonial--1')) {
        gsap.fromTo(image1, {
          bottom: "10%"
        }, {
          bottom: "20%",
          ease: Power4.easeIn,
          scrollTrigger: {
            start: "top 80%",
            // when the top of the trigger hits the top of the viewport
            end: "bottom 20%",
            // end after scrolling 500px beyond the start
            trigger: item,
            toggleActions: "restart pause reverse pause",
            scrub: 1
          }
        });
      } else if (item.classList.contains('c-testimonial--2')) {
        gsap.fromTo(image1, {
          bottom: "10%"
        }, {
          bottom: "20%",
          ease: Power4.easeIn,
          scrollTrigger: {
            start: "top 80%",
            // when the top of the trigger hits the top of the viewport
            end: "bottom 20%",
            // end after scrolling 500px beyond the start
            trigger: item,
            toggleActions: "restart pause reverse pause",
            scrub: 1
          }
        });
      } else if (item.classList.contains('c-testimonial--3')) {
        gsap.fromTo(image1, {
          bottom: "-5%"
        }, {
          bottom: "10%",
          ease: Power4.easeIn,
          scrollTrigger: {
            start: "top 80%",
            // when the top of the trigger hits the top of the viewport
            end: "bottom 20%",
            // end after scrolling 500px beyond the start
            trigger: item,
            toggleActions: "restart pause reverse pause",
            scrub: 1
          }
        });
      }
    }
    var image2 = item.querySelector('.c-testimonial__img--2');
    if (image2) {
      if (item.classList.contains('c-testimonial--1')) {
        gsap.fromTo(image2, {
          top: "10%"
        }, {
          top: "20%",
          ease: Power4.easeIn,
          scrollTrigger: {
            start: "top 80%",
            // when the top of the trigger hits the top of the viewport
            end: "bottom 20%",
            // end after scrolling 500px beyond the start
            trigger: item,
            toggleActions: "restart pause reverse pause",
            scrub: 2
          }
        });
      } else if (item.classList.contains('c-testimonial--2')) {
        gsap.fromTo(image2, {
          top: "15%"
        }, {
          top: "35%",
          ease: Power1.easeIn,
          scrollTrigger: {
            start: "top 95%",
            // when the top of the trigger hits the top of the viewport
            end: "top 10%",
            // end after scrolling 500px beyond the start
            trigger: item,
            toggleActions: "restart pause reverse pause",
            scrub: 2
          }
        });
      } else if (item.classList.contains('c-testimonial--3')) {
        gsap.fromTo(image2, {
          top: "-5%"
        }, {
          top: "10%",
          ease: Power4.easeIn,
          scrollTrigger: {
            start: "top 80%",
            // when the top of the trigger hits the top of the viewport
            end: "bottom 20%",
            // end after scrolling 500px beyond the start
            trigger: item,
            toggleActions: "restart pause reverse pause",
            scrub: 2
          }
        });
      }
    }
    var image3 = item.querySelector('.c-testimonial__img--3');
    if (image3) {
      if (item.classList.contains('c-testimonial--1')) {
        gsap.fromTo(image3, {
          bottom: "-5%"
        }, {
          top: "-5%",
          ease: Power4.easeIn,
          scrollTrigger: {
            start: "top 80%",
            // when the top of the trigger hits the top of the viewport
            end: "bottom 20%",
            // end after scrolling 500px beyond the start
            trigger: item,
            toggleActions: "restart pause reverse pause",
            scrub: 3
          }
        });
      }
    }
  });
}
testimonials();