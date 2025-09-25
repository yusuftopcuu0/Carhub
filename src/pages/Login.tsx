import { Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const fakeUser = {
      id: "1",
      name: "Yusuf",
      email: "yusuf@gmail.com",
    };

    login(fakeUser);

    navigate("/profile");
  };

  return (
    <Box className="flex flex-col items-center gap-2 h-screen pt-5">
      <Typography variant="h4">Login</Typography>
      <Typography variant="h6">Login to your account</Typography>
      <Box className="flex flex-col gap-2">
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
