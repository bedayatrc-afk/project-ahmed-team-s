document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.querySelector(".side-bar");
    const openBtn = document.getElementById("open");
    const closeBtn = document.getElementById("close");
    const themeBtn = document.getElementById("theme-toggle");

    /* ==========================================
       التأكد من وجود العناصر
    ========================================== */

    if (!sidebar) {
        console.log("لم يتم العثور على .side-bar");
        return;
    }

    if (!openBtn) {
        console.log("لم يتم العثور على #open");
    }

    if (!closeBtn) {
        console.log("لم يتم العثور على #close");
    }


    /* ==========================================
       الحالة الأولى
       Sidebar مفتوح
    ========================================== */

    sidebar.classList.remove("hide");

    if (closeBtn) {
        closeBtn.classList.remove("hide");
    }

    if (openBtn) {
        openBtn.classList.add("hide");
    }


    /* ==========================================
       زر CLOSE
    ========================================== */

    if (closeBtn) {

        closeBtn.onclick = function (event) {

            event.preventDefault();

            sidebar.classList.add("hide");

            closeBtn.classList.add("hide");

            if (openBtn) {
                openBtn.classList.remove("hide");
            }

        };

    }


    /* ==========================================
       زر OPEN
    ========================================== */

    if (openBtn) {

        openBtn.onclick = function (event) {

            event.preventDefault();

            sidebar.classList.remove("hide");

            openBtn.classList.add("hide");

            if (closeBtn) {
                closeBtn.classList.remove("hide");
            }

        };

    }


    /* ==========================================
       الوضع الليلي
    ========================================== */

    if (themeBtn) {

        themeBtn.onclick = function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                themeBtn.innerHTML =
                    '<span class="icon">☀️</span> الوضع النهاري';

            } else {

                themeBtn.innerHTML =
                    '<span class="icon">🌙</span> الوضع الليلي';

            }

        };

    }

});