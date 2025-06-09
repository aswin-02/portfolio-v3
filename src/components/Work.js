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
                  <div class="text-center image-container">
                    <img class="card-image" src="../public/assets/works/EMS.svg" alt="Employee Management System"/>
                  </div>
                  <div class="card-content">
                    <div class="project-decription">
                      <p>A full-featured web app built with Spring Boot to manage employees, departments, teams, and leave tracking. It handles everything from assigning departments to processing leave requests.</p>
                    </div>
                    <div class="project-footer">
                      <a href="https://github.com/aswin-02/Employee-Management-System" class="light-btn" target="_blank">view</a>
                    </div>
                  </div>
                </div>
            </div>
            <div class="work-card">
                <div class="card-face">
                  <h2>Inventory Management System</h2>
                  <div class="text-center image-container">
                    <img class="card-image" src="../public/assets/works/IMS.svg" alt="Inventory Management System"/>
                  </div>
                  <div class="card-content">
                    <div class="project-decription">
                      <p>A simple but effective CRUD app built with React to manage inventory items. Add, update, delete, or view items, because even basic inventory deserves a smooth UI and clean state management.</p>
                    </div>
                    <div class="project-footer">
                      <a href="https://github.com/aswin-02/Stockify" class="dark-btn" target="_blank">view</a>
                    </div>
                  </div>
                </div>
            </div>
            <div class="work-card">
                <div class="card-face">
                  <h2>Movie Fetcher</h2>
                  <div class="text-center image-container">
                    <img class="card-image" src="../public/assets/works/movie-fetcher.svg" alt="Movie Fetcher"/>
                  </div>
                  <div class="card-content">
                    <div class="project-decription">
                      <p>A React based app that displays movie details like cast, summary, and other key info. Users can select a movie and get all the juicy details, no spoilers, just smooth UI and clean data rendering.</p>
                    </div>
                    <div class="project-footer">
                      <a href="https://github.com/aswin-02/moviefetcher" class="light-btn" target="_blank">view</a>
                    </div>
                  </div>
                </div>
            </div>
            <div class="work-card">
                <div class="card-face">
                  <h2>Vehicle Detection</h2>
                  <div class="text-center image-container">
                    <img class="card-image" src="../public/assets/works/vechile-detection.svg" alt="Vechile Detection"/>
                  </div>
                  <div class="card-content">
                    <div class="project-decription">
                      <p>A CNN-based model trained to distinguish between images of ambulances and firetrucks. It learns visual patterns from the dataset and accurately predicts the type of emergency vehicle in a given image.</p>
                    </div>
                    <div class="project-footer">
                      <a href="https://github.com/aswin-02/vehicle_detection" class="dark-btn" target="_blank">view</a>
                    </div>
                  </div>
                </div>
            </div>
            <div class="work-card">
                <div class="card-face">
                  <h2>Image Prediction</h2>
                  <div class="text-center image-container">
                    <img class="card-image" src="../public/assets/works/image-prediction.svg" alt="Image Prediction"/>
                  </div>
                  <div class="card-content">
                    <div class="project-decription">
                      <p>Built a Convolutional Neural Network to classify images from the CIFAR-10 dataset, which includes 10 categories like airplanes, cats, and other wild creatures. It learns patterns from the data to predict image classes with solid accuracy.</p>
                    </div>
                    <div class="project-footer">
                      <a href="https://github.com/aswin-02/Image-prediction" class="light-btn" target="_blank">view</a>
                    </div>
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
                return index % 2 === 0 ? window.innerWidth / 1 + 600 : -(window.innerWidth / 1 + 500);
            },
            scale: 3,
            rotate: 15,
          },
          {
            x: 0,
            scale: 1,
            rotate: 0,
            stagger: gsap.utils.distribute({
              each: window.innerWidth < 800 ? 0.4 : 0.2
            }),
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

