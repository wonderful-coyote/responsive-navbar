const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}


const logo = document.querySelector('.logo');
const heroTitle = document.querySelector('#hero h1');
const heroText = document.querySelector('#hero p');

const titles = ["Home", "About", "Services", "Contact", "Get Started"];
const texts = [
  "Home is where love resides, memories are created, friends always belong, and laughter never ends. - Unknown",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
  "Don't wait for the perfect moment; take the moment and make it perfect. - Unknown",
  "The secret to getting ahead is getting started. - Mark Twain",
];

// this code allows me to use the logo to toggle toggle srquentially through the nav bar items
// let currentIndex = 0;
// let clickCounter = 0;

// logo.onclick = function () {
//   clickCounter++;

//   if (clickCounter <= 5) {
//     heroTitle.textContent = titles[currentIndex];
//     heroText.textContent = texts[currentIndex];

//     currentIndex = (currentIndex + 1) % titles.length;
//   } else {
//     // Reset to default content
//     heroTitle.textContent = "Welcome";
//     heroText.textContent = "Step into a world of possibilities.";

//     // Reset the click counter
//     clickCounter = 0;
//   }
// };


const dropdownItems = document.querySelectorAll('.dropdown-menu li');
const linksItems = document.querySelectorAll(['.links li', '.action-btn']);
dropdownItems.forEach((item, index) => {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    heroTitle.textContent = titles[index];
    heroText.textContent = texts[index];
  });
});

linksItems.forEach((item, index) => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      heroTitle.textContent = titles[index];
      heroText.textContent = texts[index];
    });
  });

logo.onclick = function () {
  resetHeroContent();
};

function resetHeroContent() {
  heroTitle.textContent = "Welcome";
  heroText.textContent = "Step into a world of possibilities.";
}



