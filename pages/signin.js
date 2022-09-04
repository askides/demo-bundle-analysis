import { Box } from "@mui/material";
import { AuthForm, Navbar } from "../components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Box padding="32px">
        <AuthForm />
      </Box>
    </div>
  );
}
