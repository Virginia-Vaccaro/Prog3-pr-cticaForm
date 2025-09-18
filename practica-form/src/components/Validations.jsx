const Validations = (formData) => {
  const errores = {};

  if (!formData.name.trim()) {
    errores.name = "El nombre es obligatorio";
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(formData.name)) {
    errores.name = "Solo se permiten letras";
  }

  if (!formData.email.trim()) {
    errores.email = "El email es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errores.email = "El email no es válido";
  }

  if (!formData.password.trim()) {
    errores.password = "La contraseña es obligatoria";
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)
  ) {
    errores.password = "Mínimo 8 caracteres, incluyendo letras y números";
  }

  return errores;
};

export default Validations;
