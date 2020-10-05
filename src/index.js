import mapboxgl from "mapbox-gl";
import createMarker from "./markers"

mapboxgl.accessToken = 'pk.eyJ1IjoiYnBhcnMiLCJhIjoiY2tmd3gxY2NwMXZtdDJ4bzgxdGxndjNhMyJ9.fLyjJrxSTNInpuvCMIjrFg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

let marker = document.createElement('div');
marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker2 = createMarker("Activity", [40.7085, -73.9520]);
marker2.addTo(map);
