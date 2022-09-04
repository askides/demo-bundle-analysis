import { Button as MaterialButton } from "@mui/material";

const Button = (props) => {
  return (
    <MaterialButton variant="contained" {...props}>
      Submit
    </MaterialButton>
  );
};

export { Button };
