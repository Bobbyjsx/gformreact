import React, { useState } from "react";
import Question from "./Question";
import { Input_Types } from "../context/Type";

const populateForm = (): Input_Types[] => {
  const storedValues = localStorage.getItem("new_form_card");
  if (!storedValues) {
    return [
      {
        id: Date.now(),
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
        file: "file",
        filter: [],
        map: [],
        hasItems: false,      
        items: [{
            id: Date.now(),
            options:" ",
            isTrue: false,
        }],
},];
  }
  return JSON.parse(storedValues) as Input_Types[];
};

const Compiler: React.FC = () => {
  const [inputs, setInputs] = useState<Input_Types[]>(populateForm);
  
  const setInputValues = (inputValues: Input_Types[]) => {
    setInputs(inputValues);
  };
  return (
      <Question inputs={inputs} setInputs={setInputValues} />
  );
};

export default Compiler;
