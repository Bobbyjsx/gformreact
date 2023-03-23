
interface Input_Types {
  optionanswer: string ; 
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
  hasItems: boolean;
  map: any[];
    items: {
        id: number,
        options:string;
        isTrue: boolean,
    }[];
}

interface QuestionItems {
        id: number;
        options: string;
        isTrue: boolean,

    }


export type {Input_Types, QuestionItems};