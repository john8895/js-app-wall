/* You can download the plugin here: dinoballiana.com/dolly

 !!! dolly.js is in alpha version so for any issue please drop me a line: dinoballiana.com !!! */

(function () {
    'use strict';

    function dollyInit() {

        /* INIT DOLLY */

        let dolly = new Dolly(document.getElementById('dolly-container'), {
            ease: 0.5,     // animation ease
            perspective: 3000,  // container perspective
            distance: 5000,   // distance between layers
            fullpage: true,  // enable one scroll to move throgh layers
            delay: 1500, // if lockScroll its true - set delay betwen each scroll (deafult 1500 ms)
            duration: 800, // animation duration - for anchors and full page transitions (default 800 ms)
            bodyClass: true, // when layer is active add to body a class with the layer's id value - ex. 'on-layer1'
            activeMenu: true, // add class "active-anchor" to anchor
            onReady: function () {
                /* CALLED WHEN PLUGIN IS READY */
                console.log('onReady')
            },
            onScroll: function (index, scroll, direction, limit) {
                /* CALLED DURING SCROLL */
                console.log('onScroll', index, scroll, direction, limit)
            },
            onChange: function (prev, index, scroll) {
                /* CALLED WHEN INDEX CHANGE */
                console.log('onChange', prev, index, scroll)
            },
            onResize: function (prev, index, scroll) {
                /* CALLED WHEN WINDOW IT'S RESIZED */
                console.log('onResize', prev, index, scroll)
            }
        });

        /* DOLLY EXTERNAL METHODS

      stopDolly() - disable listener for scroll & anchors
      startDolly() - enable listener for scroll & anchors

      blockScroll(boolean) - enable or disable scroll

      getIndex() - return active INDEX
      getScroll() - return scroll position
      moveToIndex(index,duration) - move app to target index - duration in ms is optional (default 1000)

      */
    }

    document.addEventListener("DOMContentLoaded", function (event) {
        dollyInit();
    });

})();
