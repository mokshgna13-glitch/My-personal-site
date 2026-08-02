const buttons =
  document.querySelectorAll(
    ".planet-button"
  );


const rocket =
  document.getElementById(
    "rocket"
  );


const route =
  document.querySelector(
    ".route"
  );


const projectPanel =
  document.getElementById(
    "projectPanel"
  );


const panelNumber =
  document.getElementById(
    "panelNumber"
  );


const panelTitle =
  document.getElementById(
    "panelTitle"
  );


const panelSubtitle =
  document.getElementById(
    "panelSubtitle"
  );


const panelStatus =
  document.getElementById(
    "panelStatus"
  );


const panelDescription =
  document.getElementById(
    "panelDescription"
  );


const featureList =
  document.getElementById(
    "featureList"
  );


const largePlanet =
  document.getElementById(
    "largePlanet"
  );


const planetSymbol =
  document.getElementById(
    "planetSymbol"
  );


const projectButton =
  document.getElementById(
    "projectButton"
  );


const toast =
  document.getElementById(
    "toast"
  );


const secretButton =
  document.getElementById(
    "secretButton"
  );


const gojoButton =
  document.getElementById(
    "gojoButton"
  );


const projects = {

  sun: {

    number:
      "DESTINATION 01",

    title:
      "The Starting Point",

    subtitle:
      "Every big journey begins with curiosity.",

    status:
      "ACTIVE",

    symbol:
      "☀",

    className:
      "sun-large",

    description:

      "Welcome to my project universe. " +

      "This is where ideas become experiments, " +

      "experiments become projects, and every " +

      "challenge becomes a lesson.",

    features: [

      "Curiosity",

      "Learning",

      "Building"

    ],

    button:
      "Start Exploring"

  },


  website: {

    number:
      "DESTINATION 02",

    title:
      "My Personal Website",

    subtitle:
      "A digital home for my journey.",

    status:
      "DEPLOYED",

    symbol:
      "🌍",

    className:
      "earth-large",

    description:

      "A futuristic portfolio built using " +

      "HTML, custom CSS and JavaScript. " +

      "It documents my skills, projects, " +

      "goals and future plans.",

    features: [

      "Responsive",

      "Custom CSS",

      "Interactive",

      "Open Source"

    ],

    button:
      "Open Website Mission"

  },


  m01: {

    number:
      "DESTINATION 03",

    title:
      "M-01 Companion",

    subtitle:
      "A small robot with a big mission.",

    status:
      "IN DEVELOPMENT",

    symbol:
      "🤖",

    className:
      "m01-large",

    description:

      "M-01 is my concept for a smart " +

      "AI companion with personality, " +

      "useful modes and a futuristic " +

      "dashboard experience.",

    features: [

      "AI Modes",

      "Emotions",

      "Hardware",

      "Companion App"

    ],

    button:
      "View M-01 Mission"

  },


  ai: {

    number:
      "DESTINATION 04",

    title:
      "AI Research Lab",

    subtitle:
      "Learning how intelligence can help people.",

    status:
      "EXPLORING",

    symbol:
      "🧠",

    className:
      "ai-large",

    description:

      "My AI lab is a place for experiments, " +

      "new tools, automation ideas and " +

      "future applications of artificial " +

      "intelligence.",

    features: [

      "AI Tools",

      "Automation",

      "Experiments",

      "Learning"

    ],

    button:
      "Enter AI Lab"

  },


  explainx: {

    number:
      "DESTINATION 05",

    title:
      "ExplainX Universe",

    subtitle:
      "Making difficult ideas easier to understand.",

    status:
      "CREATING",

    symbol:
      "🎥",

    className:
      "youtube-large",

    description:

      "ExplainX is my science and technology " +

      "content project. I explore space, " +

      "the ocean, physics and fascinating " +

      "facts using engaging visuals.",

    features: [

      "Science",

      "Space",

      "Ocean",

      "Videos"

    ],

    button:
      "Explore ExplainX"

  },


  startup: {

    number:
      "DESTINATION 06",

    title:
      "Future Startup",

    subtitle:
      "Turning ambitious ideas into useful products.",

    status:
      "PLANNING",

    symbol:
      "💡",

    className:
      "startup-large",

    description:

      "My long-term mission is to build " +

      "technology products and companies " +

      "that solve meaningful problems " +

      "for people around the world.",

    features: [

      "Innovation",

      "Products",

      "Business",

      "Global Impact"

    ],

    button:
      "Open Startup Vision"

  },


  unknown: {

    number:
      "DESTINATION 07",

    title:
      "The Unknown Future",

    subtitle:
      "The biggest discoveries are still ahead.",

    status:
      "CLASSIFIED",

    symbol:
      "◉",

    className:
      "unknown-large",

    description:

      "This destination represents the projects " +

      "I have not imagined yet. The future " +

      "is not fully written, and every skill " +

      "I learn opens another possibility.",

    features: [

      "Unknown",

      "Possibility",

      "Discovery",

      "Future"

    ],

    button:
      "Unlock The Future"

  }

};


