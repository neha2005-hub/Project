const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener("click", () => {
        display.value += key.textContent;
    });
});

document.getElementById("space").addEventListener("click", () => {
    display.value += " ";
});

document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});

document.getElementById("backspace").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});