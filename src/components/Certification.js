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
                    <img src="../assets/certification/Programming-In-Java.jpg" class="certificate-image">
                </div>
                <div class="cert-content">
                    <span>BUSINESS ENGLISH PRELIMINARY</span>
                    <img src="../assets/certification/BEC-Certificate-page.jpg" class="certificate-image">
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
        // Store state on the element itself
        box.isActive = false;

        // Hover for desktop
        box.addEventListener("mouseenter", () => {
            if (!isTouchDevice()) {
                gsap.to(box, {
                    height: 400,
                    duration: 0.3,
                    backgroundColor: "#121212",
                    color: "#faf6f3",
                    alignItems: "start",
                    ease: "power2.out"
                });

                const img = box.querySelector(".certificate-image");
                if (img) {
                    gsap.to(img, {
                        height: "100%",
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
                    backgroundColor: "#faf6f3",
                    color: "#121212",
                    alignItems: "center",
                    ease: "power2.out"
                });

                const img = box.querySelector(".certificate-image");
                if (img) {
                    gsap.to(img, {
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            }
        });

        // Click for mobile
        box.addEventListener("click", function() {
            if (isTouchDevice()) {
                // Toggle the state
                this.isActive = !this.isActive;
                
                if (this.isActive) {
                    // Expand
                    gsap.to(this, {
                        height: 400,
                        duration: 0.3,
                        backgroundColor: "#121212",
                        color: "#faf6f3",
                        alignItems: "start",
                        ease: "power2.out"
                    });

                    const img = this.querySelector(".certificate-image");
                    if (img) {
                        gsap.to(img, {
                            marginTop: 20,
                            marginLeft: 0,
                            height: 300,
                            opacity: 1,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                } else {
                    // Collapse
                    gsap.to(this, {
                        height: 120,
                        duration: 0.3,
                        backgroundColor: "#faf6f3",
                        color: "#121212",
                        alignItems: "center",
                        ease: "power2.out"
                    });

                    const img = this.querySelector(".certificate-image");
                    if (img) {
                        gsap.to(img, {
                            marginTop: 0,
                            marginLeft: 0,
                            height: 0,
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }
        });
    });
}