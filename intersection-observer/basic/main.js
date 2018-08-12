let observedElements = [];


// console.log(`window width: ${window.innerWidth}`);
// console.log(`window height: ${window.innerHeight}`);

// let isEntered = false;


// function onEnter(index) {
//     console.log(`enter ${index}`);
// }

// function onExit(index) {
//     console.log(`exit ${index}`);
    
// }

/**
 * 
 */
var callback = function(entries, observer) {
    // console.log('intersection observer callback');
    // console.log(observer);
    
    // console.log(entries);
    

    // loop entries
    entries.forEach(function(entry, index) {
        // console.log( entry );
        // console.log(entry.isIntersecting);

        // observedElements.forEach((item) => {
        //     if (item.id === entry.target) {

        //     }
        // })

        // console.log(entry.target.attributes);
        // console.log(entry.target.attributes['data-scrollrunner-id'].nodeValue);

        let entryId = entry.target.attributes['data-scrollrunner-id'].nodeValue;

        if (entry.isIntersecting) {
            console.log('enter');
            document.querySelectorAll('.box').forEach((item) => {
                item.classList.remove('is-active')
            })
            entry.target.classList.add('is-active');
            if (entry.boundingClientRect.top > 0) {
                // console.log('scroll down');
            } else {
                // console.log('scroll up');
            }
            observedElements[entryId].isEntered = true;
        } else {        
            // console.log(index);
                
            document.querySelectorAll('.box').forEach((item) => {
                item.classList.remove('is-active')
            })
            if (observedElements[entryId].isEntered) {
                // onExit(index)
                if (entry.boundingClientRect.top > 0) {
                    // console.log('scroll up');
                } else {
                    // console.log('scroll down');
                }
                observedElements[entryId].isEntered = false;
            }
        }
        
    })

    // console.log(observedElements);
    
}

/**
 * Options
 */
var options = {
    root: null,
    rootMargin: '100px',
    threshold: 0
}

//
var observer = new IntersectionObserver(callback, options);

//
document.querySelectorAll('.box').forEach((item, index) => {
    // item.classList.add(`scrollrunner-${index}`)
    item.setAttribute('data-scrollrunner-id', index);

    observedElements.push({
        id: `.box.scrollrunner-${index}`,
        isEntered: false
    })
    
    observer.observe(item);
})

// console.log(observedElements);



var callback2 = function(entries, observers) {
    // console.log(entries);
    
}

var observer2 = new IntersectionObserver(callback2, options);

observer2.observe(document.querySelector('.square'));