"use strict";

const pwdMap = () => {};

const pwdDb = {
  "test@test.com": {
    password: "password",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoxfQ.ISYwgEAiGvrAIqX-f3wqIvhcsQAtyAD27b__t3keoms",
  },
};

const retrieveJwt = ({ email, password }) => {
  if (password === pwdDb[email]) {
    console.log("Login successful!");
  } else {
    console.log("Incorrect password");
  }
};

const stall = async (stallTime = 500) => {
  await new Promise(resolve => setTimeout(resolve, stallTime));
};

export default {
  login: async ({ email, password }) => {
    await stall();
    const jwt = retrieveJwt({ email, password });
    if (jwt) localStorage.setItem("jwt", jwt);
    console.log("Token stored!");
    console.log(localStorage.getItem("jwt"));
  },
};
