org.ekstep.contentrenderer.IDispatcher = Class.extend({
    init: function() {
        this.initDispatcher()
    },
    initDispatcher: function(obj) {
        console.warn("Subclass should implement initDispatcher")
        throw obj
    },
    dispatch: function(event) { throw event }
})