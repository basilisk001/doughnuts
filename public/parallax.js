document.addEventListener("mousemove", (e) => {
  const orbs = document.querySelectorAll(".orb");
  orbs.forEach((orb, index) => {
    const speed = 0.02 * (index + 1); // Vary speed per orb
    const x = (window.innerWidth / 2 - e.clientX) * speed;
    const y = (window.innerHeight / 2 - e.clientY) * speed;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
});
