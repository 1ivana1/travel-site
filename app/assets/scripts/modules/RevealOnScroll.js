import $ from 'jquery'; 
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset){
        this.itemsToReveal = els;  
        this.offsetPercantage = offset;
    
        this.hideInitialy();
        this.createWaypoints();
    }
    
    
    
    
    hideInitialy() {
        this.itemsToReveal.addClass("reveal-item");
    }
    
    createWaypoints() {
        var that = this;  //global variables pointer
        
        that.itemsToReveal.each( function () {
            var currentItem = this;  //local variable pointer
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: that.offsetPercantage
            });
        });
    }
    
}

export default RevealOnScroll;