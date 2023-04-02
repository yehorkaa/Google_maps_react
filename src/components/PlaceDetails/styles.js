import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";

export const StyledChip = styled(Chip)(({ theme }) => ({
  margin: "5px 5px 5px 0",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
}));

export const StyledPhone = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
