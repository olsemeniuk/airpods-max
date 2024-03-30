const colorList = document.querySelector(".color__list");
const header = document.querySelector(".header");
const heroImages = document.querySelectorAll(".hero__img");
const compositionImages = document.querySelectorAll(".composition__img");
const caseImages = document.querySelectorAll(".case__img");
const colorItems = document.querySelectorAll(".color__item");

colorList.addEventListener("click", changeColor)

function changeColor(event) {
    const {target} = event;
    const isButton = target.closest(".color__button");
    if (!isButton) return;

    const buttonColor = isButton.dataset.color;
    const parentItem = isButton.closest(".color__item");
    colorItems.forEach(item => item.hidden = false);
    parentItem.hidden = true;

    header.dataset.gradient = buttonColor;

    changeElementsVisibility(heroImages, "hero__img", buttonColor);
    changeElementsVisibility(compositionImages, "composition__img", buttonColor);
    changeElementsVisibility(caseImages, "case__img", buttonColor);
}

function changeElementsVisibility(elements, elemClass, color) {
    elements.forEach(item => item.hidden = true);
    const activeElem = document.querySelector(`.${elemClass}[data-color=${color}]`);
    activeElem.hidden = false;
}
