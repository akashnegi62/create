function animation() {
  let tl = gsap.timeline();
  tl.from("#first, #second, #third, #thire img", {
    opacity: 0,
    scale: 0,
    duration: 1,
    stagger: 0.3,
  });

  tl.from("#third-img", {
    y: 100,
    opacity: 0,
    duration: 0.3,
  });

  // ******** IMAGES EFFECTS *********

  if (innerWidth > 600) {
    tl.from("#img-div", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section2",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
  } else {
    tl.from("#img1,#img2", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section2",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    });

    tl.from("#img3,#img4", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section2",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
      },
    });

    tl.from("#img5,#img6", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section2",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 20%",
        scrub: 1,
      },
    });
  }

  // ******** COUNTING EFFECTS *********

  if (innerWidth > 600) {
    tl.from("#counting-div", {
      opacity: 0,
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#img-div",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: 1,
      },
    });
  } else {
    tl.from("#counting-div", {
      opacity: 0,
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#img-div",
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: "top -30%",
        scrub: 1,
      },
    });
  }

  tl.from("#section3 #video-div #video1, #video2, #video3, #video4", {
    transform: "translateY(300px)",
    duration: 1,
    scrollTrigger: {
      trigger: "#section3",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top -100%",
      scrub: 1,
    },
  });

  tl.from("#section4 .content img", {
    opacity: 0,
    scale: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#section4",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top 70%",
      scrub: 1,
    },
  });

  // ******** SLIDER 1 EFFECTS *********

  if (innerWidth > 600) {
    tl.to(".slider-div", {
      transform: "translateX(100%)",
      duration: 1,
      scrollTrigger: {
        trigger: "#section4",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top -800%",
        scrub: 1,
      },
    });
  } else {
    tl.to(".slider-div", {
      transform: "translateX(10%)",
      duration: 1,
      scrollTrigger: {
        trigger: "#section4",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top -40%",
        scrub: 1,
      },
    });
  }

  // ******** SLIDER 2 EFFECTS *********

  if (innerWidth > 600) {
    tl.to(".slider-div2", {
      transform: "translateX(-100%)",
      duration: 1,
      scrollTrigger: {
        trigger: "#section4",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top -800%",
        scrub: 1,
      },
    });
  } else {
    tl.to(".slider-div2", {
      transform: "translateX(-50%)",
      duration: 1,
      scrollTrigger: {
        trigger: "#section4",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top -40%",
        scrub: 1,
      },
    });
  }

  // ******** BOX EFFECTS *********
  function box() {
    if (innerWidth > 600) {
      tl.from(".box", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#section5",
          scroller: "body",
          // markers: true,
          start: "top 20%",
          end: "top 0%",
          scrub: 1,
        },
      });
    } else {
      tl.from("#box1", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#section5",
          scroller: "body",
          // markers: true,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
      });
      tl.from("#box2", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#section5",
          scroller: "body",
          // markers: true,
          start: "top 0%",
          end: "top -30%",
          scrub: 1,
        },
      });
      tl.from("#box3", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#section5",
          scroller: "body",
          // markers: true,
          start: "top -70%",
          end: "top -100%",
          scrub: 1,
        },
      });
    }
  }
  box();

  // ******** CARD EFFECTS *********

  function card() {
    if (innerWidth > 600) {
      tl.to("#card1", {
        transform: "translateY(100px)",
        scale: 0.8,
        scrollTrigger: {
          trigger: "#section6",
          scroller: "body",
          // markers: true,
          start: "top 50%",
          end: "top 0%",
          scrub: 1,
        },
      });

      tl.to("#card2", {
        transform: "translateY(100px)",
        scale: 0.8,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#section6",
          scroller: "body",
          // markers: true,
          start: "top -60%",
          end: "top -90%",
          scrub: 1,
        },
      });

      tl.to("#card3", {
        transform: "translateY(100px)",
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: "#section6",
          scroller: "body",
          // markers: true,
          start: "top -140%",
          end: "top -190%",
          scrub: 1,
        },
      });

      tl.to("#card4", {
        transform: "translateY(100px)",
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: "#section6",
          scroller: "body",
          // markers: true,
          start: "top -220%",
          end: "top -270%",
          scrub: 1,
        },
      });

      tl.to("#card5", {
        transform: "translateY(100px)",
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: "#section6",
          scroller: "body",
          // markers: true,
          start: "top -310%",
          end: "top -350%",
          scrub: 1,
        },
      });
    } else{}
  }
  card();

  // ******** BAISC GROWHT VIRAL EFFECTS *********

  if (innerWidth > 600) {
    tl.from(".basic, .growth, .viral", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.8,
      scrollTrigger: {
        trigger: "#section8",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -30%",
        scrub: 1,
      },
    });
  } else if(innerWidth < 600) {
    tl.from(".basic", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section8",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -30%",
        scrub: 1,
      },
    });

    tl.from(".growth", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section8",
        scroller: "body",
        // markers: true,
        start: "top -40%",
        end: "top -60%",
        scrub: 1,
      },
    });

    tl.from(".viral", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section8",
        scroller: "body",
        // markers: true,
        start: "top -130%",
        end: "top -150%",
        scrub: 1,
      },
    });
  }else{}
}
animation();
function sticky() {
  if (innerWidth > 600) {
    window.addEventListener("scroll", function () {
      let nav = this.document.querySelector(".navbar");
      nav.classList.toggle("sticky", this.window.scrollY > 0);
    });
  } else {
    window.addEventListener("scroll", function () {
      let head = this.document.querySelector("header");
      head.classList.toggle("sticky-mobile", this.window.scrollY > 0);
    });
  }
}
sticky();

function menubtn() {
  let menu = document.querySelector("#menu");
  let menuW = document.querySelector(".menu-wrapper");
  let flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      menuW.style.top = "0";
      menu.style.backgroundColor = "#FE7F22";
      menu.style.padding = "2vw";
      menu.style.borderRadius = "2vw";

      flag = 1;
    } else {
      menuW.style.top = "-200%";
      menu.style.backgroundColor = "";
      flag = 0;
    }
  });

  let menuCA = document.querySelectorAll(".menu-content a");
  menuCA.forEach((elem) => {
    elem.addEventListener("click", function () {
      menuW.style.top = "-200%";
      menu.style.backgroundColor = "";
      flag = 0;
    });
  });
}
menubtn();
