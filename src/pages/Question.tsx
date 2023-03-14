import React, {  useState } from "react";
import "../App.css";
import Header from "../components/header/Header";
import classNames from "classnames";
import { Tab } from "@headlessui/react";
import { Input_Types } from "../context/Type";
import Questions from "./Questions";
import QuestionItem from "./QuestionItem";
// import QuestionItems from "./QuestionItems";


interface Theme {
  name: string;
}



interface CompilerProps {
  inputs: Input_Types[];
  setInputs: React.Dispatch<React.SetStateAction<Input_Types[]>>;
}

const Question: React.FC<CompilerProps> = ({ inputs, setInputs }:CompilerProps) => {

  const [options, setOptions] = useState<string[]>(["text", "text", "text"]);

  const [style, setStyle] = useState<Theme>({ name: "purple" });

  const inputArray = Object.values(inputs);

  const changeHandler = ( index: number, event: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    const newInput = {
      id: inputs.length,
      question: "",
      answer: "",
      checkbox: "checkbox",
      text: "text",
      radio: "radio",
      date: "date",
      number: "number",
      file: "file",
      optionanswer: "",
      optioncheck: false,
      title: "",
      description: "description",
      filter: [],
      prevInputs: [],
      map: [],
    };
    setInputs([...inputs, newInput]);
  };

  // const handleDeleteInput = (id: number) => {
  //   const updatedInputs = inputs.filter((input) => input.id !== id);
  //   console.log(updatedInputs);
  //   setInputs(updatedInputs);
  // };
const setInputValues = (inputValues: Input_Types[]) => {
    setInputs(inputValues);
  };
  const setOptionsValues = (optionValues: string[]) => {
    setOptions(optionValues);
  };
    const setStyleValues = (styleValues: Theme) => {
    setStyle(styleValues);
  };
  return(

    <form className="text-black p-4 bg-white" >

    <Header theme={style} setStyle={setStyle}  inputs={inputs} />

      <Tab.Group>
         <Tab.List className="flex space-x-1 gap-3 rounded-xl bg-gray-100 p-1 w-[70%] mx-auto">
            <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                  )
                }
              >
                Questions
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                  )
                }
              >
               Preview
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                  )
                }
              >
               Settings
              </Tab>
          </Tab.List>

        <Tab.Panels className="mt-2">
            <Tab.Panel
              id="Questions"
              className={classNames(
              "rounded-xl bg-white p-3",
                " "
              )}
            >
             <div className=' bg-slate-200 p-4 shadow-inner'>
                 <Questions 
                    inputs={inputs}
                    setInputs={setInputValues}
                    options={options}
                    setOptions={setOptionsValues}
                    style={style}
                 />
          <div onClick={handleAddInput} title="Add a question" className='relative block w-[50px] p-0 my-auto mt-4 mx-auto rounded-full' >
                    <svg xmlns="http://www.w3.org/2000/svg"  width="50" height="50" fill="black" className="bi bi-plus-circle m-auto bg-white rounded-full cursor-pointer border-none p-0 " viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </div>
      </div>
    </Tab.Panel>
    <Tab.Panel id="preview" className="gap-y-4 flex flex-col mt-16">
      {inputArray.map((item , index) => {
        return (
          <div key={index} className='p-0  w-[60%] mx-auto  bg-white gap-y-5' >
             {index == 0 &&(
              <>
                <h1 className="text-2xl font-bold font-sans flex flex-col text-center">{item.title}</h1>
                <h1 className="flex flex-col text-center text-lg text-gray-500 mt-6 mb-11">{item.description}</h1>
              </>
            )} 
        {inputs[index].question !== "" && (
            <div className="flex flex-col px-6 py-12 gap-3 border-2  bg-white  rounded-lg h-52 align-middle shadow-md">
              <h2 className="font-semibold text-xl">{item.question}</h2>
              <input
                id='preview_answer'
                type={options[index]}
                placeholder={options[index]}
                aria-multiline="true" 
                autoComplete="false"
                className="block border-b-2 border-dashed bg-gray-100 rounded-md px-3 capitalize py-[14px] w-[70%] outline-none my-auto"
                style={{borderColor:`${style.name}`}}
                value={inputs[index].answer}
                onChange={(evt) => changeHandler(index, evt)}
                name="answer"
              />
            </div>
          )}

          </div>
        );
      })}
      {/* <QuestionItems /> */}
    </Tab.Panel>

    </Tab.Panels>
  </Tab.Group>
    </form>
  );
};
export type {Theme, CompilerProps};
export default Question;