    import React , {useState} from "react";
    import QuestionItem from "./QuestionItem";
    import { ChangeEvent } from "react";
    import { Theme } from "./Question";
    import { Input_Types } from "../context/Type";
    
    interface QuestionProps {
        options: string[];
        setOptions: React.Dispatch<React.SetStateAction<string[]>>;
        inputs: Input_Types[];
        setInputs: React.Dispatch<React.SetStateAction<Input_Types[]>>;
        style: Theme;
        hasItems:boolean;
        setHasItems: React.Dispatch<React.SetStateAction<boolean>>;
        
    }

const Questions: React.FC<QuestionProps> = ({
    options,
    setOptions,
    style = {name: "purple"},
    inputs,
    setInputs,
    hasItems, 
    setHasItems
}: QuestionProps, QuestionProps) => {

    const inputArray = Object.values(inputs) ;
    // const optionsArray=  Object.values(inputs.items)
      
    // const [hasItems, setHasItems] = useState(false);
    
    const handleOptionsChange = ( index : number, e: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = e.target.value;
        const newOptions = [...options];
        newOptions[index] = selectedOption;
        setOptions(newOptions);

        if (e.target.value === "checkbox" || e.target.value === "radio") {
            setHasItems(true);
        } 
        else {
            setHasItems(false);
        }
        
    };
    
    const changeHandler = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newInputs = [...inputs];
        newInputs[index][name] = value;
        setInputs(newInputs);

    };

     const handleDeleteInput = (id: number) => {
      const updatedInputs = inputs.filter(( input ) => input.id  !== id);
      setInputs(updatedInputs);
    };

    const setInputValues = (inputValues: Input_Types[]) => {
    setInputs(inputValues);
  };
  
    return (
        <div>
            
            {inputArray.map(( input, index : number) => (

                <section className='p-0 flex flex-col mx-auto w-full' key={index} >
                    {index === 0 && (
                    <div 
                        className="flex flex-col w-3/5 mx-auto px-6 py-12 gap-3 bg-white border-none rounded-lg h-52      align-middle shadow-md"
                    >

                        <input 
                            type="text"
                            className='border-b-2 p-2 text-xl font-semibold outline-none capitalize'
                            style={{borderColor:`${style.name}`}}
                            placeholder='form Title'
                            name="title"
                            value={inputs[index].title}
                            onChange={(evt) => changeHandler(index, evt)}
                        />
                        <input 
                            type="text"
                            className='border-b-2 p-2 font-normal text-sm outline-none capitalize'
                            style={{borderColor:`${style.name}`}}
                            placeholder='form Title'
                            name="description"
                            value={inputs[index].description}
                            onChange={(evt) => changeHandler(index, evt)}
                        />
                    </div>     
                    )}

                    <div 
                        className='p-4 w-3/5 mx-auto mt-4 border-2 rounded-lg bg-white flex flex-col justify-between shadow-md' 
                        style={{borderStyle: `${style.name}`}}
                    >

                        <div className='flex flex-row justify-between'>
                            <input 
                            type="text"
                            className='bg-gray-200 w-[58%] p-[16px] border-b-2 border-black capitalize rounded-sm font-normal text-sm outline-none' 
                            style={{borderColor:`${style.name}`}}
                            placeholder='Input a question'
                            name="question"
                            value={inputs[index].question}
                            onChange={(evt) => changeHandler(index, evt)}
                            />                    

                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="silver" className="bi bi-image my-auto" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                            </svg>

                            <label className=''>
                                <select   
                                    className='w-56 p-[16px] border-[1px] rounded-md bg-white' 
                                    onChange={(evt) => handleOptionsChange(index,evt)}
                                >
                                <option value={inputs[index].text} >
                                    Paragraph
                                </option>

                                <option value={inputs[index].checkbox}> 
                                    Checkbox
                                </option>

                                <option value={inputs[index].radio}>
                                Multiple choice
                                </option>

                                <option value={inputs[index].file}>
                                    File
                                </option>

                                <option value={inputs[index].number}>
                                    Number
                                </option>

                                <option value={inputs[index].date}>
                                    Date Of Birth
                                </option>

                                </select>
                            </label>
                        </div>

                        <div 
                            className="flex flex-col mt-4 h-auto justify-between ease-in-out duration-700 transition-opacity"
                        >
                            <label htmlFor="ques" className='w-[70%] flex flex-col'>
                               { !hasItems &&( 
                               <input
                                    id='answer'
                                    type={options[index]}                  
                                    placeholder={options[index]}
                                    aria-multiline="true" contentEditable="false"
                                    aria-disabled
                                    autoComplete="false"
                                    className="block border-b-2 border-dashed  capitalize py-[14px] w-[70%] outline-none my-auto"
                                    style={{borderColor:`${style.name}`}}
                                    value={inputs[index].answer}
                                    onChange={(evt) => changeHandler(index, evt)}
                                    name="answer"
                                />)}
                                
                                <QuestionItem
                                    inputs={inputs}
                                    setInputs={setInputValues}
                                    options={options}
                                    index={index}
                                    hasItems={hasItems}
                                    {...QuestionProps}
                                />
                            </label>
                          
                            { 
                                index > 0 && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash my-auto mt-11 " viewBox="0 0 16 16"  onClick={() => handleDeleteInput(input.id)}>
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H14v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            }
                         </div>
                    </div>
                </section>      
            ))}
        </div>
    );
};

    export default Questions;
    export type {QuestionProps};

