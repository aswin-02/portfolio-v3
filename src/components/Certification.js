import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/certification.css';
gsap.registerPlugin(ScrollTrigger);

export function renderCertification() {
  const section = document.createElement('section');
  section.className = 'certification';
  section.innerHTML = `
   <div class="certification-container" id="certifications">
    <div class="cert-title-container container">
      <h1 class="cert-title">Certifications</h1>
      <img src="../assets/line.svg">
    </div>
    <div class="cert-container">
      <div class="cert-content">
        <span>JAVA - NPTEL CERTIFICATION</span>
        <img src="../assets/certification/certificate1.png" class="certificate-image">
      </div>
      <div class="cert-content">
        <span>BUSINESS ENGLISH PRELIMINARY</span>
        <img src="../assets/certification/certificate2.png" class="certificate-image">
      </div>
    </div>
   </div>
   `;
    document.body.append(section);


    const boxes = document.querySelectorAll(".cert-content");

    // Detect if device is touch
    function isTouchDevice() {
      return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    }

    boxes.forEach((box) => {
      // Hover for desktop
      box.addEventListener("mouseenter", () => {
        if (!isTouchDevice()) {
          gsap.to(box, { 
            height: 400,
            duration: 0.3,
            backgroundColor: "#121212",
            color: "#ffffff",
            alignItems: "start",
            ease: "power2.out"
          });

          const img = box.querySelector(".certificate-image");
          if (img) {
            gsap.to(img, {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        }
      });


      box.addEventListener("mouseleave", () => {
        if (!isTouchDevice()) {
          gsap.to(box, { 
            height: 120,
            duration: 0.3,
            backgroundColor: "#ffffff",
            color: "#121212",  
            alignItems: "center",
            ease: "power2.out"
          });
        }

        const img = box.querySelector(".certificate-image");
        if (img) {
          gsap.to(img, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
        
      });

      // Click for mobile
      let isActive = false;

      box.addEventListener("click", () => {
        if (isTouchDevice()) {
          isActive = !isActive;
          gsap.to(box, {
            height: 400,
            duration: 0.3,
            backgroundColor: "#121212",
            color: "#ffffff",
            alignItems: "start",
            ease: "power2.out"
          });
        }
      });
    });

}