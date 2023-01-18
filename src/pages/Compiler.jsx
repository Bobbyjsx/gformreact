import React, { createContext, useState } from "react";
import Form from "./Form";

const ValueContext = createContext({});

const populateForm = () => {
  const storedValues = localStorage.getItem("form");
  if (!storedValues) {
    return {};
  }
  return JSON.parse(storedValues);
};

const Compiler = () => {
  const [values, setValues] = useState(populateForm);

  return (
    <ValueContext.Provider value={{values, setValues}}>
      <Form />
    </ValueContext.Provider>
  );
};

export { ValueContext };
export default Compiler;
