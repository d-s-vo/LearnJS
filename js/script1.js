"use strict";



function createScript (src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}



createScript('js/script5.js');
 
