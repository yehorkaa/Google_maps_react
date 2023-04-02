import React, {useState} from "react";
import GoogleMapReact, { Coords } from "google-map-react";
import { Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Rating } from "@mui/material";
import { MapContainer, MarkerContainer, StyledPaper } from "./styles";

// interface Coordinates {
//   lat: number;
//   lng: number;
// }

// interface MapProps {
//   setCoordinates: (coords: Coordinates) => void;
//   setBounds: (bounds: any) => void;
//   coordinates: Coordinates;
//   places: any;
// }

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked
}) => {
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (  
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCIA39UsiBibaIrkxC8shYMABTDwQHJ-GQ" }} //  process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place) => (
          <MarkerContainer
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <StyledPaper elevation={3}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  style={{ cursor: "pointer" }}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly/>
              </StyledPaper>
            )}
          </MarkerContainer>
        ))}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
