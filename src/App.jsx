import { useState } from "react";
import "./App.css";
import FormSignUp from "./components/FormSignUp";
import { Container, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  const handleSubmit = (valores) => {
    console.log("app: ", valores);
  };

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center">
        Formulario Registro
      </Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
