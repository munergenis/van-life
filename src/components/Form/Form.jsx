import { useState, createContext } from 'react'

export const FormContext = createContext()

const Form = ({ onFormSubmit, children }) => {
  const [form, setForm] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    onFormSubmit(form)
    setForm({})
  }

  return (
    <form
      className='flex flex-col gap-4 px-12'
      onSubmit={handleSubmit}
    >
      <FormContext.Provider value={{ form, setForm }}>
        {children}
      </FormContext.Provider>
    </form>
  )
}
export default Form
