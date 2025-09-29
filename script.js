let panorama;

window.initStreetView = function () {
  const defaultLocation = { lat: 48.8584, lng: 2.2945 }; // Eiffel Tower

  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view"),
    {
      position: defaultLocation,
      pov: {
        heading: 160,
        pitch: 0,
      },
      zoom: 1,
    }
  );
};

// Dynamically set Street View position
function setStreetView(lat, lng) {
  const location = { lat: lat, lng: lng };
  if (panorama) {
    panorama.setPosition(location);
  }
}
