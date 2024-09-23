export function getTabIndicator() {
    return document.getElementsByClassName('tabs-list')[0]
        .getElementsByClassName('indicator')[0];
}

export const getInputsRatios = () => {
    let inputHolder = document.getElementsByClassName('check-holder')[0];

    const inputRatio = inputHolder
        .getElementsByTagName("input");

    return Array.from(inputRatio);
}

export const getBodySections = () => {
    let bodySectionHolder = document.getElementsByClassName('body-content')[0];

    const sections = bodySectionHolder
        .getElementsByTagName("section");

    return Array.from(sections);
}