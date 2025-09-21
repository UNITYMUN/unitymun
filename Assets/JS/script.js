document.addEventListener("DOMContentLoaded", function() {

    const navbar = document.getElementById('nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    const countdownTargetDate = new Date("2025-11-08T00:00:00+05:30").getTime();
    const countdownElement = document.getElementById('countdown');

    if (countdownElement) {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countdownTargetDate - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                daysEl.textContent = '00';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        };

        const countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992 && !link.href.endsWith('#')) {
                    bsCollapse.hide();
                }
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const certImg = document.getElementById("certification-img");
    if (certImg) {
        const modal = document.createElement("div");
        modal.classList.add("certification-modal");
        modal.innerHTML = `<img src="${certImg.src}" alt="Certification">`;
        document.body.appendChild(modal);

        certImg.addEventListener("click", () => {
            modal.classList.add("active");
        });
        modal.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }
});


document.querySelectorAll('.video-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
        const videoSrc = thumb.getAttribute('data-video');
        const modal = document.getElementById('videoModal');
        const modalVideo = document.getElementById('modalVideo');

        modal.style.display = 'flex';
        modalVideo.src = videoSrc;
        modalVideo.play();
    });
});

document.querySelector('.video-close').addEventListener('click', () => {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');

    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.src = '';
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('videoModal');
    if (e.target === modal) {
        const modalVideo = document.getElementById('modalVideo');
        modal.style.display = 'none';
        modalVideo.pause();
        modalVideo.src = '';
    }
});



