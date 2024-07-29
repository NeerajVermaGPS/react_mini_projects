import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [value, setValue] = useState(initialValue)
  const changeValue = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  return [value, changeValue]
}

export const useInput = (initialValue = "") => {
    const [value, setValue] = useState(initialValue)
    const changeValue = (e) => {
      setValue(e.target.value)
    }
  
    return [value, changeValue]
}