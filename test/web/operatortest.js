const contains = (container, objectVal) => objectVal.every(val => val >= container[0] && val <= container[1]);

const overlaps = (comparisonVal, objectVal) => objectVal.some(val => contains(comparisonVal, [val])) || comparisonVal.some(val => contains(objectVal,[val])) || contains(comparisonVal, objectVal);

function runTests() {
    let sliderValOne = sliderOne.noUiSlider.get().map(x => parseInt(x));
    sliderValOne.sort(function(a, b){return a - b});
    let sliderValTwo = sliderTwo.noUiSlider.get().map(x => parseInt(x));
    sliderValTwo.sort(function(a, b){return a - b});

    let containsResult = contains(sliderValOne, sliderValTwo);
    greenContainsRed.innerText = containsResult;
    greenContainsRed.classList.toggle('true', containsResult);

    let withinResult = contains(sliderValTwo,sliderValOne);
    greenWithinRed.innerText = withinResult;
    greenWithinRed.classList.toggle('true', withinResult);

    let overlapsResult = overlaps(sliderValOne, sliderValTwo);
    greenOverlapsRed.innerText = overlapsResult;
    greenOverlapsRed.classList.toggle('true', overlapsResult);
}

let sliderOne;
let sliderTwo;
let sliderOneVals;
let sliderTwoVals;
let greenContainsRed;
let greenWithinRed;
let greenOverlapsRed;

window.onload = () => {
    sliderOne = document.getElementById('slider1');
    sliderTwo = document.getElementById('slider2');
    sliderOneVals = [document.getElementById('slider1Low'), document.getElementById('slider1High')];
    sliderTwoVals = [document.getElementById('slider2Low'), document.getElementById('slider2High')];
    greenContainsRed = document.getElementById('gcontainsr');
    greenWithinRed = document.getElementById('gwithinr');
    greenOverlapsRed = document.getElementById('goverlapsr');

    noUiSlider.create(sliderOne, {
        range: {
            min: 1,
            max: 100,
        },
        step: 1,
        start: [1, 100],
    });
    noUiSlider.create(sliderTwo, {
        range: {
            min: 1,
            max: 100,
        },
        step: 1,
        start: [25, 75],
    });

    sliderOne.noUiSlider.on('update', function(values, handle) {
        sliderOneVals[handle].innerText = +values[handle];
        runTests();
    });

    sliderTwo.noUiSlider.on('update', function(values, handle) {
        sliderTwoVals[handle].innerText = +values[handle];
        runTests();
    });
};
