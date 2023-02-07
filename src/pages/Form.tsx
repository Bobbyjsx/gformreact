import React , {useEffect,createContext,useContext,useState} from 'react';
import { ValueContext } from './Compiler'
import '../App.css';
import Header from "../components/header/Header"
import { ChangeEvent } from 'react';

const ThemeContext = createContext<ThemeContextProps>({
  style: { name: 'purple' },
  setStyle: (newStyle: { name: string }) => {}
});

interface Theme {
  name:string;
}

interface ThemeContextProps {
  style: Theme;
  setStyle: (style: Theme) => void;
}


  

  

function Form() {
  
  // const { style, setStyle } = useContext(ThemeContext);

  const {values, setValues} = useContext(ValueContext);

  const [options, setOptions] = useState('text');

  const [style, setStyle] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("style");
    if (!storedTheme) {
      return { name: 'purple' };
    }
    return JSON.parse(storedTheme);
  });
  
  const [clickCount, setClickCount] = useState( () => {
    const storedDiv = localStorage.getItem("div");
    if (!storedDiv) {
      return 1;
    }
    return JSON.parse(storedDiv);
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  useEffect(() => {
    localStorage.setItem('form values', JSON.stringify(values));
  }, [values]);

  useEffect(() => {
    localStorage.setItem('Question cards', JSON.stringify(clickCount));
  }, [clickCount]);

  const handleOptionsChange = ( e) => {
    // console.log('ths is i' + i)
    setOptions(e.target.value);
  };

  const [divs, setDivs] = useState([]);
  const deleteDiv = (index) => {
    setClickCount(clickCount - 1);
    const newDivs = [...divs];
    newDivs.splice(index, 1);
    setDivs(newDivs);
    // console.log('newDivs:' + newDivs)
  };

  // console.log('Number of questions' + ' ' + clickCount)

  return(
    <div className="text-black p-4 bg-white" >
       <ThemeContext.Provider  value={{style, setStyle}}>
        <Header/>
       </ThemeContext.Provider>
        
      <div className=' bg-slate-200 p-4 shadow-inner'>
            <div className='p-0  w-[60%] mx-auto border-2 rounded-lg bg-white gap-y-5' >
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

           {Array.from({length: clickCount}, (_, i) => (

          <section className='p-0 flex flex-row mx-auto w-full' key={i} >

            <div className='p-4 w-3/5 mx-auto mt-4 border-2 rounded-lg bg-white flex flex-col justify-between shadow-md' style={{borderStyle: `${style}`}}>

                <div className='flex flex-row justify-between'>
                        <input type="text"
                        className='bg-gray-200 w-[58%] p-[16px] border-b-2 border-black rounded-sm font-normal text-sm outline-none'                  style={{borderColor:`${style}`}}
                        placeholder='Input a question'
                        name="question"
                        // value={values.question}
                        onChange={changeHandler}
                      />                    

                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="silver" className="bi bi-image my-auto" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                      </svg>

                      <label className=''>
                        <select className='w-56 p-[16px] border-[1px] rounded-md bg-white' onChange={handleOptionsChange}>
                          <option value={values.text} >
                            Paragraph
                          </option>
                          <option value={values.checkbox}> 
                            Checkbox
                          </option>
                          <option value="Multiple choice">
                            Multiple choice
                          </option>
                          <option value="Dropdown">
                            Dropdown
                          </option>
                          <option value={values.radio}>
                            Radio
                          </option>
                        </select>
                      </label>
                  </div>
                    <div className="flex flex-row mt-4 h-14 justify-between">
                       <input
                          type={options}
                          placeholder={'paragraph'}
                          aria-multiline="true" contentEditable="true"
                          className="border-b-2 border-dashed  p-[14px] w-[70%] outline-none my-auto"
                          style={{borderColor:`${style}`}}
                          // value={values.answer}
                          onChange={changeHandler}
                          name="answer"
                       />
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash my-auto mt-11 " viewBox="0 0 16 16" onClick={deleteDiv}>
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg>
                       {/* {Array.from({length: clickCount}, (_, i) => (
            <div key={i} onClick={() => deleteDiv(i)} title="Add a question" >
              Div {i + 1}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash my-auto mt-11 " viewBox="0 0 16 16" onClick={deleteDiv}>
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg>
            </div>
          ))}; */}
                    </div>
                 
                  </div>
                  
              </section>
      ))}
         

          <div hidden title="Add a question" className='relative 2xl:hidden block  p-0 my-auto mt-4 ' onClick={() => setClickCount(clickCount + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg"  width="50" height="50" fill="black" className="bi bi-plus-circle m-auto bg-white rounded-full cursor-pointer border-none p-0 " viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                 </div>
      </div>
     
    </div>
  );
}
export { ThemeContext };
export default Form;