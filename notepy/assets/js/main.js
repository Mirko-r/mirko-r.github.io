/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false,
});

/*SCROLL HOME*/
sr.reveal(".w-100", { delay: 200 });
sr.reveal(".display-4", {origin: "left", delay: 200});
sr.reveal(".lead", {delay: 200})
sr.reveal(".mt-5", {origin: "bottom", delay:200})
