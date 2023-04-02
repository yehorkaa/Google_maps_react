import React, { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import {
  CircularProgress,
  Typography,
  InputLabel,
  MenuItem,
  Grid,
  Select,
} from "@mui/material";
import {
  FormaControl as FormControl,
  Container,
  LoadComp,
  Lists,
} from "./styles";
interface placeTypes {
  name: string;
}

const List: React.FC<any> = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  setRating,
  rating,
}) => {
  console.log(childClicked);

  console.log(places);

  const [elRefs, setElRefs] = useState<Array<React.RefObject<any>>>([]);

  useEffect(() => {
    setElRefs(
      Array(places?.length)
        .fill(null)
        .map((_, i) => elRefs[i] || createRef()) //Если элемент массива elRefs существует, то он возвращается без изменений.
      // В противном случае вызывается функция createRef() для создания новой ссылки.
    );
  }, [places]);
  return (
    <Container>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <LoadComp>
          <CircularProgress />
        </LoadComp>
      ) : (
        <>
          <FormControl>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value={"restaurants"}>restaurants</MenuItem>
              <MenuItem value={"hotels"}>Hotels</MenuItem>
              <MenuItem value={"attractions"}>attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Lists container spacing={3}>
            {places?.map((place: any, i: any) => (
              <Grid ref={elRefs[i]} item key={i} xs={12}>
                {" "}
                {/*Теперь беру и обращаюсь к созданным линкам
               с помощью индексов в цикле используя массив с того же места откуда и создал массив*/}
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Lists>
        </>
      )}
    </Container>
  );
};

export default List;
