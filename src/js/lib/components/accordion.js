import $ from "../core";

$.prototype.accordion = function (headerActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headerActive);
            $(this[i].nextElementSibling).toggleClass(contentActive); 

            if(this[i].classList.contains(headerActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
            } else {
                this[i].nextElementSibling.style.maxHeight = "0px";
            }
        });   
        
    }
};

$('.accordion-head').accordion();