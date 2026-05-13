document.getElementById('success').addEventListener('click', () => {
    let d = document.createElement("div");
    d.innerHTML = " <i class='fa-solid fa-circle-check'></i> Successfully done";
    d.style.backgroundColor = "green";
    d.classList.add("toast");
    toastBox.appendChild(d);
    setTimeout(() => {
        d.remove();
    }, 3000);
})
document.getElementById('error').addEventListener('click', () => {
    let d = document.createElement("div");
    d.innerHTML = "<i class='fa-solid fa-circle-xmark'></i> An error occurred";
    d.style.backgroundColor = "red";
    d.classList.add("toast");
    toastBox.appendChild(d);
    setTimeout(() => {
        d.remove();
    }, 3000);
})
document.getElementById('warning').addEventListener('click', () => {
    let d = document.createElement("div");
    d.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Warning!!";
    d.style.backgroundColor = "wheat";
    d.classList.add("toast");
    toastBox.appendChild(d);
    setTimeout(() => {
        d.remove();
    }, 3000);
})


const toastBox = document.querySelector("#toastBox");
