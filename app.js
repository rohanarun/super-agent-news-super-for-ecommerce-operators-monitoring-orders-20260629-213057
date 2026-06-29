(function () {
  if (!window.gsap) return;

  gsap.from('.hero h1', {
    y: 24,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.hero-sub', {
    y: 24,
    opacity: 0,
    duration: 0.9,
    delay: 0.1,
    ease: 'power3.out'
  });

  gsap.from('.hero-actions', {
    y: 16,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
  });

  gsap.utils.toArray('.chapter').forEach(function (section) {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  });
})();