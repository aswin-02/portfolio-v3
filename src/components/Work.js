import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function renderWork() {
  const section = document.createElement('section');
  section.className = 'works';
  section.innerHTML = `
      <div class="hero-content mt-5">
        <div id="hero-text-left"></div>
        <img src="public/assets/circle-logo.svg" class="cirlcle-logo"/>
        <div id="hero-text-right"></div>
    </div>`;
    document.body.append(section);
}
