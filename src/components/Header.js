export function renderHeader() {
  const header = document.createElement('header');
  header.innerHTML = `
  <div class="scroll-progress-bar"></div>
    <nav class="navbar navbar-expand-lg px-3">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li>
            <a href="#about" class="blend-text nav-menu">
              <span class="menu-item">BIO</span> <span class="menu-item-active">BIO</span>
            </a>
          </li>
          <li>
            <a href="#stack" class="nav-menu">
              <span class="menu-item">STACK</span> <span class="menu-item-active">STACK</span>
            </a>
          </li>
          <li>
            <a href="#works" class="nav-menu">
              <span class="menu-item">WORKS</span> <span class="menu-item-active">WORKS</span>
            </a>
          </li>
          <li>
            <a href="#certifications" class="nav-menu">
              <span class="menu-item">CERTIFICATIONS</span> <span class="menu-item-active">CERTIFICATIONS</span>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1qrvB9CwAZqQQxAwSo28P-WbORyaGrOuo/view?usp=sharing" class="nav-menu btn-cv">
              <span class="menu-item">DOWNLOAD CV</span> <span class="menu-item-active">DOWNLOAD CV</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `;
  document.body.prepend(header);

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-menu");
    const navDiv = document.getElementById("navbarNav");

    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
        navDiv.classList.remove("show");
      });
    });
  });

}
