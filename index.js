// Countdown Timer Script
(function () {
    const countdownDate = new Date("Jan 15, 2025 00:00:00").getTime();
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const countdownContainer = document.querySelector('.countdown');

    function updateCountdown() {
        const now = Date.now();
        const distance = countdownDate - now;

        if (distance >= 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

            daysElement.textContent = days;
            hoursElement.textContent = hours;
            minutesElement.textContent = minutes;
            secondsElement.textContent = seconds;
        } else {
            countdownContainer.textContent = "The countdown has ended!";
            clearInterval(countdownInterval);
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
})();

// Form Validation and Submission Script
(function () {
    const submitButton = document.getElementById("submitButton");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const formError = document.getElementById("formError");
    const popup = document.getElementById("popup");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    submitButton.addEventListener("click", function () {
        let isValid = true;
        formError.textContent = "";
        formError.style.opacity = "0";

        nameField.classList.remove("input_error");
        emailField.classList.remove("input_error");

        if (nameField.value.trim() === "") {
            nameField.classList.add("input_error");
            formError.textContent = "Please fill in the name field.";
            isValid = false;
        }

        if (emailField.value.trim() === "") {
            emailField.classList.add("input_error");
            formError.textContent = isValid ? "Please fill in the email field." : "Please fill in both name and email fields.";
            isValid = false;
        } else if (!emailPattern.test(emailField.value.trim())) {
            emailField.classList.add("input_error");
            formError.textContent = "Invalid email format.";
            isValid = false;
        }

        if (!isValid) {
            formError.style.opacity = "1";
        } else {
            popup.style.opacity = "1";
            popup.style.visibility = "visible";
            setTimeout(() => {
                popup.style.opacity = "0";
                popup.style.visibility = "hidden";
            }, 2000);

            nameField.value = "";
            emailField.value = "";
        }
    });

    document.querySelectorAll(".input-field").forEach(input => {
        input.addEventListener("focus", function () {
            this.classList.remove("input_error");
            formError.style.opacity = "0";
        });
    });
})();

// Mouse Move Animation Script
(function () {
    document.addEventListener('mousemove', (event) => {
        const { clientX: mouseX, clientY: mouseY } = event;
        const blueRound = document.querySelector('.blue_round');
        const greenRound = document.querySelector('.green_round');

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveFactor = 0.02;
        const maxOffset = 40;

        const offsetX = (mouseX - centerX) * moveFactor;
        const offsetY = (mouseY - centerY) * moveFactor;

        if (blueRound) {
            blueRound.style.transform = `translate(${Math.min(offsetX, maxOffset)}px, ${Math.min(offsetY, maxOffset)}px) rotate(3.73deg)`;
        }

        if (greenRound) {
            greenRound.style.transform = `translate(${Math.min(-offsetX, maxOffset)}px, ${Math.min(-offsetY, maxOffset)}px) rotate(3.73deg)`;
        }
    });

    const style = document.createElement('style');
    style.innerHTML = `
      .blue_round, .green_round {
        transition: transform 0.1s ease-out;
      }
    `;
    document.head.appendChild(style);
})();

// Fade-in Elements on Scroll Script
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const fadeInElements = document.querySelectorAll('.fade-in');

        const handleScroll = () => {
            fadeInElements.forEach(function (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    element.classList.add('visible');
                }
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
    });
})();
