const $ = function $(selector, context = document) {

    const elements = Array.from(context.querySelectorAll(selector)); //convert from NodeListOf<any> to array

    return {
        elements,

        html(newHtml) {
            this.elements.forEach(elem => {
                elem.innerHTML = newHtml;
            })
            return this;
        },

        css(newCss) { //you need to pass an object in newCss
            this.elements.forEach(elem => {
                Object.assign(elem.style, newCss);
            })
            return this;
        },

        on(event, hendler, options) {
            this.elements.forEach(elem => {
                elem.addEventListener(event, hendler, options);
            })
            return this;
        },

        fadeIn(duration) {

            var start = performance.now(); //save the start of execution

            window.requestAnimationFrame(function continueShow(now) {

                var process = now - start; //how much time has passed

                if (process < duration) {
                    elements.forEach(elem => {
                        elem.style.opacity = process / duration //divide for get the range[0,1]
                    })

                    window.requestAnimationFrame(continueShow);
                }
            })
            return this;
        }
    }
}


$('.block').fadeIn(2000);