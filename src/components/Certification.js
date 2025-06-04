import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/certification.css';
gsap.registerPlugin(ScrollTrigger);

export function renderCertification() {
  const section = document.createElement('section');
  section.className = 'certification';
  section.innerHTML = `
   <div class="certification-container container" id="certifications">
    <div class="cert-title-container">
      <h1 class="cert-title">Certifications</h1>
      <img src="../assets/line.svg">
    </div>
    <div class="cert-content>
    </div>
   </div>`;
    document.body.append(section);
}