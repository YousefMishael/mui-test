import { styled } from "@mui/material";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.color,
  backgroundColor: theme.backgroundColor,
}));

// function CustomButton() {
//   return <div>CustomButton</div>;
// }

export default CustomButton;
