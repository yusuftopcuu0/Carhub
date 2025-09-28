import { Box, Button } from "@mui/material";
import Logo from "../images/carhub-logo.png";
import { useAuth } from "../auth/useAuth";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <Box style={{ width: "100%", backgroundColor: "#ccc" }}>
      <Box className="flex items-center justify-between">
        <img src={Logo} alt="Logo" width={150} />

        <Box className="flex items-center gap-5">
          <Button variant="contained">Home</Button>
          <Button>Create</Button>
          <Button>Profile</Button>
          {isAuthenticated ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <Button>Login</Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
