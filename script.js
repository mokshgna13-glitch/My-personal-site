/* =========================
   ANIMATED SPACE BACKGROUND
========================= */

const canvas =
document.getElementById(
  "spaceCanvas"
);

const ctx =
canvas.getContext(
  "2d"
);

let stars = [];

function resizeCanvas() {

  canvas.width =
  window.innerWidth;

  canvas.height =
  window.innerHeight;

}

resizeCanvas();

window.addEventListener(
  "resize",
  resizeCanvas
);


for (
  let i = 0;
  i < 220;
  i++
) {

  stars.push({

    x:
    Math.random()
    * window.innerWidth,

    y:
    Math.random()
    * window.innerHeight,

    size:
    Math.random()
    * 2,

    speed:
    0.1
    +
    Math.random()
    * 0.5

  });

}


function animateSpace() {

  ctx.clearRect(

    0,

    0,

    canvas.width,

    canvas.height

  );


  stars.forEach(
    star => {

      ctx.beginPath();

      ctx.arc(

        star.x,

        star.y,

        star.size,

        0,

        Math.PI * 2

      );

      ctx.fillStyle =
      "rgba(255,255,255,.8)";

      ctx.fill();


      star.y +=
      star.speed;


      if (
        star.y >
        canvas.height
      ) {

        star.y =
        -5;

        star.x =
        Math.random()
        * canvas.width;

      }

    }
  );


  requestAnimationFrame(
    animateSpace
  );

}

animateSpace();



/* =========================
   3D LAB
========================= */

const lab =
document.querySelector(
  ".lab-container"
);

const objects =
document.querySelectorAll(
  ".lab-object"
);

const labTitle =
document.getElementById(
  "labTitle"
);

const labText =
document.getElementById(
  "labText"
);

const closeInfo =
document.getElementById(
  "closeInfo"
);


lab.addEventListener(

  "mousemove",

  event => {

    const rect =
    lab.getBoundingClientRect();

    const x =
    event.clientX
    -
    rect.left;

    const y =
    event.clientY
    -
    rect.top;


    const rotateY =

    (
      x /
      rect.width
      -
      0.5
    )
    *
    8;


    const rotateX =

    (
      y /
      rect.height
      -
      0.5
    )
    *
    -8;


    lab.style.transform =

    `rotateX(
      ${rotateX}deg
    )
    rotateY(
      ${rotateY}deg
    )`;

  }

);


lab.addEventListener(

  "mouseleave",

  () => {

    lab.style.transform =

    "rotateX(0deg) rotateY(0deg)";

  }

);


objects.forEach(

  object => {

    object.addEventListener(

      "click",

      () => {

        labTitle.textContent =

        object.dataset.title;


        labText.textContent =

        object.dataset.text;

      }

    );

  }

);


closeInfo.addEventListener(

  "click",

  () => {

    labTitle.textContent =

    "Welcome to the Lab";


    labText.textContent =

    "Click one of the floating objects to learn more.";

  }

);



/* =========================
   TERMINAL
========================= */

const terminalInput =
document.getElementById(
  "terminalInput"
);

const terminalOutput =
document.getElementById(
  "terminalOutput"
);


const commands = {

  help:

`Available commands:

help
whoami
projects
goals
clear`,


  whoami:

`MOKSHGNA

Student
Developer
Creator
Future technology entrepreneur`,


  projects:

`CURRENT PROJECTS

• Personal Website
• M-01 Companion Concept
• AI Experiments
• Science Content
• Future Technology Ideas`,


  goals:

`MISSION

Learn deeply.

Build useful technology.

Create ambitious projects.

Keep improving.`

};


