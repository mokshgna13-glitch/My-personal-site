/* =========================
   TYPING ANIMATION
========================= */

const typingElement = document.getElementById("typing");

const typingWords = [
    "Future AI Engineer",
    "Builder",
    "Robotics Explorer",
    "Entrepreneur",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = typingWords[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === typingWords.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );

}

typeEffect();


/* =========================
   MOBILE NAVBAR
========================= */

const menuButton =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================
   ACTIVE NAVBAR LINK
========================= */

const sections =
    document.querySelectorAll("section");

const navigationLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   M-01 PROGRESS ANIMATION
========================= */

const progressFill =
    document.querySelector(".progress-fill");

const progressBar =
    document.querySelector(".progress-bar");

let progressAnimated = false;

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const position =
        progressBar.getBoundingClientRect().top;

    if (
        position < window.innerHeight &&
        !progressAnimated
    ) {

        progressFill.style.width = "25%";

        progressAnimated = true;

    }

});


/* =========================
   INTERACTIVE TIMELINE
========================= */

const yearButtons =
    document.querySelectorAll(".year-btn");

const yearContents =
    document.querySelectorAll(".year-content");

yearButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedYear =
            button.dataset.year;

        yearButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        yearContents.forEach(content => {

            content.classList.remove("active");

            if (
                content.dataset.content ===
                selectedYear
            ) {

                content.classList.add("active");

            }

        });

    });

});


/* =========================
   PROJECT MODAL
========================= */

const projectModal =
    document.getElementById("project-modal");

const closeModal =
    document.getElementById("close-modal");

const modalIcon =
    document.getElementById("modal-icon");

const modalLabel =
    document.getElementById("modal-label");

const modalTitle =
    document.getElementById("modal-title");

const modalDescription =
    document.getElementById("modal-description");

const modalDetails =
    document.getElementById("modal-details");

const modalTech =
    document.getElementById("modal-tech");


const projectData = {

    "Personal Site": {

        icon: "🌐",

        label: "DIGITAL COMMAND CENTER",

        title: "Personal Website",

        description:
            "A personal command center documenting my journey as a student, builder, programmer, and future entrepreneur.",

        details: [

            ["STATUS", "LIVE"],

            ["TYPE", "Portfolio"],

            ["MISSION", "Document the journey"]

        ],

        tech: [

            "HTML",

            "CSS",

            "JavaScript",

            "Responsive Design"

        ]

    },


    "Robotics": {

        icon: "🤖",

        label: "EXPLORATION PROJECT",

        title: "Robotics & Electronics",

        description:
            "Exploring how hardware, sensors, electronics, and software can work together to create intelligent systems.",

        details: [

            ["STATUS", "LEARNING"],

            ["TYPE", "Hardware"],

            ["MISSION", "Build intelligent machines"]

        ],

        tech: [

            "Electronics",

            "Sensors",

            "Arduino",

            "Robotics"

        ]

    },


    "AI Learning": {

        icon: "🧠",

        label: "KNOWLEDGE SYSTEM",

        title: "Artificial Intelligence",

        description:
            "Building the knowledge and programming foundation needed to understand and create intelligent systems.",

        details: [

            ["STATUS", "LEARNING"],

            ["TYPE", "Technology"],

            ["MISSION", "Understand the future"]

        ],

        tech: [

            "Python",

            "Machine Learning",

            "AI",

            "Problem Solving"

        ]

    },


    "Future Ideas": {

        icon: "💡",

        label: "CLASSIFIED IDEAS",

        title: "Future Projects",

        description:
            "A collection of ideas waiting to become real projects. The best projects usually begin as questions.",

        details: [

            ["STATUS", "IDEATION"],

            ["TYPE", "Innovation"],

            ["MISSION", "Turn ideas into reality"]

        ],

        tech: [

            "Research",

            "Design",

            "Innovation",

            "Experimentation"

        ]

    },


    "M-01": {

        icon: "🚀",

        label: "MAIN MISSION",

        title: "M-01 Environmental Innovation",

        description:
            "A real-world environmental innovation project designed to solve a meaningful problem through research, engineering, prototyping, and iteration.",

        details: [

            ["STATUS", "BUILDING"],

            ["PHASE", "PROTOTYPE"],

            ["MISSION", "Solve a real problem"]

        ],

        tech: [

            "Hardware",

            "Sensors",

            "Software",

            "Environmental Innovation"

        ]

    }

};