function showToast(
  message
) {

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );


  setTimeout(

    () => {

      toast.classList.remove(
        "show"
      );

    },

    2500

  );

}


function updateProject(
  planet
) {

  const data =
    projects[planet];


  panelNumber.textContent =
    data.number;


  panelTitle.textContent =
    data.title;


  panelSubtitle.textContent =
    data.subtitle;


  panelStatus.textContent =
    data.status;


  panelDescription.textContent =
    data.description;


  planetSymbol.textContent =
    data.symbol;


  projectButton.textContent =
    data.button + " →";


  largePlanet.className =
    "large-planet " +
    data.className;


  featureList.innerHTML =
    "";


  data.features.forEach(

    feature => {

      const tag =
        document.createElement(
          "span"
        );


      tag.textContent =
        feature;


      featureList.appendChild(
        tag
      );

    }

  );


  projectPanel.animate(

    [

      {

        opacity:
          0,

        transform:

          "translateX(25px)"

      },

      {

        opacity:
          1,

        transform:

          "translateX(0)"

      }

    ],

    {

      duration:
        500,

      easing:
        "ease"

    }

  );

}


function moveRocket(
  button
) {

  if (
    window.innerWidth
    <=
    900
  ) {

    return;

  }


  const oldPosition =
    rocket.offsetTop;


  const destination =
    button.offsetTop;


  rocket.classList.remove(

    "going-down"

  );


  if (
    destination
    >
    oldPosition
  ) {

    rocket.classList.add(

      "going-down"

    );

  }


  route.classList.add(

    "traveling"

  );


  rocket.classList.add(

    "launching"

  );


  requestAnimationFrame(

    () => {

      rocket.style.top =

        `${destination}px`;

    }

  );


  setTimeout(

    () => {

      route.classList.remove(

        "traveling"

      );


      rocket.classList.remove(

        "launching"

      );

    },

    1700

  );

}


buttons.forEach(

  button => {

    button.addEventListener(

      "click",

      () => {

        const planet =
          button.dataset.planet;


        buttons.forEach(

          item => {

            item.classList.remove(

              "active"

            );

          }

        );


        button.classList.add(

          "active"

        );


        moveRocket(
          button
        );


        setTimeout(

          () => {

            updateProject(
              planet
            );

          },

          450

        );

      }

    );

  }

);


window.addEventListener(

  "load",

  () => {

    if (
      window.innerWidth
      >
      900
    ) {

      rocket.style.top =

        `${buttons[0].offsetTop}px`;

    }

  }

);


projectButton.addEventListener(

  "click",

  () => {

    showToast(

      "Mission data opened! More features are coming soon. 🚀"

    );

  }

);


