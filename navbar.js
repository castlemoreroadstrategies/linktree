class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .top-bar {
                    background-color: #03a9f4;
                    color: #000;
                    padding: 0.5rem 1rem;
                    display: flex;
                    justify-content: space-between;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-family: 'Courier New', Courier, monospace;
                }
                
                .logo-mark {
                    background: #000;
                    color: #03a9f4;
                    padding: 0 0.25rem;
                }
            </style>
            <div class="top-bar">
                <span>CASTLEMORE RD <span class="logo-mark">GO</span></span>
                <span id="clock">00:00:00</span>
            </div>
        `;

        // Initialize clock
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }

    updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        const clock = this.shadowRoot.getElementById('clock');
        if (clock) {
            clock.innerText = `${timeString} ${timezone}`;
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);
