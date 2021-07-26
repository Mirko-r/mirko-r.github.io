/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


sr.reveal('.section-title', { delay: 200 })
sr.reveal('#canvas', { delay: 200 })
sr.reveal('.player', { delay: 300 })


sr.reveal('.episodes', { delay: 200 })

sr.reveal('.mx-12', { origin: 'left', delay: 200 })

sr.reveal('.host-item', { origin: 'bottom', delay: 300 })