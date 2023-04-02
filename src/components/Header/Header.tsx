import React, {useState} from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles"; // импорт стилизованных компонентов
import { Autocomplete } from '@react-google-maps/api';


const Header: React.FC<any> = ({setCoordinates}): any => {
  const [autocomplete, setAutocomplete] = useState<any>(null)
  const onLoad = (autoC: any) => setAutocomplete(autoC)
    const onPlaceChanged = () => {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
      setCoordinates({lat, lng});
    }
  return (
    <AppBar position="static" style={{ background: "#192dd2" }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flex: 1 }}>
          Travel Advisor
        </Typography>
        <Box display="flex" sx={{ "align-items": "center" }}>
          <Typography variant="h6" sx={{ marginRight: "10px" }}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
