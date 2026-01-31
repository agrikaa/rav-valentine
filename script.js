/* Hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random()*2) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 700);

let noCount = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const char = document.getElementById("character");
const letterContainer = document.getElementById("letterContainer");
const letter = document.getElementById("letter");

noBtn.onclick = () => {
  noCount++;
  yesBtn.style.fontSize = (16 + noCount * 2) + "px";
  char.src = "https://media.tenor.com/uzTknCqPVBgAAAAm/tooji-bubududu.webp";
};

yesBtn.onclick = () => {
  char.src = "https://media.tenor.com/KGnViErYaD8AAAAm/abra%C3%A7ourso.webp";
  letterContainer.style.display = "flex";
};

letter.onclick = () => {
  letter.innerHTML = `
    My baby, you are my calm place, my biggest smile and my favorite person.  
    I LOVEEE U today, tomorrow, and always Rav💌
  `;
};
