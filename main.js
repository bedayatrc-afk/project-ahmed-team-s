document.addEventListener('DOMContentLoaded', function () {

    let btnopen = document.getElementById('open');
    let btnclose = document.getElementById('close');
    let sidebar = document.querySelector('.side-bar');

    if (!btnopen || !btnclose || !sidebar) return;

    // الحالة عند فتح الصفحة
    sidebar.classList.remove('hide');
    btnclose.classList.remove('hide');
    btnopen.classList.add('hide');


    // زر Close
    btnclose.addEventListener('click', function () {

        sidebar.classList.add('hide');

        btnclose.classList.add('hide');

        btnopen.classList.remove('hide');
    });


    // زر Open
    btnopen.addEventListener('click', function () {

        sidebar.classList.remove('hide');

        btnclose.classList.remove('hide');

        btnopen.classList.add('hide');
    });


    // الوضع الليلي
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggleBtn) {

        themeToggleBtn.addEventListener('click', function () {

            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {

                themeToggleBtn.innerHTML =
                    '<span class="icon">☀️</span> الوضع النهاري';

            } else {

                themeToggleBtn.innerHTML =
                    '<span class="icon">🌙</span> الوضع الليلي';
            }

        });

    }

});