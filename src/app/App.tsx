import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import Map from "../components/Map/Map";
import { getPlacesData } from "../api";
// import PlaceDetails from "../components/PlaceDetails/PlaceDetails";
interface Coordinates {
  lat: number;
  lng: number;
}
const App: React.FC = () => {
  const [places, setPlaces] = useState<any>([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState<any>({});
  const [bounds, setBounds] = useState<any>(null);
  const [childClicked, setChildClicked] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState<string>("restaurants");
  const [rating, setRating] = useState<number | string>(0);

  console.log("bounds", bounds);

  useEffect(() => {
    const res = places.filter((place: any) => Number(place.rating) > rating);
    setFilteredPlaces(res);
  }, [rating]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(
          data.filter((place: any) => place.name && place.num_reviews > 0)
        );
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            setRating={setRating}
            rating={rating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
