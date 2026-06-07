const lockButton = document.getElementById("lockButton");

const lockScreen = document.getElementById("lockScreen");

const music = document.getElementById("bgMusic");

lockButton.addEventListener("click", () => {

  music.volume = 0;

  music.play();

  let volume = 0;

  const fade = setInterval(() => {

    if (volume < 0.12) {

      volume += 0.005;

      music.volume = volume;

    } else {

      clearInterval(fade);
    }

  }, 300);

  lockScreen.style.opacity = "0";

  setTimeout(() => {

    lockScreen.style.display = "none";

  }, 1500);
});

const typingText = document.getElementById("typingText");

const enterBtn = document.getElementById("enterBtn");

const introMessage = `
No sé exactamente en qué momento
te volviste tan importante para mí.

Tal vez fue escuchándote hablar de libros.

O viendo la forma tan linda
que tienes de cuidar a los niños.

O simplemente porque contigo
todo se siente diferente.

Me gustas muchísimo, Laura.

Y honestamente...
sí, me pongo celoso a veces 😒

Pero es porque me importas más
de lo que debería admitir tranquilamente.

Tu sonrisa me desarma.
Tu voz se queda en mi cabeza.
Y cuando apareces,
mi día automáticamente mejora un poco.

Así que bueno...

ya que claramente ocupas demasiado espacio en mi mente...

tengo que preguntarlo.
`;

let index = 0;

function typeEffect() {

  if (index < introMessage.length) {

    typingText.innerHTML +=
      introMessage.charAt(index);

    index++;

    setTimeout(typeEffect, 100);

  } else {

    enterBtn.style.display =
      "inline-block";
  }
}

typeEffect();

enterBtn.addEventListener("click", () => {

  document.getElementById("intro")
    .style.display = "none";

  document.getElementById("mainSite")
    .style.display = "block";
});

const noBtn =
  document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

  const container =
    document.querySelector(".buttons");

  const maxX =
    container.clientWidth - 140;

  const maxY =
    50;

  const randomX =
    Math.random() * maxX;

  const randomY =
    Math.random() * maxY;

  noBtn.style.left =
    `${randomX}px`;

  noBtn.style.top =
    `${randomY}px`;
});

document
  .getElementById("yesBtn")
  .addEventListener("click", () => {

    document
      .querySelector(".question-box")
      .style.display = "none";

    document
      .getElementById("finalScreen")
      .style.display = "block";

    setTimeout(() => {

      const finalDiv =
        document.createElement("div");

      finalDiv.classList.add("final-love");

      finalDiv.innerHTML =
        `<h1>te amo mucho 💛</h1>`;

      document.body.appendChild(finalDiv);

      setTimeout(() => {
        finalDiv.classList.add("show");
      }, 300);

    }, 2500);
  });