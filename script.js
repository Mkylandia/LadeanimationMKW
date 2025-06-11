document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    const emojiContainer = document.querySelector('.emoji-container');
    
    const emojis = ['🚀', '🌟', '😎', '🔥', '🎉'];
    
    // Erstelle schwebende Emojis
    for (let i = 0; i < 10; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = `${Math.random() * 100}vh`;
        emoji.style.animationDelay = `${Math.random() * 5}s`;
        emojiContainer.appendChild(emoji);
    }
    
    // Ladeanimation nach 3 Sekunden ausblenden
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            content.style.display = 'block';
        }, 1000);
    }, 3000);
});
