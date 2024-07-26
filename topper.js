let currentIndex = 0;
const photos = document.querySelectorAll('.photo-gallery img');

function autoScrollGallery() {
    if (photos.length > 1) {
        currentIndex = (currentIndex + 1) % photos.length;
        const gallery = document.getElementById('photoGallery');
        const offset = -currentIndex * 100; // Adjusted to 100% for better responsiveness
        gallery.style.transform = `translateX(${offset}%)`;
    }
}

setInterval(autoScrollGallery, 3000);
