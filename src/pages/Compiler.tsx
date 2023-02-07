import React, { createContext, useState } from "react";
import Form from "./Form";

interface Values{
  title: string,
  description:string,
  question:string,
  answer:string,
  head:string,
  checkbox:string,
  dropdown:string,
  text:string,
  radio:string,
}

interface ValuesContextProps{
  values: Values;
  setValues:(values: Values) =>void
}
const ValueContext = createContext<ValuesContextProps>({}as ValuesContextProps)

const populateForm = () => {
  const storedValues = localStorage.getItem("form");
  if (!storedValues) {
    return {
       title: "Add a title",
       //  head: "",
       answer:'',
       description: "",
       question: "Add a question",
    }
  }
  return JSON.parse(storedValues);
};

const Compiler = () => {
  const [values, setValues] = useState<Values>(populateForm);

  return (
    <ValueContext.Provider value={{values, setValues}}>
      <Form />
    </ValueContext.Provider>
  );
};

export { ValueContext };
export default Compiler;
