import React, { useState } from "react";
import Question from "./Question";
import { CompilerProps } from "./Question";
import { Input_Types } from "../context/Type";


// interface InputsContextProps {
//   inputs: Input_Types[];
//   setInputs: (inputs: Input_Types[]) => void;
// }

// const InputContext = createContext<InputsContextProps>({
//   inputs: [],
//   setInputs: (inputs: Input_Types[]) => {
//     // God abeg!
//   },
// });


const populateForm = (): Input_Types[] => {
  const storedValues = localStorage.getItem("new_form_card");
  if (!storedValues) {
    return [
      {
        id: 0,
        title: "Add a title",
        description: "description",
        question: "",
        answer: "",
        date: "date", 
        text: "text",
        radio: "radio",
        number: "number",
        checkbox: "checkbox",
        optionanswer: "",
        optioncheck: false,
        file: "file",
        filter: [],
        map: [],
      },
    ];
  }
  return JSON.parse(storedValues) as Input_Types[];
};

const Compiler: React.FC = (CompilerProps: CompilerProps) => {
  const [inputs, setInputs] = useState<Input_Types[]>(populateForm);
  
  const setInputValues = (inputValues: Input_Types[]) => {
    setInputs(inputValues);
  };
  return (
      <Question inputs={inputs} setInputs={setInputValues} />
  );
};

export default Compiler;
