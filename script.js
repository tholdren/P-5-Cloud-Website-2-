// JavaScript for interactivity and animations

// Show information for each cloud block
function showInfo(message) {
    alert(message);
}

// Example dynamic animation - Parallax scrolling
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
