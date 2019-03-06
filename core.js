const $ = function $(selector, context = document) {

    const elements = Array.from(context.querySelectorAll(selector));

    return {
        elements,

        html(newHtml) {
            this.elements.forEach(elem => {
                elem.innerHTML = newHtml;
            })
            return this;
        },

        css(newCss) {
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
        }
    }
}


$('div').html('<b>Member</b>');
$('div').css({ color: 'red' });
$('div').on('click',
    function(event) { alert(event.type) }, { once: true })