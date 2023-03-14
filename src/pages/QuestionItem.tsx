    import React, {useState} from "react";
    import classNames from "classnames";
    import { Theme } from "./Question";
    import { Input_Types } from "../context/Type";


    interface itemProps{
      inputs: Input_Types[];
      hasItems: boolean;
      setInputs: React.Dispatch<React.SetStateAction<Input_Types[]>>;
      options:string[];
      style: Theme;
      index: number;
      optionClass:string;
      setOptionClass: React.Dispatch<React.SetStateAction<string>>;
      buttonValue: string; 
      setButtonValue: React.Dispatch<React.SetStateAction<string>>;
    }

    interface QuestionItems {
        id: number;
        options: string[];
        isChecked: boolean;

    }
    const QuestionItem:React.FC<itemProps> = ({
        inputs,
        setInputs,
        index,
        optionClass,
        buttonValue,
        options,
        style={name:"purple"},
        hasItems
    }:itemProps) => {

         const [items, setItems] = useState<QuestionItems[]>([
            {
                id: 0,
                options: ["What is Your Age"],
                isChecked: false,
            },
        ]);
        
        const changeHandler = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            const newInputs = [...inputs];
            newInputs[index][name] = value;
            setInputs(newInputs);
            // const updatedOptions = [...inputs];
            // updatedOptions[index].optionValues = value;
            // setInputs(updatedOptions);

        };
         
        const handleCheckboxChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
            const { checked } = event.target;
            const newInputs = [...inputs];
            newInputs[index]["optioncheck"] = checked;
            setInputs(newInputs);
            console.log(checked);
            console.log(index);
        };

        const addItems = (e: React.MouseEvent<HTMLButtonElement>) =>{
            e.preventDefault();
            const newItems = [{ 
                id: items.length,
                options: ["what is your name"],
                isChecked: false,
            }];
            setItems([...items, ...newItems]);
        };

        const deleteItems = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            const updatedItems = items.slice(0, -1);
            setItems(updatedItems);
        };



    return (
        <>
        { hasItems && (
         <div>
                <div>
                    <div>
                        {items.map((item, i) => (
                            <label htmlFor="op" key={i} className="w-44 flex flex-row gap-5 ml-5">
                                <input
                                    id='optioncheck'
                                    type={options[index]}
                                    placeholder={options[index]}  
                                    aria-multiline="true" contentEditable="true"
                                    className="border-b-2 border-dashed capitalize  py-[14px] w-[70%] outline-none my-auto"
                                    style={{borderColor:`${style.name}`}}
                                    checked={inputs[index].optioncheck}
                                    onChange={(evt) => handleCheckboxChange(i, evt)}
                                    name="optioncheck"
                                /> 
                                <input
                                    name="optionanswer"
                                    type="text" 
                                    placeholder={options[index]}
                                    autoComplete='true'
                                    className="border-b-2 border-dashed capitalize  py-[14px] w-44 outline-none my-auto"
                                    value={inputs[index].optionanswer}
                                    onChange={(evt) => changeHandler(i, evt)}
                                    style={{borderColor:`${style.name}`}}
                                />
                                
                            </label>
                        ))}
                    </div>
                </div>
                <div id="options_button" className="flex flex-row gap-6 translate-x-2 duration-500 ease-in-out transition-all">

                    <button onClick={ addItems}
                        className="flex text-sm font-normal bg-slate-100 hover:bg-slate-200 w-24 justify-center text-center py-2 mt-4 rounded-lg">
                            Add option
                    </button>

                    { items.length >= 1 && (<button onClick={deleteItems}
                    className="flex text-sm font-normal bg-slate-100 hover:bg-slate-200 w-24 justify-center text-center py-2 mt-4 rounded-lg" title="delete an option">
                        Del option
                    </button>) }
                </div>
            </div>)}
        </>
    );
};
    export type {itemProps};
    export default QuestionItem;
