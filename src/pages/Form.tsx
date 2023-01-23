import React , {useEffect,createContext,useContext,useState} from 'react';
import { ValueContext } from './Compiler'
import '../App.css';
import Header from "../components/header/Header"
import { ChangeEvent } from 'react';

  interface Theme{
    name:string,
    
  }
  interface ThemeContextProps{
    style:Theme|string;
    setStyle:(style:Theme) =>void
  }
  const ThemeContext = createContext<ThemeContextProps>({style:{name:'purple'}, setStyle:()=>{let style="purple"}});
function Form() {
  const saveTheme = () => {
    const storedTheme = localStorage.getItem("style");
    if (!storedTheme) {
      return {
        name:"purple"
      }
    }
    return JSON.parse(storedTheme);
  };

  const [style, setStyle]=useState<Theme>(saveTheme())
  const {values, setValues} = useContext(ValueContext);
  const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value});
  }
  useEffect(()=>{
    localStorage.setItem('form', JSON.stringify(values))
  }, [values])

  return(
    <div className="text-black p-4 bg-white" >
       <ThemeContext.Provider  value={{style, setStyle}}>
        <Header/>
       </ThemeContext.Provider>
        
      <div className=' bg-slate-200 p-4 shadow-inner'>
            <div className='p-0  w-[60%] mx-auto border-2 rounded-lg bg-white' >
              <div className="flex flex-col px-6 py-12 gap-3 bg-white border-none rounded-lg h-52 align-middle shadow-md">
                <input type="text"
                  className='border-b-2 p-2 text-xl font-semibold outline-none '
                  style={{borderColor:`${style}`}}
                  placeholder='form Title'
                  name="title"
                  value={values.title}
                  onChange={changeHandler}
                />
                <input type="text"
                  className='border-b-2 p-2 font-normal text-sm outline-none'
                  style={{borderColor:`${style}`}}
                  placeholder='form Title'
                  name="description"
                  value={values.description}
                  onChange={changeHandler}
                />
             </div>                  

           </div>
           <div className='p-0 flex flex-row mx-auto w-full '>
            <div className='p-4 w-3/5 mx-auto mt-4 border-2 rounded-lg bg-white flex flex-col justify-between relative 2xl:left-0 left-6 shadow-md' style={{borderStyle: `${style}`}}>
                <div className='flex flex-row justify-between'>
                        <input type="text"
                        className='bg-gray-200 w-[58%] p-[16px] border-b-2 border-black rounded-sm font-normal text-sm outline-none'                  style={{borderColor:`${style}`}}
                        placeholder='Input a question'
                        name="question"
                        value={values.question}
                        onChange={changeHandler}
                      />                    

                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="silver" className="bi bi-image my-auto" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                      </svg>

                      <label className=''>
                        <select className='w-56 p-[16px] border-[1px] rounded-md bg-white'>
                          <option value="Paragraph" >
                            Paragraph
                          </option>
                          <option value="Checkbox"> 
                            Checkbox
                          </option>
                          <option value="Multiple choice">
                            Multiple choice
                          </option>
                          <option value="Dropdown">
                            Dropdown
                          </option>
                          <option value="Radio">
                            Radio
                          </option>
                        </select>
                      </label>
                  </div>
                    
                  <input
                    type={'text'}
                    placeholder={'paragraph'}
                    aria-multiline="true" contentEditable="true"
                    className="border-b-2 border-dashed mt-4 p-[14px] w-[70%] outline-none"
                    style={{borderColor:`${style}`}}
                    value={values.answer}
                    onChange={changeHandler}
                    name="ans"
                 />
                  </div>
                  <div title="Add a question" className='relative 2xl:hidden block  p-0 my-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="bi bi-plus-circle m-auto bg-white rounded-full cursor-pointer border-none p-0 " viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                 </div>
              </div>
      </div>
     
    </div>
  );
}
export { ThemeContext };
export default Form;