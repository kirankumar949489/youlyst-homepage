import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const GoogleMapComponent = () => {
    const [mapCenter] = useState(center); 
    
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={10}>
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
