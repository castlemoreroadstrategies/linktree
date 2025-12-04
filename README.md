Castlemore Road Strategies - Terminal Linktree

A professional, high-performance landing page utilizing the aesthetic of institutional financial data terminals (Unix OS style). Designed for Castlemore Road Strategies to serve as a central hub for research, models, and contact points.

📊 Project Overview

This project is a lightweight, single-file HTML/CSS solution that mimics the classic "Amber on Black" terminal interface. It is designed to be hosted effortlessly on GitHub Pages, providing a fast and responsive "Link in Bio" page for social media and Substack integration.

Features

Zero Dependencies: Pure HTML, CSS, and JavaScript. No build steps or frameworks required.

Terminal Aesthetic: Monospaced fonts, blinking cursors, and high-contrast colors (Amber/Black).

Responsive: optimized for both desktop trading setups and mobile devices.

Live Clock: Real-time EST market time display.

Interactive UI: Hover states mimic terminal data selection rows.

🚀 Quick Start

Clone the repository:

git clone [https://github.com/yourusername/castlemore-strategies.git](https://github.com/yourusername/castlemore-strategies.git)


Open locally:
Simply double-click index.html to view the dashboard in your browser.

🛠️ Customization Guide

All edits can be made directly inside index.html.

1. Updating Links

Locate the <!-- Navigation Links --> section in the HTML. Change the href and text to match your content.

<!-- Example Update -->
<a href="[https://castlemore.substack.com](https://castlemore.substack.com)" class="terminal-link">
    <span class="link-code">SUBSTACK</span>
    <span class="link-desc">Weekly Macro Research</span>
    <span class="link-arrow">&gt;&gt;</span>
</a>


2. Modifying the Market Ticker

Locate the <!-- Market Ticker Simulation --> section. You can manually update the values or indices (e.g., change SPX to BTC).

<div class="ticker-item">BTC <span class="up">+1.50%</span></div>
<div class="ticker-item">USD/CAD <span class="down">-0.05%</span></div>


3. Color Theme

The visual style is controlled by CSS variables at the top of the <style> block.

To change the main text color, update --bb-orange.

To change the highlight color, update --bb-blue.

:root {
    --bb-black: #121212; 
    --bb-orange: #ff9800; /* Change this hex code for a different look */
    /* ... */
}
📝 License

© 2025 Castlemore Road Strategies. All Rights Reserved.
