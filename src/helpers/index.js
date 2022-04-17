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

  if (validation.required) {
    isValid = value.trim() !== "";
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

export const updateValue = (e, prevState, controlField = null) => {
  const updateState = { ...prevState };

  //если несколько полей для контроля
  if (controlField) {
    const control = { ...updateState[controlField] };
    control.value = e.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);
    updateState[controlField] = control;

    return updateState;
    // для одного поля
  } else {
    updateState.value = e.target.value;
    updateState.touched = true;
    updateState.valid = validate(updateState.value, updateState.validation);

    return updateState;
  }
};

export const readFile = async (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  const result = await new Promise((resolve, reject) => {
    reader.onload = (e) => {
      resolve(reader.result);
    };
  });

  return result;
};

export const updateSrcFile = (prevState, file, src) => {
  const updateState = { ...prevState };
  updateState.touched = true;
  updateState.valid = updateState.extension.includes(file.type);
  updateState.valid && (updateState.src = src);

  return updateState;
};
