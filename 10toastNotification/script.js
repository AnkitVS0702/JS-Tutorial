const toastBox = document.querySelector("#toastBox");

function showToast(message, type, icon) {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
    `;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);

}

document.getElementById("success").addEventListener("click", () => {
    showToast(
        "Successfully done",
        "success",
        "fa-solid fa-circle-check"
    );
});

document.getElementById("error").addEventListener("click", () => {
    showToast(
        "An error occurred",
        "error",
        "fa-solid fa-circle-xmark"
    );
});

document.getElementById("warning").addEventListener("click", () => {
    showToast(
        "Warning!",
        "warning",
        "fa-solid fa-circle-exclamation"
    );
});