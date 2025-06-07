document.addEventListener("DOMContentLoaded", () => {
  const numberOfStars = 100;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 2 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = Math.random() * 5 + 3;
    const delay = Math.random() * 5;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${y}px`;
    star.style.left = `${x}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    document.body.appendChild(star);
  }
});
