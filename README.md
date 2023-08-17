# test_library
Practical work. Mini library of scripts.

<i>use of technology GULP, Javascript, SASS</i>

<a href="https://geokav.ru/demo/test_library/">DEMO</a>
<hr>
<h3>Structure</h3>

<p>1 <b>main.js</b></p>
<p>2 <b>core.js</b> - library core</p>

    - implemented access to page elements when using the $ symbol
    - creating a prototype object
    - the ability to assign properties and methods to an object
    
3 <b>lib.js</b> -  import functions
      
    - components
        - accordion.js
        - carousel.js
        - dropdown.js
        - modal.js
        - tab.js
      
    - modules
        - actions.js 
           - methods 
            1) .html() - get/change element
            2) .eq() - get element from struct
            3) .index() - get element id
            4) .find() - element search
            5) .closest() - find element's parent
            6) .siblings() - get all neighboring elements

        - classes.js
            1) .addClass() - add class element
            2) .removeClass() - del class element
            3) .toggleClass() - toggle class element

        - display.js
            1) .show() - show elements
            2) .hide() - hide elements
            3) .toggle() - toggle elements

        - effects.js 
            1) .animateOverTime() - start animation
            2) .fadeIn() - animation show elements
            3) .fadeOut() - animation hide elements
            4) .fadeToggle() - animation show/hide elements
        
        - handlers.js
            1) .on() - handler on
            2) .off() - handler off
            3) .click - handler click

    - services
        - requests.js 
            1) .get() - receiving data
            2) .post() - sending data
