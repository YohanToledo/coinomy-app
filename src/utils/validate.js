export const REGEX = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
};

const validatePassword = (password, confirmPass) => {
  let result = false;

  const passwordsAreEqual = password === confirmPass;

  if (passwordsAreEqual) {
    result = String(password).match(REGEX.password);
  }

  return result;
};

const validateEmail = (email) => {
  return String(email).match(REGEX.email);
};

export { validatePassword, validateEmail };
