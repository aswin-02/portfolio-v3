import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/work.css';
gsap.registerPlugin(ScrollTrigger);

export function renderWork() {
  const section = document.createElement('section');
  section.className = 'works';
  section.innerHTML = `
   <div class="work-content container" id="works">
      <div class="work-title-container">
        <h1 class="work-title">My Works</h1>
        <img src="../assets/line-left.svg">
      </div>
      <div class="test-container">
        <div class="cards">
            <div class="work-card">
                <div class="card-face">
                  <h2>Employee Management System</h3>
                  <div class="text-center">
                    <img src="../public/assets/works/EMS.svg" alt="Employee Management System"/>
                  </div>
                  <div class="project-decription">
                    <p>Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </div>
                </div>
            </div>
            <div class="work-card">
                <div class="card-face">
                  <h2>Inventory Management System</h2>
                  <div class="text-center">
                    <img src="../public/assets/works/IMS.svg" alt="Inventory Management System"/>
                  </div>
                  <div class="project-decription">
                    <p>Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </div>
                </div>
            </div>
            <div class="work-card">
                <div class="card-face">
                  <h2>Movie Fetcher</h2>
                  <div class="text-center">
                    <img src="../public/assets/works/movie-fetcher.svg" alt="Movie Fetcher"/>
                  </div>
                  <div class="project-decription">
                    <p>Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </div>
                </div>
            </div>
            <div class="work-card">
                <div class="card-face">
                  <h2>Image Prediction</h2>
                  <div class="text-center">
                    <img src="../public/assets/works/image-prediction.svg" alt="Image Prediction"/>
                  </div>
                  <div class="project-decription">
                    <p>Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </div>
                </div>
            </div>
            <div class="work-card">
                <div class="card-face">
                  <h2>Vehicle Detection</h2>
                  <div class="text-center">
                    <img src="../public/assets/works/vechile-detection.svg" alt="Vechile Detection"/>
                  </div>
                  <div class="project-decription">
                    <p>Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    `;
    document.body.append(section);

    gsap.fromTo(
        ".work-card:not(:first-child)",
        {
            x: (index) => {
                return index % 2 === 0 ? window.innerWidth / 1 + 100 : -(window.innerWidth / 1 + 100);
            },
            scale: 3,
        },
        {
            x: 0,
            scale: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".test-container",
                pin: true,
                scrub: true,
                start: "top top",
                end: "+=2000",
                invalidateOnRefresh: true
            }
        }
    );
}

