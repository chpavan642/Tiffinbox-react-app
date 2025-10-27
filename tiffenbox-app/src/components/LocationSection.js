import React from "react";
import "./LocationSection.css";

export default function LocationSection() {
  // Coordinates for a central area in Hyderabad (e.g., Banjara Hills/Jubilee Hills)
  // Approx. coordinates: 17.4124° N, 78.4834° E
  const HYDERABAD_LAT = 17.4124;
  const HYDERABAD_LON = 78.4834;
  const ZOOM_LEVEL = 10.5; // Adjusted zoom for a city view

  // NOTE: Replace 'YOUR_MAPBOX_ACCESS_TOKEN' with your actual token
  const mapboxStaticUrl = `https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/${HYDERABAD_LON},${HYDERABAD_LAT},${ZOOM_LEVEL},0/600x600?access_token=YOUR_MAPBOX_ACCESS_TOKEN`;

  // Replace with your actual Hyderabad address and Google Maps link
  const storeAddress = "Road No. 1, Banjara Hills, Hyderabad, Telangana 500034";
  const googleMapsLink = "https://maps.app.goo.gl/YourActualGoogleMapsLink"; // Replace with a real link

  return (
    <section className="location-section">
      <div className="location-content">
        <p className="section-subtitle">OUR LOCATIONS</p>
        <h2 className="section-title">
          FIND US <br /> AT THESE <br /> CONVENIENT LOCATIONS
        </h2>
        <button className="store-btn">
          Our Store <span>→</span>
        </button>
      </div>

      <div className="location-map">
        <div className="map-circle">
          <img
            src={mapboxStaticUrl}
            alt="Map showing TiffinBox location in Hyderabad"
          />
          <div className="map-marker">
            <span className="dot"></span>
            <div className="marker-info">
              <h4>TIFFIN BOX - HYDERABAD</h4>
              <p>{storeAddress}</p>
              <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                GET DIRECTION →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}