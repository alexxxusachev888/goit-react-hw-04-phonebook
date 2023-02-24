import { useState, useEffect } from "react";

export const useLocaleStorage = (key, defaultvalue) =>  {
    const [state, setState] = useState(()=> {
      return JSON.parse(localStorage.getItem(key)) || defaultvalue;
    })
  
    useEffect(()=> {
      localStorage.setItem(key, JSON.stringify(state));
  
    }, [key, state]);
  
    return [state, setState];
  }