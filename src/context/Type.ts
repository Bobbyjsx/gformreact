
interface Input_Types {
  optionanswer: string ;
  optioncheck: boolean;
  title?: string;
  date: string;
  id: number;
  description?: string;
  question: string;
  answer: string;
  checkbox: string;
  text: string;
  radio: string;
  number: string;
  file: string ;
  filter: any[];
  map: any[];
   hasItems: boolean;
    items: {
        id: number,
        question: string,
        options:string[];
        isTrue: boolean,
    }[];
}


export type {Input_Types};