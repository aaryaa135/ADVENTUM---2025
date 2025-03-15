let nav = document.getElementById("nav-menu");
let butOne = document.getElementById("open");
let butTwo = document.getElementById("close");
let nav_link = document.getElementsByClassName("nav__item"); // Change to nav__item
let toggle = document.getElementById("nav-toggle");

/*==================== SHOW MENU ====================*/
const showMenu = () => {
  // Validate that variables exist
  if (toggle && nav && butOne && butTwo) {
    toggle.addEventListener("click", () => {
      // Toggle the menu and buttons
      nav.classList.toggle("show-menu");
      butOne.classList.toggle("hide");
      butTwo.classList.toggle("hide");
    });

    // Close the menu when a nav link is clicked
    for (let i = 0; i < nav_link.length; i++) {
      nav_link[i].addEventListener("click", () => {
        nav.classList.remove("show-menu");
        butOne.classList.remove("hide");
        butTwo.classList.add("hide");
      });
    }
  }
};

// Call the showMenu function
showMenu();

/*==================== SCROLL EVENT ====================*/
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".nav");
  if (window.scrollY > 50) {
    // Change when scrolled more than 50px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/*==================== COUNTDOWN TIMER ====================*/
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let birthday = "March 27, 2025 09:30:00",
  countDown = new Date(birthday).getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    if (distance > 0) {
      let hourL = (distance % day) / hour;
      hourL = Math.floor(hourL);
      let dayL = Math.floor(distance / day);
      let minuteL = Math.floor((distance % hour) / minute);
      let secondL = Math.floor((distance % minute) / second);

      document.getElementById("days").innerText = dayL;
      document.getElementById("hours").innerText = hourL;
      document.getElementById("minutes").innerText = minuteL;
      document.getElementById("seconds").innerText = secondL;
    }

    // Stop the timer when the date is reached
    if (distance < 0) {
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      clearInterval(x);
    }
  }, 0);