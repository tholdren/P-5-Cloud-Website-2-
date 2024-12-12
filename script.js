// script.js

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselSlides = document.querySelector('.carousel-slides');
    carouselSlides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    showSlide(currentSlide);
});

document.querySelector('.carousel-control.next').addEventListener('click', () => {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
});

// Click-to-Reveal Content Blocks
const contentBlocks = document.querySelectorAll('.content-block');
contentBlocks.forEach((block) => {
    block.addEventListener('click', () => {
        const text = block.querySelector('.block-text');
        text.style.display = text.style.display === 'block' ? 'none' : 'block';
    });
});

// Floating Cloud Buttons Animation
const cloudButtons = document.querySelectorAll('.cloud-button');
cloudButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-10px)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0)';
    });
});
