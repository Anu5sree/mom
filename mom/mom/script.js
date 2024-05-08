let flameTimer;

function moveFlame() {
    clearInterval(flameTimer);
    const flame = document.getElementById('flame');
    flame.style.transform = 'translateY(-2px)';
}

function vanishFlame() {
    clearInterval(flameTimer);
    setTimeout(() => {
        const flame = document.getElementById('flame');
        flame.style.display = 'none';
        flame.remove(); // Remove the flame element from the DOM
        createBurst();
    }, 4000); // Delay for 2 seconds before vanishing the flame
}

function createBurst() {
    let animContainer = document.querySelector(".animation-container");
    let burst = document.querySelector(".burst");
    let lines = document.querySelectorAll(".line"); // Use querySelectorAll
    burst.style.top = Math.random() * innerHeight + "px";
    burst.style.left = Math.random() * innerWidth + "px";
    lines.forEach((line) => {
        const colors = ["#ea4335", "#34a853", "#4285f4", "#fbbc05", "#dc18b9", "#ff5a00", "#8621f8", "#ffff1b"]; // Fixed color values
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        line.style.background = randomColor; // Set background color on line
    });
    let burstClone = burst.cloneNode(true);
    animContainer.appendChild(burstClone);
    setTimeout(() => {
        burstClone.remove();
    }, 80);
    setInterval(createBurst, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    const flame = document.getElementById('flame');
    flame.addEventListener('mouseover', moveFlame);
    flame.addEventListener('mouseout', vanishFlame);

    document.getElementById('envelope').addEventListener('click', burstPapers);

    function burstPapers() {
        // Hide the envelope
        document.getElementById('envelope').style.display = 'none';

        // Display other elements
        document.getElementById('papers').style.display = 'block';
        document.getElementById('happy-birthday').style.display = 'block';
        document.querySelector('.birthday-cake').style.display = 'block'; // Changed to querySelector
        document.getElementById('flame').style.display = 'block'; 
        document.getElementById('text').style.display = 'block'; 

        // Start background birthday song
        const birthdaySong = document.getElementById('birthday-song');
        birthdaySong.play();

        // Animate the cake falling
        const cake = document.querySelector('.cake'); // Changed to querySelector
        cake.style.animation = 'fall 2s forwards';

        // Animate the flame
        const flame = document.getElementById('flame'); // Changed to getElementById
        flame.style.animation = 'flicker 1s infinite alternate';

        // Start the flame timer
        flameTimer = setInterval(vanishFlame, 2000); // Change the interval time as needed
    }
});
