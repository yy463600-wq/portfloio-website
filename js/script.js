// Add custom JavaScript here
function textFunction() {
    const text = `I Am Yahya Khamis.`
    const textEl = document.getElementById('moveText')
    const delay = 100

    moveFunction(text, textEl, delay)
}

function moveFunction(text, textEl, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            textEl.textContent += text.charAt(i)
        }, delay * i);
    }
}

document.addEventListener('DOMContentLoaded', textFunction)