import {getBodySections, getInputsRatios, getTabIndicator} from "./getters.js";

const SECTION_SELECTED_CLASS = 'section-shown';

const inputsRatios = getInputsRatios()

const indicatorDiv = getTabIndicator()

const bodySections = getBodySections()

for(let input of inputsRatios) {
    input.addEventListener('click', onTabSelectedListener(input))
}

// Execute the first tab and select it.
inputsRatios[0].click()

async function onInputHandleSection(currentIndex) {
    bodySections.forEach(sec => sec.classList.remove(SECTION_SELECTED_CLASS))
    bodySections[currentIndex].classList.add(SECTION_SELECTED_CLASS);
}

// Event
function onTabSelectedListener(input) {
    return _ => {
        const currentIndex = inputsRatios.indexOf(input)
        indicatorDiv.style.top = `calc((100% / ${inputsRatios.length}) * ${currentIndex})`

        // Handle the body content section
        onInputHandleSection(currentIndex)

        //console.log(e.target.id, e.target.style.height, 'selected')
    };
}
