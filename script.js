:root {
    --navy: #0a192f;
    --dark: #020c1b;
    --accent: #64ffda;
    --transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: var(--dark);
    color: #ffffff;
    overflow-x: hidden;
}

nav {
    background: rgba(10, 25, 47, 0.95);
    padding: 1rem 5%;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(10px);
    z-index: 1000;
    animation: slideDown 0.8s ease;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--accent);
    position: relative;
    overflow: hidden;
}

.logo::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent);
    transform: translateX(-100%);
    transition: var(--transition);
}

.logo:hover::after {
    transform: translateX(0);
}

nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    color: #ffffff;
    text-decoration: none;
    position: relative;
    padding: 0.5rem 0;
}

nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent);
    transform: scaleX(0);
    transition: var(--transition);
}

nav a:hover::after {
    transform: scaleX(1);
}

header {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(to bottom, var(--navy), var(--dark));
    padding: 0 5%;
    position: relative;
    overflow: hidden;
}

header::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, var(--accent) 0%, transparent 10%);
    opacity: 0.1;
    animation: rotate 20s linear infinite;
}

h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s forwards 0.5s;
}

.cta-button {
    margin-top: 2rem;
    padding: 1rem 2rem;
    background: transparent;
    border: 2px solid var(--accent);
    color: var(--accent);
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    opacity: 0;
    animation: fadeIn 0.8s forwards 1s;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--accent);
    transform: translateX(-100%);
    transition: var(--transition);
    z-index: -1;
}

.cta-button:hover {
    color: var(--navy);
}

.cta-button:hover::before {
    transform: translateX(0);
}

.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.game-card {
    background: var(--navy);
    padding: 1rem;
    border-radius: 10px;
    transition: var(--transition);
    opacity: 0;
    transform: translateY(30px);
}

.game-card.visible {
    opacity: 1;
    transform: translateY(0);
}

.game-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.section {
    padding: 100px 5%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* About Section Styles */
.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 3rem;
}

.about-text {
    animation: fadeIn 1s ease-out;
}

.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

.stat-item {
    text-align: center;
    padding: 2rem;
    background: var(--navy);
    border-radius: 10px;
    transition: var(--transition);
}

.stat-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    color: var(--accent);
    margin-bottom: 0.5rem;
}

.team-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Contact Section Styles */
.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 3rem;
}

.contact-info {
    background: var(--navy);
    padding: 3rem;
    border-radius: 10px;
}

.info-item {
    display: flex;
    align-items: center;
    margin: 2rem 0;
    gap: 1rem;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social-links a {
    color: var(--accent);
    font-size: 1.5rem;
    transition: var(--transition);
}

.social-links a:hover {
    transform: translateY(-5px);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
    padding: 1rem;
    background: var(--navy);
    border: none;
    border-radius: 5px;
    color: white;
    transition: var(--transition);
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
    outline: 2px solid var(--accent);
}

.contact-form textarea {
    height: 150px;
    resize: none;
}

.submit-btn {
    padding: 1rem 2rem;
    background: var(--accent);
    color: var(--navy);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition);
}

.submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
}

@media (max-width: 768px) {
    .about-content,
    .contact-container {
        grid-template-columns: 1fr;
    }
    
    .stats {
        grid-template-columns: 1fr;
    }
}
.game-card {
    background: var(--navy);
    padding: 1.5rem;
    border-radius: 10px;
    transition: var(--transition);
    opacity: 0;
    transform: translateY(30px);
    text-decoration: none;
    color: white;
    position: relative;
    overflow: hidden;
}

.game-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
}

.game-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.game-icons i {
    color: var(--accent);
    transition: var(--transition);
}

.game-icons i:hover {
    transform: scale(1.2);
}

.read-more {
    display: inline-block;
    color: var(--accent);
    margin-top: 1rem;
    font-weight: bold;
    transition: var(--transition);
}

.game-card:hover .read-more {
    transform: translateX(10px);
}

.game-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: var(--transition);
}

.game-card:hover::after {
    transform: scaleX(1);
}
footer {
    background: var(--navy);
    padding: 4rem 5% 0;
    margin-top: 4rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-section {
    animation: fadeIn 0.8s ease-out;
}

.footer-logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--accent);
    margin-bottom: 1rem;
}

.footer-section h4 {
    color: var(--accent);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.8rem;
}

.footer-section ul li a {
    color: #fff;
    text-decoration: none;
    transition: var(--transition);
}

.footer-section ul li a:hover {
    color: var(--accent);
    padding-left: 8px;
}

.social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
}

.social-icons a {
    color: #fff;
    font-size: 1.5rem;
    transition: var(--transition);
}

.social-icons a:hover {
    color: var(--accent);
    transform: translateY(-5px);
}

.contact-info li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
}

.contact-info i {
    color: var(--accent);
}

.footer-bottom {
    text-align: center;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .social-icons {
        justify-content: center;
    }

    .contact-info li {
        justify-content: center;
    }
}
/* Base styles for all devices */
:root {
    --mobile-padding: 20px;
    --desktop-padding: 5%;
}

/* Mobile First Approach (base styles) */
@media screen and (max-width: 768px) {
    nav {
        padding: 1rem var(--mobile-padding);
    }

    nav ul {
        display: none; /* Hide regular menu */
    }

    /* Mobile Menu Button */
    .mobile-menu-btn {
        display: block;
        font-size: 1.5rem;
        color: var(--accent);
        background: none;
        border: none;
        cursor: pointer;
    }

    /* Mobile Menu */
    .mobile-nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        height: 100vh;
        background: var(--navy);
        padding: 2rem;
        transition: var(--transition);
    }

    .mobile-nav.active {
        right: 0;
    }

    .mobile-nav ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    /* Header adjustments */
    header {
        padding: 0 var(--mobile-padding);
        text-align: center;
    }

    h1 {
        font-size: 2.5rem;
    }

    /* Games section */
    .games-grid {
        grid-template-columns: 1fr;
        padding: 0 var(--mobile-padding);
    }

    /* About section */
    .about-content {
        grid-template-columns: 1fr;
        padding: 0 var(--mobile-padding);
    }

    /* Contact section */
    .contact-container {
        grid-template-columns: 1fr;
        padding: 0 var(--mobile-padding);
    }
}

/* Tablet styles */
@media screen and (min-width: 769px) and (max-width: 1024px) {
    .games-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .about-content {
        grid-template-columns: 1fr;
    }
}

/* Desktop styles */
@media screen and (min-width: 1025px) {
    nav {
        padding: 1rem var(--desktop-padding);
    }

    .mobile-menu-btn {
        display: none;
    }

    nav ul {
        display: flex;
    }

    .games-grid {
        grid-template-columns: repeat(3, 1fr);
        padding: 0 var(--desktop-padding);
    }

    .about-content {
        grid-template-columns: 1fr 1fr;
        padding: 0 var(--desktop-padding);
    }

    .contact-container {
        grid-template-columns: 1fr 1fr;
        padding: 0 var(--desktop-padding);
    }
}

/* Shared responsive images */
img {
    max-width: 100%;
    height: auto;
}
