function createHeart(){
    const heart = document.createElement('div');

    heart.classList.add('heart')

    heart.innerText = "💜"

    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.style.left = Math.random() * 100 + "vw"

    document.body.appendChild(heart);

    setTimeout(() => {
heart.remove
    }, 5000)
}

setInterval(createHeart, 200)