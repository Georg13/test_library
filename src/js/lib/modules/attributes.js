import $ from "../core";

$.prototype.addAtr = function (attribute, value = '') {
    for (let i = 0; i < this.length; i++) {
        if(this[i].getAttribute(attribute) == value) {
                continue;  
        }
        
        this[i].setAttribute(attribute, value);
    }

    return this;
};

$.prototype.removeAtr = function (attribute) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].hasAttribute(attribute)) {
                continue;  
        }
        
        this[i].removeAttribute(attribute);
    }

    return this;
};

$.prototype.toggleAtr = function (attribute, value = '') {
    for (let i = 0; i < this.length; i++) {
        if(this[i].hasAttribute(attribute)) {
            this[i].removeAttribute(attribute); 
        } else {
            this[i].setAttribute(attribute, value);
        }   
    }

    return this;
};

$.prototype.getAtr = function (attribute) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].hasAttribute(attribute)) {
            continue;
        }
        
        return this[i].getAttribute(attribute);
    }
};