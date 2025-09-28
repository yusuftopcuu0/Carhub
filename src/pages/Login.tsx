import { Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!email || !password || !name) {
      toast.error("Please enter email, password and name");
      return;
    }
    toast.success("Login successful");
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
          label="Name"
          type="text"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
