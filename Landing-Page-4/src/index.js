const typingTextElement = document.getElementById("typing-text");
const texts = ["Mais de cinco milhões de discos vendidos.", "Com 7 músicas no Top 50 do Spotify.", "Lidera no Spotify Brasil."];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isTyping = true;

function displayText() {
    const currentText = texts[currentTextIndex];
    const displayedText = currentText.slice(0, currentCharIndex);

    typingTextElement.innerText = displayedText;

    if (isTyping) {
        if (currentCharIndex < currentText.length) {
            currentCharIndex++;
            setTimeout(displayText, 130); // Adjust typing speed (130 milliseconds)
        } else {
            isTyping = false;
            setTimeout(displayText, 2000); // Display for 2 seconds
        }
    } else {
        if (currentCharIndex > 0) {
            currentCharIndex--;
            setTimeout(displayText, 50); // Adjust erasing speed (50 milliseconds)
        } else {
            isTyping = true;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(displayText, 500); // Delay before typing the next text
        }
    }
}

displayText();
