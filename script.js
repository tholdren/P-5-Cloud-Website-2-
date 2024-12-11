document.addEventListener('DOMContentLoaded', () => {
    // Learn More Button Toggle
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const learnMoreContent = document.getElementById('learn-more-content');

    learnMoreBtn.addEventListener('click', () => {
        learnMoreContent.classList.toggle('hidden');
    });

    // Capabilities Carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    let currentCarouselIndex = 0;

    function updateCarousel() {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[currentCarouselIndex].classList.add('active');
    }

    carouselNext.addEventListener('click', () => {
        currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
        updateCarousel();
    });

    carouselPrev.addEventListener('click', () => {
        currentCarouselIndex = (currentCarouselIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    });

    // Testimonials Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    let currentTestimonialIndex = 0;

    function updateTestimonials() {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[currentTestimonialIndex].classList.add('active');
    }

    testimonialNext.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonials();
    });

    testimonialPrev.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonials();
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Submission (Basic Client-side Validation)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});