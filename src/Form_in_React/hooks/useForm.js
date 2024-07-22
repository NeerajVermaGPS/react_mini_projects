import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [value, setValue] = useState(initialValue)
  const changeValue = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  const submitForm = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const jsdf = JSON.stringify(Object.fromEntries(formdata))
    console.log(jsdf)
    sessionStorage.setItem("user", jsdf);
    resetForm(e);
  }

  const resetForm = (e) => {
    e.preventDefault()
    setValue(initialValue)
  }

  return [value, changeValue, submitForm, resetForm]
}

export const useInput = (initialValue = "") => {
    const [value, setValue] = useState(initialValue)
    const changeValue = (e) => {
      setValue(e.target.value)
    }
  
    return [value, changeValue]
}