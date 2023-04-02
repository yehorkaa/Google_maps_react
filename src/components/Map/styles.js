import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const StyledPaper = styled(Paper)({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
});

export const MapContainer = styled("div")({
  height: "90vh",
  width: "100%",
});

export const MarkerContainer = styled("div")({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": {
    zIndex: 2,
  },
});

export const Pointer = styled("div")({
  cursor: "pointer",
});

const moveZeros = (arr) => {
  // return arr.filter(item => item !== 0).concat(arr.filter(item => item === 0));
  return [
    ...arr.filter((item) => item !== 0),
    ...arr.filter((item) => item === 0),
  ];
};

console.log(moveZeros([0, 0, 0, false, 1, 0, 1, 2, 0, 0, 0, 1, 3, "a"]));

const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
console.log(removeSmallest([4, 10, 3, 1, 2, 0, 0, 0, 0, 33, 6]));
