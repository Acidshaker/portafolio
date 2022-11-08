window.sr = ScrollReveal();


let windowSize = window.innerWidth;

if (windowSize > 768) {
  sr.reveal(".navbar__list", {
    duration: 3000,
    origin: "right",
    distance: "300 px"
  });
}

sr.reveal(".vector__container", {
  duration: 2500,
  origin: "left",
  distance: "300 px"
});

if (windowSize > 768) {
  sr.reveal(".presentation__container--info", {
    duration: 2000,
    origin: "top",
    distance: "300 px"
  });
  // else {
  //   sr.reveal(".presentation__container--info", {
  //     duration: 2000,
  //     origin: "left",
  //     distance: "300 px"
  //   });
  // }


  sr.reveal(".social__container--items", {
    duration: 2000,
    origin: "right",
    distance: "300 px"
  });

  sr.reveal(".cv__container", {
    duration: 2000,
    origin: "right",
    distance: "300 px"
  });

  sr.reveal(".habilities", {
    duration: 2000,
    origin: "top",
    distance: "150 px"
  });

  sr.reveal(".about__container", {
    duration: 2000,
    origin: "top",
    distance: "150 px"
  });

  sr.reveal(".academy__container--item:nth-of-type(odd)", {
    duration: 2000,
    origin: "left",
    distance: "150 px"
  });

  sr.reveal(".academy__container--item:nth-of-type(even)", {
    duration: 2000,
    origin: "right",
    distance: "150 px"
  });

  sr.reveal(".habilities__info", {
    duration: 2000,
    origin: "top",
    distance: "150 px"
  });

  sr.reveal(".my-habilities__container--items:nth-of-type(odd)", {
    duration: 2000,
    origin: "bottom",
    distance: "150 px"
  });


  sr.reveal(".portfolio--title", {
    duration: 2000,
    origin: "left",
    distance: "150 px"
  });


  sr.reveal(".portfolio__container--card:nth-of-type(odd)", {
    duration: 2000,
    origin: "bottom",
    distance: "150 px"
  });

  sr.reveal(".portfolio__container--card:nth-of-type(even)", {
    duration: 2000,
    origin: "top",
    distance: "150 px"
  });

  sr.reveal(".contact__info", {
    duration: 2000,
    origin: "top",
    distance: "150 px"
  });

  sr.reveal(".contact__container--items", {
    duration: 2000,
    origin: "top",
    distance: "150 px"
  });

  sr.reveal(".footer__title", {
    duration: 3000,
    origin: "right",
    distance: "300 px"
  });

}
