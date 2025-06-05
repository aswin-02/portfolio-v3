import '../css/footer.css';

export function renderFooter(){
    const section = document.createElement('footer');
    section.className = 'footer';
    section.innerHTML = `
    <div class="footer-container">
        <div class="footer-content">
            <span class="text-front">designed and developed by </span><span class="text-back">MYSELF</span>
        </div>
    </div>
    `;
    document.body.append(section);
}