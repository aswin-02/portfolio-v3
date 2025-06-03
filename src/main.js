import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from 'gsap';
import './style.css';
import './css/header.css';
import './css/hero.css';
import Lenis from '@studio-freight/lenis';
import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderWork } from './components/Work.js';

const lenis = new Lenis({
  duration: 0.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


renderHeader();
renderHero();
renderWork();

