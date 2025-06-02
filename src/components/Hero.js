import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function renderHero() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.innerHTML = `
    <div class="hero-content mt-5">
        <div id="hero-text-left"></div>
        <img src="public/assets/circle-logo.svg" class="cirlcle-logo"/>
        <div id="hero-text-right"></div>
    </div>
    <div class="about-container" id="about">
      <div class="about-content">
        <div class="float-container">
          <span class="float-text d-none text-1">sudo user</span>
          <span class="float-text d-none text-2">not a morning person</span>
          <span class="float-text d-none text-3">dog lover</span>
          <span class="float-text d-none text-4">night owl hybrid</span>
          <span class="float-text d-none text-5">netflix binger</span>
          <span class="float-text d-none text-6">introvert in disguise</span>
          <span class="float-text d-none text-me">Aswin</span>
        </div>
        <br>
        <span>Hi, I'm <br> pursuing a  Bachelor's in Computer Science at Sri Ramakrishna Institute of  Technology. Enthusiastic about technology, I aim to excel in emerging  technologies. Currently seeking software development internships and  full-time roles to enhance skills and contribute to meaningful projects.</span>
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

    gsap.to(".hero-stretch-right", 30, {
      x: -400,
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


const texts = document.querySelectorAll('.float-text');

// Define how much scroll space per item (adjust as needed)
// const totalScrollLength = window.innerHeight * texts.length;
gsap.registerPlugin(ScrollTrigger);

gsap.to(".float-container", {
  x:90,
  y: 460,
  duration: 30, // <- goes here
  scrollTrigger: {
    trigger: ".float-container",
    start: "top center+=300",
    end: "bottom+=1500 bottom",
    scrub: true,
  }
});

ScrollTrigger.create({
  trigger: ".about-container",
  start: "top-=100 center+=250",
  end: "center+=300 center+=250",
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
  }
});

}