import {
  Button,
  TextField,
  Switch,
  FormGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

const FormSignUp = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prom, setProm] = useState(true);
  const [nov, setNov] = useState(false);

  const { handleSubmit } = props;

  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "",
    },
    lastname: {
      error: false,
      message: "",
    },
  });

  const [errorLastname, setErrorLastname] = useState({
    lastname: {
      error: false,
      message: "",
    },
  });

  function validarNombre(nombre) {
    if (nombre.length >= 3) {
      return { name: { error: false, message: "" } };
    } else {
      return {
        name: { error: true, message: "Deben ser al menos 3 caracteres" },
      };
    }
  }

  function validarApellido(apellido) {
    if (apellido.length >= 3) {
      return { lastname: { error: false, message: "" } };
    } else {
      return {
        lastname: { error: true, message: "Debe ser al menos 3 caracteres" },
      };
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ name, lastName, email, prom, nov });
      }}
    >
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        magin="normal"
        onChange={(e) => setName(e.target.value)}
        value={name}
        error={errors.name.error}
        helperText={errors.name.error ? errors.name.message : ""}
        onBlur={(e) => {
          setErrors(validarNombre(e.target.value));
        }}
      />
      <TextField
        id="lastname"
        label="Apellido"
        variant="outlined"
        fullWidth
        margin="normal"
        onChangeCapture={(e) => setLastName(e.target.value)}
        value={lastName}
        error={errorLastname.lastname.error}
        helperText={
          errorLastname.lastname.error ? errorLastname.lastname.message : ""
        }
        onBlur={(e) => {
          setErrorLastname(validarApellido(e.target.value));
        }}
      />
      <TextField
        id="email"
        label="Correo electronico"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={prom}
              onChange={(e) => setProm(e.target.checked)}
            />
          }
          label="Promociones"
        />
        <FormControlLabel
          control={
            <Switch checked={nov} onChange={(e) => setNov(e.target.checked)} />
          }
          label="Novedades"
        />
      </FormGroup>

      <Button variant="contained" type="submit">
        Registrarse
      </Button>
    </form>
  );
};

export default FormSignUp;
