import mapboxgl from "mapbox-gl";

// string markertype, array coords
 const createMarker = function (markerType, coords){
  //create the DOM element and style it
  let marker = document.createElement('div');
  marker.style.width = "32px";
  marker.style.height = "39px";

  //determine which marker img
  if(markerType === "Activity"){
    marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }else if(markerType === "Hotel"){
    marker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }else if (markerType === "Restaurant"){
    marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }

  //make and return marker
  return new mapboxgl.Marker(marker).setLngLat(coords);

};

export default createMarker;
