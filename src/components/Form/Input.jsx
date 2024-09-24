import { useId, useContext } from 'react'
import { FormContext } from 'components/Form/Form'

const Input = ({ placeholder, label, type, name }) => {
  const { form, setForm } = useContext(FormContext)

  const handleChange = (e) => {
    const inputValue = e.target.value
    setForm(prevForm => ({
      ...prevForm,
      [name]: inputValue
    }))
  }

  const id = useId()

  return (
    <div className='flex flex-col gap-2'>
      <label
        className='font-secondary text-lg font-semibold'
        htmlFor={`${name}-${id}`}
      >{label}
      </label>
      <input
        className='rounded-xl border p-3'
        type={type}
        placeholder={placeholder}
        id={`${name}-${id}`}
        name={name}
        value={form[name] || ''}
        onChange={handleChange}
      />
    </div>
  )
}
export default Input
