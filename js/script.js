// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const mobileIcon = mobileToggle.querySelector('i');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Switch icon
    if (navLinks.classList.contains('active')) {
        mobileIcon.classList.remove('fa-bars');
        mobileIcon.classList.add('fa-xmark');
    } else {
        mobileIcon.classList.remove('fa-xmark');
        mobileIcon.classList.add('fa-bars');
    }
});

// Mock Cart System
let cart = JSON.parse(localStorage.getItem('gfx_cart')) || [];
const cartCountElements = document.querySelectorAll('.cart-count');

function updateCartCount() {
    const count = cart.length;
    cartCountElements.forEach(el => {
        el.textContent = count;
        // Simple animation
        el.style.transform = 'scale(1.2)';
        setTimeout(() => el.style.transform = 'scale(1)', 200);
    });
}

function addToCart(productId) {
    // In a real app, we would fetch product details here.
    // For now, we just push the ID.
    cart.push({ id: productId, qty: 1 });
    localStorage.setItem('gfx_cart', JSON.stringify(cart));
    updateCartCount();

    // Show simple feedback (could be improved with a toast)
    alert('Product added to cart!');
}

// Initial check
// Initial check
updateCartCount();

// --- Professional Animations (Scroll Reveal) ---
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate
    const animatedElements = document.querySelectorAll(
        '.hero-text, .hero-card, .section-title, .product-card, .footer-content > div, .contact-grid > div, .gallery-section, .info-section'
    );

    // Add initial reveal class
    animatedElements.forEach((el, index) => {
        el.classList.add('reveal');
        // Add random slight delays for natural feel
        if (index % 2 !== 0) el.classList.add('delay-100');
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
});

// --- Lightbox Gallery Logic ---
function openLightbox() {
    document.getElementById("lightboxModal").style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
}

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (!slides || slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Close lightbox when clicking outside the image
window.onclick = function (event) {
    var modal = document.getElementById("lightboxModal");
    if (event.target == modal) {
        closeLightbox();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function (event) {
    if (document.getElementById("lightboxModal").style.display === "block") {
        if (event.key === "Escape") {
            closeLightbox();
        } else if (event.key === "ArrowLeft") {
            plusSlides(-1);
        } else if (event.key === "ArrowRight") {
            plusSlides(1);
        }
    }
});
