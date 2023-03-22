import React,{ useState } from "react";
import { Theme } from "../../pages/Question";
import classNames from "classnames";
import { Input_Types } from "../../context/Type";

interface Styles{
  theme :Theme;
  setStyle:  React.Dispatch<React.SetStateAction<Theme>>;
  inputs: Input_Types[];
}
const Header: React.FC<Styles> = ({ theme={name:"purple"} , setStyle, inputs }) => {
  const [themePopUp, setThemePopUp]=useState(true);
  const text="black";

const handleColor = (color: string) => {
  setStyle({ name: color });
};

  const openTheme  = () => {
    setThemePopUp(PrevTheme => !PrevTheme);
  };
  const index = 0 ;
    return(
        <div className=" ">
         <div id="Header" className="flex flex-row  justify-between grow-0">
          <div className="flex flex-row justify-around gap-x-5 grow-0">
              <svg xmlns="http://www.w3.org/2000/svg"  fill={`${theme.name}`} className="bi bi-ui-checks-grid w-12" viewBox="0 0 16 16" name="blue" onClick={() => handleColor("blue")}>
                <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"/>
              </svg>
              <input  className={`text-black outline-none caret-transparent capitalize  font-semibold text-xl pt-4  ${inputs[index].title !== "" ? "cursor-not-allowed" : "cursor-none"}`} name="head" value={inputs[index].title}
              />
            </div>
            <button hidden style={{backgroundColor:`${theme.name}`, color:`${text}`}} className="px-3 rounded-md font-semibold text-center text-xl">Send</button>

              <aside className="flex flex-col h-[2%] w-[20%] gap-y-3 " >
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Choose a theme"  fill={`${theme.name}`} onClick={openTheme} className="bi bi-palette w-7 pt-5 cursor-pointer" viewBox="0 0 16 16" name="blue">
                  <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
                </svg>
                <div className={classNames({"w-64 border-2 hidden":themePopUp,"w-64 border-2":!themePopUp})}>
              <h1 className="font-bold text-3xl border-b-2 border-b-gray-200 relative z-50" >Theme</h1>
              <p className="pl-2">Select a style of your choosing</p>
              <div className="flex flex-row flex-wrap gap-2 w-56 m-auto pt-2 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="flex flex-row" viewBox="0 0 16 16" name="blue" onClick={() => handleColor("blue")}> 
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red "className="flex flex-row" viewBox="0 0 16 16" name="red" onClick={() => handleColor("red")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="flex flex-row" viewBox="0 0 16 16" name="green" onClick={() => handleColor("green")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="flex flex-row" viewBox="0 0 16 16" name="yellow" onClick={() => handleColor("yellow")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="flex flex-row" viewBox="0 0 16 16" name="orange" onClick={() => handleColor("orange")}> 
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="purple" className="flex flex-row" viewBox="0 0 16 16" name="purple" onClick={() => handleColor("purple")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="pink" className="flex flex-row" viewBox="0 0 16 16" name="pink" onClick={() => handleColor("pink")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="brown" className="flex flex-row" viewBox="0 0 16 16" name="brown" onClick={() => handleColor("brown")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="flex flex-row" viewBox="0 0 16 16" name="gray" onClick={() => handleColor("gray")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black"className="flex flex-row" viewBox="0 0 16 16" name="black" onClick={() => handleColor("black")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orchid" className="flex flex-row" viewBox="0 0 16 16" name="orchid" onClick={() => handleColor("orchid")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="teal" className="flex flex-row" viewBox="0 0 16 16" name="teal" onClick={() => handleColor("teal")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="midnightblue" className="flex flex-row" viewBox="0 0 16 16" name="midnightblue" onClick={() => handleColor("midnightblue")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="olivedrab" className="flex flex-row" viewBox="0 0 16 16" name="olivedrab" onClick={() => handleColor("olivedrab")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="navy" className="flex flex-row" viewBox="0 0 16 16" name="navy" onClick={() => handleColor("navy")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="chocolate" className="flex flex-row" viewBox="0 0 16 16" name="chocolate" onClick={() => handleColor("chocolate")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" className="flex flex-row" viewBox="0 0 16 16" name="goldenrod" onClick={() => handleColor("goldenrod")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="flex flex-row" viewBox="0 0 16 16" name="blue" onClick={() => handleColor("blue")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aqua" className="flex flex-row" viewBox="0 0 16 16" name="aqua" onClick={() => handleColor("aqua")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lime" className="flex flex-row" viewBox="0 0 16 16" name="lime" onClick={() => handleColor("lime")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="khaki" className="flex flex-row" viewBox="0 0 16 16" name="khaki" onClick={() => handleColor("khaki")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="ivory" className="flex flex-row" viewBox="0 0 16 16" name="ivory" onClick={() => handleColor("ivory")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="indigo" className="flex flex-row" viewBox="0 0 16 16" name="indigo" onClick={() => handleColor("indigo")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="flex flex-row" viewBox="0 0 16 16" name="gold" onClick={() => handleColor("gold")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="crimson" className="flex flex-row" viewBox="0 0 16 16" name="crimson" onClick={() => handleColor("crimson")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aquamarine" className="flex flex-row" viewBox="0 0 16 16" name="aquamarine" onClick={() => handleColor("aruamarine")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Chartreuse" className="flex flex-row" viewBox="0 0 16 16" name="Chartreuse" onClick={() => handleColor("chartreuse")}>
                  <circle cx="8" cy="8" r="8"/>
                </svg>
              </div>
            </div>
            </aside>
            
          </div>
         <section className="flex flex-row gap-11 mt-[3%] w-[20%] mx-auto">
           
           
           
           
          </section>
        </div>
    );
};

export default Header;
