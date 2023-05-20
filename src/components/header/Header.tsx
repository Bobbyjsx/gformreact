import React from "react";
import ThemeModal from "./Theme";
import { Input_Types } from "../../context/Type";
import { Theme } from "../../pages/Question";

interface Styles {
  theme: Theme;
  setStyle: React.Dispatch<React.SetStateAction<Theme>>;
  inputs: Input_Types[];
}
const Header = ({ theme = { name: "purple" }, setStyle, inputs }: Styles) => {

  const text = "black";
  const handleColor = (color: string) => {
    setStyle({ name: color });
  };
  const index = 0;

  return (
    <header id="Header" className="flex flex-row  justify-between grow-0  bg-white/30 backdrop-blur-md p-4 sm:fixed top-0 left-0 w-full ">
      <div className="flex flex-row justify-around gap-x-5 grow-0 bg-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill={`${theme.name}`} className="bi bi-ui-checks-grid w-12" viewBox="0 0 16 16" name="blue" onClick={() => handleColor("blue")}>
          <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z" />
        </svg>
        <p className="text-black outline-none caret-transparent capitalize  bg-none font-semibold text-xl pt-4"
        >{inputs[index].title}
        </p>
      </div>
      <button hidden style={{ backgroundColor: `${theme.name}`, color: `${text}` }} className="px-3 rounded-md font-semibold text-center text-xl">Send</button>

      <aside className="flex flex-col h-[2%] w-[20%] gap-y-3 " >
        <ThemeModal
          theme={theme} setStyle={setStyle} inputs={inputs}
        />
      </aside>

    </header>
  );
};

export type { Styles };
export default Header;