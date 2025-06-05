import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from 'gsap';
import './style.css';
import Lenis from '@studio-freight/lenis';
import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderWork } from './components/Work.js';
import { renderCertification } from './components/Certification.js';
import { renderContact } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  // Add these Chrome-specific optimizations
  infinite: false,
  autoResize: true,
  // Disable on mobile Chrome if problematic
  smoothWheel: !(/Chrome/.test(navigator.userAgent) && /Mobile/.test(navigator.userAgent))
})

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

renderHeader();
renderHero();
renderWork();
renderCertification();
renderContact();
renderFooter();


const cursor = document.querySelector(".cursor-circle");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: "power2.out",
  });
});


window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  gsap.to(".scroll-progress-bar", {
    width: `${scrollPercent}%`,
    duration: 0.2,
    ease: "power2.out",
  });
});
