org.ekstep.contentrenderer.webDispatcher = new (org.ekstep.contentrenderer.IDispatcher.extend({
	type: "webDispatcher",
	initDispatcher: function () {},
	dispatch: function (event) {
		event = (typeof event === "string") ? event : JSON.stringify(event)
		if (typeof telemetry !== "undefined") {
			EventBus.dispatch("telemetryEvent", event)
			telemetry.send(event).then(function () {
				return event
			}).catch(function () {
				if (event.uid) { // TODO Find the Unknow events from(Jquery/cordova/ionic)
					// TelemetryService.logError(instance.name, err) // Code is not required hence commenting this
				} else {
					console.warn("uid is not Present", event)
				}
			})
		} else {
			console.log(event)
		}
	}
}))()
