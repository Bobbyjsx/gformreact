import React
, {useState}
from 'react';
import classNames from "classnames";
import './App.css';

function App() {
  let color="purple";
  let inputColor="silver"
  let title="Untitled form"
  const [theme, setTheme]=useState(true)
  const openTheme  = () => {
    setTheme(false)
  }
  
  return(
    <div className="text-black p-4 bg-white" >
        <div className="flex flex-row gap-x-[70%]">
          <div className="flex flexcol gap-4 ">
              <svg xmlns="http://www.w3.org/2000/svg"  fill={color} className="bi bi-ui-checks-grid w-12" viewBox="0 0 16 16">
                <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"/>
              </svg>
              <h1 className="text-black font-semibold text-xl pt-4">{title} </h1>
            </div>
            <aside className="">
              <svg xmlns="http://www.w3.org/2000/svg"  fill={color} className="bi bi-palette w-7 pt-5" viewBox="0 0 16 16">
                <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
              </svg>
            </aside>
            
          </div>
         <section className="flex flex-row gap-11 mt-[3%] w-[20%] mx-auto">
            <p className="text-sm flex flex-col text-center">Questions</p>
            <p className="text-sm flex flex-col text-center">Response</p>
            <p className="text-sm flex flex-col text-center">Settings</p>
            <div className={classNames({'w-64 border-2 hidden':theme,"w-64 border-2":!theme})}>
            <h1 className='font-bold text-3xl border-b-2 border-b-gray-200 '>Theme</h1>
            <p className='pl-2'>Select a color of your choosing</p>
            <div className="flex flex-row flex-wrap gap-2 w-56 m-auto pt-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${color}`} className="flex flex-row" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
            </div>
          </div>
          </section>
        
      <div className=' bg-slate-200 p-4'>
            <div className='p-0  w-[60%] mx-auto  border-2 rounded-lg bg-white' style={{borderColor: `${color}`}}>
              <div className="flex flex-col px-6 py-12 gap-3 bg-white border-none rounded-lg h-52 align-middle ">
                <input type="text"
                  className='border-b-2 neat p-2 text-xl font-semibold'
                  // style={purple}
                  placeholder='form Title'
                  // value={title}
                />
                <input type="text"
                  className='border-b-2 neat p-2 font-normal text-sm'
                  // style={purple}
                  placeholder='Form description'
                  // value="forms.description"
                />
             </div>

           </div>
      </div>
    </div>
  );
}

export default App;