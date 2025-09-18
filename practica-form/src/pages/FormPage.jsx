import { useState, useRef } from "react";
import Form from "../components/Form";
import Validations from "../components/Validations";

const FormPage = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errors, setErrors] = useState({});

  //función que se ejecutará cuando se haga click en enviar el formulario
  const manejarEnvio = (formData) => {
    const errors = Validations(formData);

    if (Object.keys(errors).length > 0) {
      if (errors.name && nameRef.current) {
        nameRef.current.focus();
      } else if (errors.email && emailRef.current) {
        emailRef.current.focus();
      } else if (errors.password && passwordRef.current) {
        passwordRef.current.focus();
      }

      setErrors(errors);
    } else {
      alert("Formulario enviado con éxito");
      setErrors({});
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <Form
        onSubmit={manejarEnvio}
        refs={{ nameRef, emailRef, passwordRef }}
        errores={errors}
      />
    </div>
  );
};

export default FormPage;
