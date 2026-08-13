/* =========================================
    1. القائمة المتجاوبة للجوال (Mobile Menu)
========================================= */
const mobileMenu = document.getElementById('mobile-menu') || document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            mobileMenu.textContent = '✕';
        } else {
            mobileMenu.textContent = '☰';
        }
    });

    // إغلاق القائمة عند النقر على أي رابط
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenu.textContent = '☰';
        });
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileMenu.textContent = '☰';
        }
    });
}


/* =========================================
    2. Theme Toggle (الوضع الليلي والنهاري)
========================================= */
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            themeToggleBtn.innerHTML = '<span class="icon">☀️</span> الوضع النهاري';
        } else {
            themeToggleBtn.innerHTML = '<span class="icon">🌙</span> الوضع الليلي';
        }
    });
}


/* =========================================
    3. تصفية جدول الحلقات (Schedule Filtering)
========================================= */
const filterBtns = document.querySelectorAll('.filter-btn');
const tableRows = document.querySelectorAll('.schedule-table tbody tr');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        tableRows.forEach(row => {
            const category = row.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});


/* =========================================
    4. معالجة نموذج التسجيل (Form Validation)
========================================= */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm && formMessage) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const program = document.getElementById('program').value;

        if (name && email && program) {
            formMessage.style.color = 'var(--accent-emerald)';
            formMessage.textContent = `جزاك الله خيراً يا ${name}، تم إرسال طلبك بنجاح وسنتواصل معك قريباً.`;
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        } else {
            formMessage.style.color = '#ef4444';
            formMessage.textContent = 'يرجى تعبئة كافة الحقول المطلوبة.';
        }
    });
}


/* =========================================
    5. إخفاء عنصر التجربة (Trial Text) بعد فترة
========================================= */
setTimeout(function() {
    const trialElement = document.getElementById('trialText');
    if (trialElement) {
        trialElement.classList.add('fade-out');
    }
}, 5000);


/* =========================================
    6. النجوم (منع اختفائها نهائياً)
========================================= */
function fixStars() {
    const stars = document.querySelectorAll(".star");

    stars.forEach(function (star) {
        star.classList.remove("fade-out");
        star.classList.remove("fade-in-down");
        star.classList.remove("fade-in-up");
        star.classList.remove("fade-in-delay");

        star.style.opacity = "1";
        star.style.visibility = "visible";
        star.style.display = "block";
        star.style.animation = "none";
        star.style.transform = "none";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    fixStars();
});

fixStars();