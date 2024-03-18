document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeBtn = document.querySelector(".theme");
    const body = document.body;

    toggleThemeBtn.addEventListener("click", function () {
        if (body.classList.contains("dark-theme")) {
            // Mode jour
            body.classList.remove("dark-theme");
            toggleThemeBtn.textContent = "Jour/Nuit";
        } else {
            // Mode nuit
            body.classList.add("dark-theme");
            toggleThemeBtn.textContent = "Jour/Nuit";
        }
    });
});