function openProject(projectName) {

    const project =
        projectData[projectName];

    if (!project) return;


    modalIcon.textContent =
        project.icon;

    modalLabel.textContent =
        project.label;

    modalTitle.textContent =
        project.title;

    modalDescription.textContent =
        project.description;


    modalDetails.innerHTML = "";


    project.details.forEach(detail => {

        const card =
            document.createElement("div");

        card.className =
            "modal-detail-card";

        card.innerHTML = `

            <span>${detail[0]}</span>

            <strong>${detail[1]}</strong>

        `;

        modalDetails.appendChild(card);

    });


    modalTech.innerHTML = "";


    project.tech.forEach(technology => {

        const tag =
            document.createElement("span");

        tag.textContent =
            technology;

        modalTech.appendChild(tag);

    });


    projectModal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


/* =========================
   PROJECT CLICK EVENTS
========================= */

document.querySelectorAll(".orbit-project")
    .forEach(project => {

        project.addEventListener("click", () => {

            const projectName =
                project.querySelector("h3")
                    .textContent
                    .trim();

            openProject(projectName);

        });

    });


const sunCore =
    document.querySelector(".sun-core");

if (sunCore) {

    sunCore.addEventListener("click", () => {

        openProject("M-01");

    });

}


/* =========================
   TREASURE MAP CLICK EVENTS
========================= */

document.querySelectorAll(".map-point")
    .forEach(point => {

        point.addEventListener("click", () => {

            const title =
                point.querySelector(".map-card h3")
                    .textContent
                    .trim();


            if (title === "M-01") {

                openProject("M-01");

            }

        });

    });


/* =========================
   CLOSE MODAL
========================= */

function closeProjectModal() {

    projectModal.classList.remove("active");

    document.body.style.overflow =
        "";

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeProjectModal
    );

}


projectModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            projectModal
        ) {

            closeProjectModal();

        }

    }

);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProjectModal();

        }

    }

);



/* =========================
   LOAD MORE BUILD LOG
========================= */

const loadMoreButton =
    document.getElementById(
        "load-more-btn"
    );

const hiddenLog =
    document.querySelector(
        ".hidden-log"
    );


if (loadMoreButton) {

    loadMoreButton.addEventListener(
        "click",
        () => {

            hiddenLog.style.display =
                "grid";

            loadMoreButton.style.display =
                "none";

        }

    );

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".achievement-card, " +
        ".skill-card, " +
        ".vault-card, " +
        ".log-entry, " +
        ".project-dashboard, " +
        ".year-content, " +
        ".secret-box"
    );


function revealOnScroll() {

    revealElements.forEach(element => {

        const position =
            element.getBoundingClientRect()
                .top;

        if (
            position <
            window.innerHeight - 80
        ) {

            element.classList.add(
                "reveal",
                "show"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   HERO PARALLAX
========================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );

if (heroVisual) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (window.innerWidth / 2 -
                    event.clientX) / 45;

            const y =
                (window.innerHeight / 2 -
                    event.clientY) / 45;


            heroVisual.style.transform = `

                translate(${x}px, ${y}px)

            `;

        }

    );

}


/* =========================
   GOJO MODE VISUAL EFFECT
========================= */

const gojoStyle =
    document.createElement("style");

gojoStyle.textContent = `

    body.gojo-mode {

        background:

            radial-gradient(

                circle at center,

                rgba(100, 0, 255, 0.35),

                #020817 60%

            );

    }


    body.gojo-mode .secret-box {

        border-color: #b26cff;

        box-shadow:

            0 0 40px #8d3cff,

            0 0 100px rgba(130, 50, 255, 0.4);

        animation: gojoPulse 1.5s infinite alternate;

    }


    body.gojo-mode .secret-symbol {

        color: #d8a7ff;

        border-color: #b26cff;

        box-shadow:

            0 0 35px #a33cff;

    }


    body.gojo-mode .section-title h2 {

        text-shadow:

            0 0 25px #a13cff;

    }


    @keyframes gojoPulse {

        from {

            transform: scale(1);

        }

        to {

            transform: scale(1.03);

        }

    }

`;

document.head.appendChild(
    gojoStyle
);


/* =========================
   SECRET CODE EASTER EGG
========================= */

let keySequence = "";

document.addEventListener(
    "keydown",
    event => {

        keySequence +=
            event.key.toUpperCase();

        keySequence =
            keySequence.slice(-4);


        if (
            keySequence === "GOJO"
        ) {

            document
                .getElementById("secret")
                .scrollIntoView({
                    behavior: "smooth"
                });


            setTimeout(() => {

                secretInput.value =
                    "GOJO";

                activateGojoMode();

            }, 800);

        }

    }

);