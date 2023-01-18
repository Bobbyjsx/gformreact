import React from "react";

import { createGlobalState } from "react-hooks-global-state";

const populateForm=()=>{
    const storedValues= localStorage.getItem('form')
    if(!storedValues){
      return {
        // void
      }
    }
    return JSON.parse(storedValues)
  }

const {setGlobalState, useGlobalState}=createGlobalState({
 values:`${populateForm}`, 
 style:"purple",
 theme:true
})

export {setGlobalState, useGlobalState};