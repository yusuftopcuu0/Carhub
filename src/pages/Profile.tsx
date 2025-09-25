import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useAuth } from "../auth/useAuth";

function Profile() {
  const { user, logout } = useAuth();

  return (
    <Box>
      <Typography variant="h4">Profile</Typography>
      <Box>
        <Typography variant="h6">Name: {user?.name}</Typography>
        <Typography variant="h6">Email: {user?.email}</Typography>
        <Button
          variant="contained"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