secretButton.addEventListener(

  "click",

  () => {

    document.body.classList.toggle(

      "secret-mode"

    );


    showToast(

      document.body.classList.contains(
        "secret-mode"
      )

      ?

      "SECRET MODE ACTIVATED ◈"

      :

      "SECRET MODE DISABLED"

    );

  }

);


gojoButton.addEventListener(

  "click",

  () => {

    showToast(

      "∞ INFINITY ACTIVATED — LIMITLESS MODE"

    );


    document.body.animate(

      [

        {

          filter:

            "brightness(1)"

        },

        {

          filter:

            "brightness(1.7)"

        },

        {

          filter:

            "brightness(1)"

        }

      ],

      {

        duration:
          700

      }

    );

  }

);



/* ==================================================
   🤖 M-01 MINI — PORTFOLIO GUIDE
================================================== */

const m01Robot =
  document.getElementById("m01Robot");

const m01Chat =
  document.getElementById("m01Chat");

const m01Close =
  document.getElementById("m01Close");

const m01Tip =
  document.getElementById("m01Tip");

const m01Response =
  document.getElementById("m01Response");

const m01Actions =
  document.querySelectorAll(".m01-action");


/* Show the helper bubble */

setTimeout(() => {

  if (m01Tip && m01Chat) {

    m01Tip.classList.add("show");

  }

}, 2500);


/* Open or close assistant */

m01Robot.addEventListener(
  "click",
  () => {

    m01Chat.classList.toggle("open");

    m01Tip.classList.remove("show");

  }
);


/* Close button */

m01Close.addEventListener(
  "click",
  () => {

    m01Chat.classList.remove("open");

  }
);


/* M-01 answers */

const m01Answers = {

  projects: `
    🚀 <strong>Mission: Projects!</strong><br>
    Mokshgna builds websites, AI experiments,
    robotics concepts, and interactive digital
    experiences. Opening the Project Universe...
  `,

  about: `
    👤 <strong>About Mokshgna</strong><br>
    A student, programmer, builder, robotics
    explorer, and future entrepreneur who enjoys
    turning ambitious ideas into real projects.
  `,

  skills: `
    🧠 <strong>Skills & Learning</strong><br>
    Exploring HTML, CSS, JavaScript, Python,
    AI, robotics, design, and new technology—
    one project at a time.
  `,

  m01: `
    🤖 <strong>M-01 Project</strong><br>
    M-01 is a future AI companion concept
    combining personality, helpful tools,
    robotics, and an interactive dashboard.
  `,

  journey: `
    🗺️ <strong>Future Journey</strong><br>
    Current mission: learn, build, improve,
    and create bigger projects. Every launch
    is one step toward the future! 🚀
  `

};


/* Optional section IDs

Change these if your website uses
different section IDs.
*/

const m01Sections = {

  projects:
    "#projects",

  about:
    "#about",

  skills:
    "#skills",

  m01:
    "#m01",

  journey:
    "#journey"

};


/* Handle quick buttons */

m01Actions.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        const action =
          button.dataset.action;


        /* Response animation */

        m01Response.style.opacity = "0";

        m01Response.style.transform =
          "translateY(5px)";


        setTimeout(() => {

          m01Response.innerHTML =
            m01Answers[action];

          m01Response.style.opacity = "1";

          m01Response.style.transform =
            "translateY(0)";

        }, 180);


        /* Scroll to section */

        const target =
          document.querySelector(
            m01Sections[action]
          );


        if (target) {

          setTimeout(() => {

            target.scrollIntoView({

              behavior:
                "smooth",

              block:
                "start"

            });

          }, 650);

        }

      }
    );

  }
);

const robo = document.querySelector(".robo");
const roboMessage = document.querySelector(".robo-message");

robo.addEventListener("click", () => {
  roboMessage.classList.toggle("show");
});


const topRocket = document.getElementById("topRocket");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topRocket.classList.add("show");
  } else {
    topRocket.classList.remove("show");
  }
});

topRocket.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