function runCommand(
  command
) {

  command =
  command
  .trim()
  .toLowerCase();


  if (
    command ===
    "clear"
  ) {

    terminalOutput
    .innerHTML =
    "";

    return;

  }


  const line =
  document.createElement(
    "p"
  );


  line.innerHTML =

  `<span class="terminal-green">
  mokshgna@lab:~$
  </span>

  ${command}`;


  terminalOutput
  .appendChild(
    line
  );


  const answer =
  document.createElement(
    "pre"
  );


  answer.textContent =

  commands[command]
  ||
  `Command not found:

"${command}"

Type "help".`;


  answer.style.whiteSpace =
  "pre-wrap";


  answer.style.color =
  "#aab5d0";


  terminalOutput
  .appendChild(
    answer
  );


  terminalOutput.scrollTop =

  terminalOutput.scrollHeight;

}


terminalInput.addEventListener(

  "keydown",

  event => {

    if (
      event.key ===
      "Enter"
    ) {

      runCommand(
        terminalInput.value
      );

      terminalInput.value =
      "";

    }

  }

);


document
.querySelectorAll(
  ".command-list button"
)
.forEach(

  button => {

    button.addEventListener(

      "click",

      () => {

        runCommand(
          button.dataset.command
        );

      }

    );

  }

);



/* =========================
   STARDUST GAME
========================= */

const gameArea =
document.getElementById(
  "gameArea"
);

const spaceship =
document.getElementById(
  "spaceship"
);

const startGame =
document.getElementById(
  "startGame"
);

const scoreElement =
document.getElementById(
  "score"
);

const bestElement =
document.getElementById(
  "bestScore"
);


let score = 0;

let playing = false;

let shipX = 50;


let bestScore =

Number(

  localStorage.getItem(
    "mokshgnaBestScore"
  )

)

|| 0;


bestElement.textContent =
bestScore;


document.addEventListener(

  "mousemove",

  event => {

    if (
      !playing
    )
    return;


    const rect =

    gameArea
    .getBoundingClientRect();


    let x =

    event.clientX
    -
    rect.left;


    x =

    Math.max(
      20,
      Math.min(
        rect.width - 20,
        x
      )
    );


    shipX =

    (
      x /
      rect.width
    )
    *
    100;


    spaceship.style.left =

    shipX
    +
    "%";

  }

);


function createStardust() {

  if (
    !playing
  )
  return;


  const star =
  document.createElement(
    "div"
  );


  star.className =
  "stardust";


  star.textContent =
  "✨";


  star.style.left =

  Math.random()
  *
  90
  +
  "%";


  gameArea.appendChild(
    star
  );


  let y =
  -40;


  const fall =

  setInterval(

    () => {

      if (
        !playing
      ) {

        clearInterval(
          fall
        );

        star.remove();

        return;

      }


      y += 5;


      star.style.top =

      y
      +
      "px";


      const starRect =

      star.getBoundingClientRect();


      const shipRect =

      spaceship
      .getBoundingClientRect();


      if (

        starRect.bottom >=
        shipRect.top

        &&

        starRect.left <=
        shipRect.right

        &&

        starRect.right >=
        shipRect.left

      ) {

        score++;

        scoreElement
        .textContent =
        score;


        star.remove();

        clearInterval(
          fall
        );

      }


      if (

        y >

        gameArea
        .clientHeight

      ) {

        star.remove();

        clearInterval(
          fall
        );

      }

    },

    20

  );

}


startGame.addEventListener(

  "click",

  () => {

    if (
      playing
    )
    return;


    playing =
    true;


    score =
    0;


    scoreElement
    .textContent =
    score;


    startGame
    .textContent =
    "Playing...";


    const gameTimer =

    setInterval(

      createStardust,

      700

    );


    setTimeout(

      () => {

        playing =
        false;


        clearInterval(
          gameTimer
        );


        startGame
        .textContent =
        "Play Again";


        if (

          score >

          bestScore

        ) {

          bestScore =
          score;


          localStorage
          .setItem(

            "mokshgnaBestScore",

            bestScore

          );


          bestElement
          .textContent =
          bestScore;

        }


        alert(

          "Game over! Score: "

          +

          score

        );

      },

      30000

    );

  }

);