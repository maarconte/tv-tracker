import { Button, Input, Typography } from "@mui/material";
import { Providers, auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import Center from "../utils/Center";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Props {
  login: boolean
}

const AuthContainer = (props: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const signInWithGoogle = () => {
    setDisabled(true);
    signInWithPopup(auth, Providers.google)
      .then(() => {
        setDisabled(false);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.code + ": " + error.message);
        setDisabled(false);
      });
  };

  const signIn = () => {
    setDisabled(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setDisabled(false);
        navigate("/");
      })
      .catch((error: any) => {
        setErrorMessage(error.code + ": " + error.message);
        setDisabled(false);
      });
  }

  const register = () => {
    setDisabled(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setDisabled(false);
        navigate("/");
      })
      .catch((error: any) => {
        setErrorMessage(error.code + ": " + error.message);
        setDisabled(false);
      });
  }

  return (
    <Center height={"auto"}>
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <Button size="large" variant="contained" onClick={props.login ? signIn : register}>
        {props.login ? "Sign In" : "Register"}
      </Button>
      <hr />
      <Button
        startIcon={<GoogleIcon />}
        size="large"
        disabled={disabled}
        variant="contained"
        onClick={signInWithGoogle}
      >
        Sign In With Google
      </Button>
      <Typography sx={{ mt: 2 }} color={"red"}>
        {errorMessage}
      </Typography>
    </Center>
  );
};

export default AuthContainer;
