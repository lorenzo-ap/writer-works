new WOW().init();

(function () {
    function setVw() {
        const vw = document.documentElement.clientWidth / 100;
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    }

    setVw();
    window.addEventListener('resize', setVw);
}());

const popupBg = document.querySelector('.popup-bg');
const popupSubmit = document.querySelector('.popup-submit');
const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButtons = document.querySelectorAll('.popup-close');
const submitPopupButton = document.querySelector('.popup__button');
const popupInputs = document.querySelectorAll('.popup__input');
const themeButton = document.querySelector('.theme__button');
const themeInputs = document.querySelectorAll('.theme__input');
const contactButton = document.querySelector('.contact__button');
const contactInputs = document.querySelectorAll('.contact__input');
const headerBurger = document.querySelector('.header__burger');
const headerClose = document.querySelector('.header__close');
const headerRight = document.querySelector('.header__right');
const headerLinks = document.querySelectorAll('.header__link');
const menuBg = document.querySelector('.menu-bg');

headerBurger.addEventListener('click', function () {
    headerRight.classList.add('header__right_active');
    menuBg.classList.add('menu-bg_active');
});

headerClose.addEventListener('click', function () {
    headerRight.classList.remove('header__right_active');
    menuBg.classList.remove('menu-bg_active');
});

headerLinks.forEach(function (e) {
    e.addEventListener('click', function () {
        headerRight.classList.remove('header__right_active');
        menuBg.classList.remove('menu-bg_active');
    });
});

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

function clearInputs(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

closePopupButtons.forEach((button) => {
    button.addEventListener('click', () => {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
        popupSubmit.classList.remove('active');
        clearInputs(popupInputs);
        clearInputs(themeInputs);
        clearInputs(contactInputs);
    });
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
        popupSubmit.classList.remove('active');
        clearInputs(popupInputs);
        clearInputs(themeInputs);
        clearInputs(contactInputs);
    }

    if (e.target === menuBg) {
        headerRight.classList.remove('header__right_active');
        menuBg.classList.remove('menu-bg_active');
    }
});

let counter = 0;

function submitPopup(button, inputs) {
    button.addEventListener('click', function () {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checkValidity()) {
                counter++;
            }
        }

        if (counter == inputs.length) {
            popup.classList.remove('active');
            popupSubmit.classList.add('active');
        }

        counter = 0;
    });
}

function submit(button, inputs) {
    button.addEventListener('click', function () {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checkValidity()) {
                counter++;
                console.log(counter);
            }
        }

        if (counter == inputs.length) {
            popupBg.classList.add('active');
            popupSubmit.classList.add('active');
        }

        counter = 0;
    });
}

submitPopup(submitPopupButton, popupInputs);
submit(themeButton, themeInputs);
submit(contactButton, contactInputs);