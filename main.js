const text = ' Student'
const delay = 200; // Delay between each character (in milliseconds)

let index = 0;
const container = document.getElementById("dynamic-text");

function typeWriter() {
    container.textContent += text.charAt(index);
    index++;

    if (index < text.length) {
        setTimeout(typeWriter, delay);
    }
}

typeWriter();