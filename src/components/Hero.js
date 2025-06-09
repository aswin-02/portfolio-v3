import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/header.css';
import '../css/hero.css';
gsap.registerPlugin(ScrollTrigger);

export function renderHero() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.innerHTML = `
  <div class="cursor-circle"></div>
    <div class="hero-content mt-5">
        <div id="hero-text-left" class="hero-stretch-left"></div>
        <img src="../assets/circle-logo.svg" class="cirlcle-logo"/>
        <div id="hero-text-right" class="stretch-box"></div>
    </div>
    <div class="about-container container" id="about">
    <div class="about-title-container">
      <h1 class="about-title">Myself</h1>
      <img src="../assets/line.svg">
    </div>
      <div class="about-content">
        <br>
        <span>Hi, I'm 
          <span class="float-container">
            <span class="float-text text-1">sudo user</span>
            <span class="float-text d-none text-2">not a morning person</span>
            <span class="float-text d-none text-3">dog lover</span>
            <span class="float-text d-none text-4">night owl hybrid</span>
            <span class="float-text d-none text-5">netflix binger</span>
            <span class="float-text d-none text-6">introvert in disguise</span>
            <span class="float-text d-none text-me">Aswin</span>
          </span>
        <br>A full stack web developer who enjoys building both the backend and the frontend of websites. I work with Java, Spring Boot, Laravel, and PHP for backend development. I bring things to life with React, JavaScript, GSAP, and a touch of Three.js to create smooth, interactive frontends. I like making websites that not only work well but also look and feel great. I’m just here trying to make the web a cooler place. </span>
      </div>
    </div>
    <div class="skill-container" id="stack">
      <div class="container text-center">
          <div>
            <div class="hover-image">
              <img src="../assets/skills/java.png" alt="java" />
            </div>
            <div class="hover-image">
              <img src="../assets/skills/spring-boot.png" alt="spring-boot" />
            </div>
            <div class="hover-image">
              <img src="../assets/skills/react.png" alt="react" />
            </div>
            <div class="hover-image">
              <img src="../assets/skills/php.png" alt="php" />
            </div>
            <div class="hover-image">
              <img src="../assets/skills/laravel.png" alt="laravel" />
            </div>
            <div class="hover-image">
              <img src="../assets/skills/javascript.png" alt="javascript" />
            </div>
            <div class="hover-image">
              <img src="../assets/skills/jquery.png" alt="jquery" />
            </div>
            <div class="hover-image">
              <img src="../assets/skills/mysql.png" alt="mysql" />
            </div>
            <div class="hover-image">
              <img src="../assets/skills/gsap.jpg" alt="gsap" />
            </div>
            <div class="hover-image">
              <img src="../assets/skills/bootstrap.png" alt="bootstrap" />
            </div>
            <div class="hover-image">
              <img src="../assets/skills/tailwind.jpg" alt="tailwind" />
            </div>
          </div>
        <sp class="row justify-content-center">
          <span class="col-auto hover-text">JAVA</span>
          <sp class="col-auto">/</sp>
          <span class="col-auto hover-text">SPRING BOOT</span>
          <sp class="col-auto">/</sp>
          <span class="col-auto hover-text">REACT</span>
          <sp class="col-auto">/</sp>
          <span class="col-auto hover-text">PHP</span>
          <sp class="col-auto">/</sp>
          <span class="col-auto hover-text">LARAVEL</span>
          <sp class="col-auto">/</sp>
          <span class="col-auto hover-text">JAVASCRIPT</span>
          <sp class="col-auto">/</sp>
          <span class="col-auto hover-text">JQUERY</span>
          <sp class="col-auto">/</sp>
          <span class="col-auto hover-text">MYSQL</span>
        </sp>

        <sp class="row justify-content-center mt-2">
          <span class="col-auto hover-text">GSAP</span>
          <sp class="col-auto">/</sp>
          <span class="col-auto hover-text">BOOTSTRAP</span>
          <sp class="col-auto">/</sp>
          <span class="col-auto hover-text">TAILWIND</span>
        </sp>
      </div>
    </div>
  `;
  document.body.append(section);

  function loadSvg(){
    fetch("./assets/web.svg")
    .then((response) => {return response.text();})
    .then((svg) => {
      document.getElementById("hero-text-left").innerHTML = svg;
      const svgEl = document.querySelector("#hero-text-left svg");
      svgEl.removeAttribute("width");
      svgEl.removeAttribute("height");
      svgEl.setAttribute("preserveAspectRatio", "xMidYMid slice");
      svgEl.classList.add("hero-stretch-left");

      setAnimationScroll();
    })

    fetch("./assets/developer.svg")
    .then((response) => {return response.text();})
    .then((svg) => {
      document.getElementById("hero-text-right").innerHTML = svg;
      const svgEl = document.querySelector("#hero-text-right svg");
      svgEl.removeAttribute("width");
      svgEl.removeAttribute("height");
      svgEl.setAttribute("preserveAspectRatio", "xMidYMid slice");
      svgEl.classList.add("hero-stretch-right");

      setAnimationScroll();
    })
  }


  loadSvg();
  function setAnimationScroll(){

    let isMobile = window.innerWidth <= 700 ? true : false;

    gsap.to("#secondary", 30, {
      x: 170,
      ease: "back.out",
        scrollTrigger:{
          trigger:"#hero-content",
          start:"top-=50 top",
          end:"+=1000",
          scrub:true,
          pin:true,
        }
    })
    if(!isMobile){
      gsap.to(".hero-stretch-right", 30, {
        x: -650,
        ease: "back.out",
        scrollTrigger:{
          trigger:"#hero-content",
          start:"top-=50 top",
          end:"+=1000",
          scrub:true,
          pin:true
        }
      })
    }else{
      gsap.to(".hero-stretch-right", 30, {
        x: -300,
        ease: "back.out",
        scrollTrigger:{
          trigger:"#hero-content",
          start:"top-=50 top",
          end:"+=1000",
          scrub:true,
          pin:true
        }
      })
    }
  }

  const texts = document.querySelectorAll('.float-text');

  gsap.fromTo(".float-container",
    { 
      yPercent: -900,
    },
    {
      xPercent: 7,
      yPercent: 0,
      scrollTrigger: {
        trigger: ".float-container",
        start: "top 85%",
        end: "top 10%",
        scrub: true,
      }
    }
  );

  ScrollTrigger.create({
    trigger: ".about-container",
    start: "top-=100 90%",
    end: "center+=160 80%",
    scrub: true,
    onUpdate: self => {
      const index = Math.floor(self.progress * texts.length);

      texts.forEach((el, i) => {
        if (i === index) {
          el.classList.remove("d-none");
        } else {
          el.classList.add("d-none");
        }
      });
    },

    onLeave: () => {
      // Show the last text permanently
      texts.forEach((el, i) => {
        if (i === texts.length - 1) {
          el.classList.remove("d-none");
        } else {
          el.classList.add("d-none");
        }
      });
    }
  });

  // Set initial properties for hover-image divs
  gsap.set('.hover-image', { 
    yPercent: -150, 
    xPercent: -50, 
    opacity: 0, 
    position: 'fixed', // Ensure the hover-image divs are fixed to the viewport
    top: 0,
    left: 0,
    visibility: 'hidden', // Hide the hover-image divs initially
  });

  // Map each hover-text to its corresponding hover-image div by index
  const hoverTexts = document.querySelectorAll(".hover-text");
  const hoverImages = document.querySelectorAll(".hover-image");

  hoverTexts.forEach((el, index) => {
    const imageContainer = hoverImages[index],
          setX = gsap.quickSetter(imageContainer, "x", "px"),
          setY = gsap.quickSetter(imageContainer, "y", "px"),
          align = e => {
            setX(e.clientX);
            setY(e.clientY);
          },
          startFollow = () => document.addEventListener("mousemove", align),
          stopFollow = () => document.removeEventListener("mousemove", align),
          fade = gsap.to(imageContainer, {
            autoAlpha: 1,
            scale: 1, // makes it pop to full size
            duration: 0.2,
            ease: "power2.out",
            paused: true,
            onStart: startFollow,
            onReverseComplete: () => {
              stopFollow();
              gsap.set(imageContainer, { scale: 1 }); // reset scale when hiding
            }
          });

    el.addEventListener('mouseenter', (e) => {
      // Set visibility and start the fade-in animation for the hover-image div
      fade.play(); // Play the fade animation
      startFollow(); // Start following the mouse
      align(e); // Immediately position it under the cursor

      // Dim all normal text and other hover-text spans
      document.querySelectorAll('.skill-container span').forEach(span => {
        if (span !== el) {
          span.style.opacity = '0.25';  // Dim all other text
        }
      });

      // Ensure hovered text stays at full opacity
      el.style.opacity = '1';
    });

    el.addEventListener('mouseleave', () => {
      // Reverse the fade animation to hide the hover-image div
      fade.reverse();

      // Reset opacity for all text
      document.querySelectorAll('.skill-container span').forEach(span => {
        span.style.opacity = '1';  // Reset all text to full visibility
      });
    });
  });


}