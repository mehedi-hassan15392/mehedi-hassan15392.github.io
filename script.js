/* =================================
   TYPING ANIMATION
================================= */

const words = [
    "CSE Student",
    "Programmer",
    "Web Developer",
    "Tech Enthusiast",
    "Creative Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1300);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}

typeEffect();


/* =================================
   PARTICLES
================================= */

const particleContainer =
    document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 8 + 7) + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    const size =
        Math.random() * 5 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particleContainer.appendChild(particle);
}


/* =================================
   MOBILE NAV
================================= */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =================================
   NAVBAR SCROLL EFFECT
================================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =================================
   SKILL BAR ANIMATION
================================= */

const skillCards =
    document.querySelectorAll(".skill-card");

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    skillObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .3
        }
    );


skillCards.forEach(card => {

    skillObserver.observe(card);

});


/* =================================
   MOUSE PARALLAX
================================= */

const heroImage =
    document.querySelector(".hero-image");

document.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 900) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 50;

    const y =
        (window.innerHeight / 2 - event.clientY) / 50;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =================================
   BACK TO TOP
================================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =================================
   3D PROJECT CARD EFFECT
================================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});