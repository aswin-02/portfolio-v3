import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "../css/contact.css";

gsap.registerPlugin(ScrollTrigger);

export function renderContact() {
  const section = document.createElement("section");
  section.className = "contact";
  section.innerHTML = `
    <div class="contact-container container">
        <div class="contact-title-container">
            <h1 class="contact-title">Connect with me</h1>
            <img src="../assets/line-left.svg">
        </div>
        <div class="contact-content row">
            <div class="col-6">
                <div class="model-section">
                    <div id="model-container"></div>
                </div>
            </div>
            <div class="col-6 social-box">
              <div>
                <h2><a href="#">LinkedIn <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a></h2>
                <h2><a href="#">Github <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a></h2>
                <h2><a href="#">Email <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a></h2>
              </div>
            </div>
        </div>
    </div>`;
  document.body.append(section);

  document.addEventListener("DOMContentLoaded", function () {
    const modelContainer = document.getElementById("model-container");

    // THREE.js setup with much larger viewbox
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        65, // Increased FOV from 60 to 75 for wider view
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 9; // Moved closer from 6 to 4 to make model appear larger
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Set much larger initial size
    const containerWidth = modelContainer.clientWidth || 1200; // Increased from 800
    const containerHeight = modelContainer.clientHeight || 350; // Increased from 300

    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    modelContainer.appendChild(renderer.domElement);

    // Lights
    // Quick brightness enhancement
    scene.add(new THREE.AmbientLight(0xffffff, 1.5)); // Much brighter ambient
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 2.0); // Doubled intensity
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.5); // Almost doubled
    directionalLight2.position.set(-1, 0.5, -1);
    scene.add(directionalLight2);

    let model;
    let modelLoaded = false;
    let targetRotation = { x: 0, y: 0 };

    function getResponsiveScale(maxDim) {
      const isMobile = window.innerWidth <= 768;
      // Increased scale multipliers to make model larger
      return isMobile ? 6 / maxDim : 8 / maxDim; // Changed from 4/maxDim to 6/8
    }

    loadModel();

    function loadModel() {
      const gltfLoader = new GLTFLoader();
      gltfLoader.load(
        "../assets/model/kirby/scene.gltf",
        function (gltf) {
          model = gltf.scene;

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = getResponsiveScale(maxDim);

          model.scale.set(scale, scale, scale);
          model.position.set(
            -center.x * scale,
            -center.y * scale,
            -center.z * scale
          );

          // DO NOT OVERRIDE MATERIALS — keep original colors & textures
          scene.add(model);
          modelLoaded = true;
        },
        undefined,
        function (error) {
          console.error("Error loading model:", error);
        }
      );
    }

    // Cursor-follow rotation
    window.addEventListener("mousemove", (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = (event.clientY / window.innerHeight) * 2 - 1;

      targetRotation.y = mouseX * 0.5;
      targetRotation.x = mouseY * 0.3;
    });

    // Resize handler
    window.addEventListener("resize", function () {
        camera.aspect = modelContainer.clientWidth / modelContainer.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
    });

    function animate() {
      requestAnimationFrame(animate);

      if (modelLoaded && model) {
        model.rotation.x += (targetRotation.x - model.rotation.x) * 0.1;
        model.rotation.y += (targetRotation.y - model.rotation.y) * 0.1;
      }

      renderer.render(scene, camera);
    }

    animate();
  });
}