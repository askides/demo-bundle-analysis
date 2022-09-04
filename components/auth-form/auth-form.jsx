import Ajv from "ajv";
import * as React from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Button } from "../button";

const AgeSelect = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

const AuthForm = () => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = () => {
    const ajv = new Ajv();

    const schema = {
      type: "object",
      properties: {
        username: { type: "string" },
        password: { type: "string" },
      },
      required: ["username", "password"],
      additionalProperties: false,
    };

    const validate = ajv.compile(schema);

    const valid = validate({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });

    if (!valid) console.log(validate.errors);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap="16px"
    >
      <h1>SignIn</h1>
      <TextField label="Username" variant="outlined" />
      <TextField type="password" label="Password" variant="outlined" />
      <AgeSelect />
      <Button>Submit</Button>
    </Box>
  );
};

export { AuthForm };
