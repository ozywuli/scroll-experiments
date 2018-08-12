let numSteps = 20;

let boxElement;
let prevRatio = 0;
let increasingColor = 'rgba(40, 40, 190, ratio)';
let decreasingColor = 'rgba(190, 40, 40, ratio)';

let color = 'red';

window.addEventListener('loadl', function(event) {
    boxElement = document.querySelector('#box');
    createObserver();
}, false);

function createObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: buildThresholdList()
    }

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
}

function buildThresholdList() {
    let thresholds = [];

    for (let i = 1; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);

    return thresholds;
}

function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > prevRatio) {
            entry.target.style.backgroundColor = increasingColor.replace('ratio', entry.intersectionRatio);
        } else {
            entry.target.style.backgroundColor = decreasingColor.replace('ratio', entry.interSectionRatio);
        }
    })
}

