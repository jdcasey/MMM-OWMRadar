# MMM-DarkSkyRadar
MagicMirror module to get a radar map from OpenWeatherMap

https://openweathermap.org/api/weathermaps 

## Using the module
Go to your MagicMirror modules directory by entering `cd MagicMirror/modules`

run `git clone https://github.com/jdcasey/MMM-OWMRadar`

run `cd MMM-OWMRadar` to get into the newly created folder

run `npm install` to install the dependencies

Add `MMM-OWMRadar` module to the `modules` array in the `config/config.js` file:
````javascript
modules: [
  {
    module: "MMM-OWMRadar",
    position: "top_right",
    header: "Radar",
    config: {
        lat: "41.4026",    // Latitude
        lon: "-88.8255",   // Longitude
        height: "600px",   //optional default
        width: "350px",    //optional default
        zoomLevel: 6,      //optional default (the larger the more zoomed in)
        showMarker: false, //optional default
        updateInterval: 15 * 60 * 1000,  //optional default (15 minutes)
    }
  },
]
````

