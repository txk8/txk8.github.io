document.addEventListener("DOMContentLoaded", function () {
    const trigger = document.getElementById("mobileMenuTrigger");
    const menu = document.getElementById("mobileMenu");

    if (!trigger || !menu) return;

    trigger.addEventListener("click", function () {
        menu.classList.toggle("menu__dropdown--open");
    });
});
