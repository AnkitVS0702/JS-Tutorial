const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");

/* Open */

openBtn.addEventListener("click", () => {
    overlay.classList.add("active");
});

/* Close */

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});

/* Close On Outside Click */

overlay.addEventListener("click", (e) => {
    if(e.target === overlay){
        overlay.classList.remove("active");
    }
});