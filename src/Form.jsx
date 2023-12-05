/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🦝 Todo: CREATE AN AWESOME AND MAINTAINABLE FORM COMPONENT 
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Form = () => {
  const methods = useForm()

  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
    notify()
  })
  const notify = () =>
    toast('Form has been submitted successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        autoComplete="off"
        noValidate
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...num_validation} />
          <Input {...password_validation} />
          <Input {...desc_validation} className="md:col-span-2" />
        </div>
        <div className="mt-5">
          {success && (
            // <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
            //   <BsFillCheckSquareFill /> Form has been submitted successfully
            // </p>
            <ToastContainer />
          )}
          <button
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            <GrMail />
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
