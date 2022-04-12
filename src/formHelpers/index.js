export const createControl = (config, validation) => {
  return {
    ...config,
    validation,
    valid: !validation,
    value: "",
    touched: false,
  };
};

export const validate = (value, validation = null) => {
  if (!validation) {
    return true;
  }

  let isValid = true;

  // switch (true) {
  //   case validation.required:
  //     isValid = value.trim() !== "" && isValid;
  //     break;

  //   case validation.minLength:
  //     isValid = value.length >= validation.minLength && isValid;
  //     break;
  //   case validation.email:
  //     isValid = validateEmail(value) && isValid;
  //     break;
  // }

  if (validation.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid;
  }

  if (validation.email) {
    isValid = validateEmail(value) && isValid;
  }

  return isValid;
};

export const validateForm = (formControls) => {
  let isFormReady = true;

  Object.keys(formControls).forEach((control) => {
    isFormReady = formControls[control].valid && isFormReady;
  });

  return isFormReady;
};

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
