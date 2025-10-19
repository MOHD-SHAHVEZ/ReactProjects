import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"


function App() {

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    // API call ko simulate krte hi  -> mara words ma api call karke data late hai 5 second baad: 
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
    console.log("Submitting the Form: ", data); 
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name: </label>
          <input className = {errors.firstName ? "input-error" : ""}
          {...register("firstName", 
            { 
              required: true , 
              minLength: {value: 3, message: "Min Len atleast 3"}, 
              maxLength: {value: 8, message: "Max Len atmost 8"}
            })} />
            {errors.firstName && <p className='error-msg' >{errors.firstName.message} </p>}
        </div>
        <br />

        <div>
          <label>Middle Name: </label>
          <input {...register("middleName", 
            { required: true , 
            minLength: {value: 3, message: "Min Len atleast 3"}, 
            maxLength: {value: 8, message: "Max Len atmost 8"}, 
            pattern:{value: /^[A-Za-z]+$/i, message: "Middle name is not as per the rules."}
            })} />
            {errors.middleName && <p> {errors.middleName.message} </p>}
        </div> 
        <br />

        <div>
          <label>Last Name: </label>
          <input {...register("lastName", 
          { 
            required: true , 
            minLength: {value: 3, message: "Min Len atleast 3"} ,
            maxLength: {value: 8, message: "Max Len atmost 8"} ,
            pattern:{value: /^[A-Za-z]+$/i, patternMessage: "Last name is not as per the rules."}
            })} />
          {errors.lastName && <p> {errors.lastName.message} </p>}
          {errors.lastName && <p> {errors.lastName.patternMessage} </p>}
        </div>
        <br />
        <div>
          <input type="submit" disabled = {isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"} />
          <button type="submit" disabled = {isSubmitting} value = {isSubmitting ? "Wait" : "Submit"} > Submit </button>
        </div>

      </form>
    </>
  )
}

export default App
