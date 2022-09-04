import { Box } from "@mui/material";
import { Navbar, RandomTable } from "../components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Box padding="32px">
        <RandomTable />
      </Box>
    </div>
  );
}
