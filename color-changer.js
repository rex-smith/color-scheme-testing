let title = document.querySelector(".nav-title");
let fonts = [
  {
    name: "Crete Round",
    family: "serif",
  },
  {
    name: "Fredoka One",
    family: "cursive",
  },
  {
    name: "Fugaz One",
    family: "cursive",
  },
  {
    name: "Itim",
    family: "cursive",
  },
  {
    name: "Mukta",
    family: "sans-serif",
  },
  {
    name: "Pacifico",
    family: "cursive",
  },
  {
    name: "Palanquin Dark",
    family: "sans-serif",
  },
  {
    name: "Passion One",
    family: "cursive",
  },
  {
    name: "Patua One",
    family: "cursive",
  },
  {
    name: "Viga",
    family: "sans-serif",
  },
];

title.addEventListener("click", function () {
  let randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  title.style.fontFamily = `${randomFont.name}, ${randomFont.family}`;
  title.title = `${randomFont.name}`;
});

let fontColorPrimaryElements = document.querySelectorAll(".font-color-primary");
let backgroundColorPrimaryElements = document.querySelectorAll(
  ".background-color-primary"
);
let borderColorPrimaryElements = document.querySelectorAll(
  ".border-color-primary"
);
let fontColorSecondaryElements = document.querySelectorAll(
  ".font-color-secondary"
);
let backgroundColorSecondaryElements = document.querySelectorAll(
  ".background-color-secondary"
);
let borderColorSecondaryElements = document.querySelectorAll(
  ".border-color-secondary"
);
let fontColorTertiaryElements = document.querySelectorAll(
  ".font-color-tertiary"
);
let backgroundColorTertiaryElements = document.querySelectorAll(
  ".background-color-tertiary"
);
let borderColorTertiaryElements = document.querySelectorAll(
  ".border-color-tertiary"
);
let fontColorGrayElements = document.querySelectorAll(".font-color-gray");
let backgroundColorGrayElements = document.querySelectorAll(
  ".background-color-gray"
);

let fontColorSubHeadingElements = document.querySelectorAll(
  ".font-color-subheading"
);
let backgroundColorSubHeadingElements = document.querySelectorAll(
  ".background-color-subheading"
);

const primaryChanger = document.querySelector(".primary-color-changer");
primaryChanger.addEventListener("input", function () {
  for (let i = 0; i < fontColorPrimaryElements.length; i++) {
    fontColorPrimaryElements[i].style.color = this.value;
  }
  for (let i = 0; i < backgroundColorPrimaryElements.length; i++) {
    backgroundColorPrimaryElements[i].style.backgroundColor = this.value;
  }
  for (let i = 0; i < borderColorPrimaryElements.length; i++) {
    borderColorPrimaryElements[i].style.borderColor = this.value;
  }
});

const secondaryChanger = document.querySelector(".secondary-color-changer");
secondaryChanger.addEventListener("input", function () {
  for (let i = 0; i < fontColorSecondaryElements.length; i++) {
    fontColorSecondaryElements[i].style.color = this.value;
  }
  for (let i = 0; i < backgroundColorSecondaryElements.length; i++) {
    backgroundColorSecondaryElements[i].style.backgroundColor = this.value;
  }
  for (let i = 0; i < borderColorSecondaryElements.length; i++) {
    borderColorSecondaryElements[i].style.borderColor = this.value;
  }
});

const tertiaryChanger = document.querySelector(".tertiary-color-changer");
tertiaryChanger.addEventListener("input", function () {
  for (let i = 0; i < fontColorTertiaryElements.length; i++) {
    fontColorTertiaryElements[i].style.color = this.value;
  }
  for (let i = 0; i < backgroundColorTertiaryElements.length; i++) {
    backgroundColorTertiaryElements[i].style.backgroundColor = this.value;
  }
  for (let i = 0; i < borderColorTertiaryElements.length; i++) {
    borderColorTertiaryElements[i].style.borderColor = this.value;
  }
});

const subHeadingChanger = document.querySelector(".subheading-color-changer");
subHeadingChanger.addEventListener("input", function () {
  for (let i = 0; i < fontColorSubHeadingElements.length; i++) {
    fontColorSubHeadingElements[i].style.color = this.value;
  }
  for (let i = 0; i < backgroundColorSubHeadingElements.length; i++) {
    backgroundColorSubHeadingElements[i].style.backgroundColor = this.value;
  }
});

const grayChanger = document.querySelector(".gray-color-changer");
grayChanger.addEventListener("input", function () {
  for (let i = 0; i < fontColorGrayElements.length; i++) {
    fontColorGrayElements[i].style.color = this.value;
  }
  for (let i = 0; i < backgroundColorGrayElements.length; i++) {
    backgroundColorGrayElements[i].style.backgroundColor = this.value;
  }
});
