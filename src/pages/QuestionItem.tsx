    import React, {useState} from "react";
    import { Theme } from "./Question";
    import { Input_Types } from "../context/Type";
    import { QuestionItems } from "../context/Type";


    interface itemProps{
      inputs: Input_Types[];
      items:Input_Types["items"];
      setItems:React.Dispatch<React.SetStateAction<Input_Types["items"]>>;
      hasItems: boolean;
      setInputs: React.Dispatch<React.SetStateAction<Input_Types[]>>;
      options:string[];
      style: Theme;
      index: number;
    }

    
    const QuestionItem:React.FC<itemProps> = ({
        inputs,
        setInputs,
        index,
        options,
        style={name:"purple"},
        items,
        setItems,
        hasItems
    }:itemProps) => {
        
         const changeHandler = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            const newInputs = [...items];
            newInputs[index] = {
                ...newInputs[index],
                [name]: value,
            };
            setItems(newInputs);
        };

        const handleCheckboxChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
            const { checked } = event.target;
            const newInputs = [...items];
            newInputs[index]["isTrue"] = checked;
            setItems(newInputs);
        };

        const addItems = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            const newItem: Input_Types["items"][0] = {
                id: items.length + 1,
                options: "",
                isTrue: false,
            };
            const newItems: Input_Types["items"] = [...items, newItem];
            setItems(newItems);
        };
 


        const deleteItems = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            const updatedItems = items.slice(0, -1);
            setItems(updatedItems);
        };

        console.log(items,"it");

    return (
        <>
        { hasItems && (
         <div>
                <div>
                    <div>
                        {items.map((item, i: number ) => (
                            <label htmlFor="op" key={i} className="w-44 flex flex-row gap-5 ml-5">
                                <input
                                    id="optioncheck"
                                    type={options[index]}
                                    placeholder={options[index]}  
                                    className="border-b-2 border-dashed capitalize  py-[14px] w-[70%] outline-none my-auto"
                                    style={{borderColor:`${style.name}`}}
                                    checked={items[i].isTrue}
                                    value={items[i].options}
                                    onChange={(evt) => handleCheckboxChange(i, evt)}
                                    name="optioncheck"
                                /> 
                                <input
                                    name="options"
                                    type="text" 
                                    placeholder={options[index]}
                                    autoComplete="true"
                                    className="border-b-2 border-dashed capitalize  py-[14px] w-44 outline-none my-auto"
                                    value={items[i].options}
                                    onChange={(evt) => changeHandler(i, evt)}
                                    style={{borderColor:`${style.name}`}}
                                />
                                
                            </label>
                        ))}
                    </div>
                </div>
                <div id="options_button" className="flex flex-row gap-6 translate-x-2 duration-500 ease-in-out transition-all">

                    <button onClick={addItems}
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
