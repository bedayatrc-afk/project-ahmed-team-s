// ==========================================
// ملف المؤثرات البصرية والحركية (Effects.js)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. مؤثر إخفاء جملة الـ Trial بعد 5 ثوانٍ
    setTimeout(() => {
        const trialElement = document.getElementById('trialText');
        if (trialElement) {
            trialElement.classList.add('fade-out');
        }
    }, 5000);

    // 2. مؤثر إخفاء القمر والنجوم في السمة (Sky Effects) بعد 5 ثوانٍ
    setTimeout(() => {
        const skyEffects = document.getElementById('skyEffects');
        if (skyEffects) {
            skyEffects.style.transition = "opacity 1s ease";
            skyEffects.style.opacity = "0";
            setTimeout(() => {
                skyEffects.style.display = "none";
            }, 1000);
        }
    }, 5000);

});