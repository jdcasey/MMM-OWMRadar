/* Magic Mirror
 * Module: MMM-OWMRadar
 */

Module.register("MMM-OWMRadar",{

	defaults: {
		height: "600px",
		width: "350px",
		zoomLevel: 6,
		xTiles: 3,
		yTiles: 3,
		updateInterval: 15 * 60 * 1000,
		showMarker: false,
	},

	start: function () {
		this.scheduleUpdate();
	},

	getStyles: function() {
		return ["MMM-OWMRadar.css"];
	},
	
	getDom: function() {
		let iframe = document.createElement("iframe");
		iframe.id = "mmowmradarframe";
		iframe.classList.add("iframe");
		iframe.style = "border:0;";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.scrolling = "no";

		let lat = this.config.lat;
		let lon = this.config.lon;
		let zoom = this.config.zoomLevel;
		let appid = this.config.appid;

		iframe.src = `https://tile.openweathermap.org/map/precipitation_new/${zoom}/${lon}/${lat}.png?appid=${appid}`;

		return iframe;
	},

	scheduleUpdate: function(delay) {
		var nextLoad = this.config.updateInterval;
		if (typeof delay !== "undefined" && delay >= 0) {
			nextLoad = delay;
		}

		var self = this;
		setInterval(function() {
			self.updateData();
		}, nextLoad);
	},

	updateData: function() {
		this.updateDom(0);
	}
});
