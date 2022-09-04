import { Box } from "@mui/material";
import { Navbar } from "../components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Box padding="32px">I Only Have the Navbar, and no other components.</Box>
    </div>
  );
}
