// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ===== TYPING ANIMATION (Upgraded) =====
const typingTexts = ['Data Architectures', 'Cloud Pipelines', 'Smart Databases', 'Predictive Insights'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function typeText() {
    if (!typingElement) return;

    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

if (typingElement) typeText();

// ===== PROJECTS DATA =====
const sampleProjects = [
    {
        title: 'ATS Resume Analyzer (Agentic AI)',
        description: 'Advanced AI-driven tool using Agentic AI and Fine-tuned LLMs to analyze resumes. Features robust PDF extraction and precise candidate ranking.',
        tech: 'Python, Agentic AI, LLM, NLP, PDFPlumber',
        image: 'images/ats-analyzer.png',
        link: '#'
    },
    {
        title: '📊 Result Analyzer',
        description: 'Automated extraction and processing of university PDF results with high accuracy. Saves significant time for educational institutions.',
        tech: 'Python, Flask, PDFPlumber, Pandas',
        image: 'images/result-analyzer.png',
        link: 'http://127.0.0.1:5000/'
    },
    {
        title: 'Swiggy Data Integration & Analysis',
        description: 'Built a data integration pipeline by ingesting Swiggy datasets from AWS S3 into Snowflake. Designed Fact and Dimension models using Star Schema.',
        tech: 'SQL, AWS (S3, IAM), Snowflake',
        image: 'images/swiggy-project.png',
        link: '#'
    },
    {
        title: 'GreenScan',
        description: 'Interactive web application that allows users to scan QR codes on campus trees to instantly access botanical and medicinal information.',
        tech: 'HTML, CSS, JavaScript, Angular',
        image: 'images/greenscan.png',
        link: 'https://green-scan-uuhi.vercel.app/'
    },
    {
        title: 'Garage DBMS',
        description: 'Designed a normalized relational database with PL/SQL stored procedures, triggers, and functions for automated billing and stock management.',
        tech: 'Oracle SQL, PL/SQL',
        image: 'images/garage-project.png',
        link: '#'
    }
];

// ===== LOAD PROJECTS ON HOMEPAGE =====
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = sampleProjects.map(project => `
        <div class="project-card">
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-content">
                <div class="project-tech">${project.tech}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

// ===== REVEAL ANIMATIONS ON SCROLL =====
function initReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Add reveal class to sections and important components
    const elementsToReveal = document.querySelectorAll('section, .project-card, .skill-tag, .hero-content > *, .hero-image, .glass-container');

    elementsToReveal.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initReveal();
});
