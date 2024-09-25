import Form from 'components/Form/index'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginUser } from 'utils/loginUser'

const Login = () => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const loggedIn = window.localStorage.getItem('logged-in')

  const location = useLocation()
  const message = location.state?.message || null
  const pathFrom = location.state?.pathFrom || null
  const navigateTo = useNavigate()

  useEffect(() => {
    if (loggedIn) {
      navigateTo('/host', { replace: true })
    }
  }, [])

  const handleOnFormSubmit = async (formData) => {
    setSubmitting(true)
    console.log('submitting')

    // Faking delay
    await new Promise(resolve => setTimeout(() => {
      resolve()
    }, 1000))
    // Coment till here to remove delay

    const response = await loginUser(formData)
    if (response.error) {
      setErrorMessage(response.data)
    } else {
      console.log(response.data)
      window.localStorage.setItem('logged-in', 'true')
      navigateTo(pathFrom || '/host', { replace: true })
      setErrorMessage(null)
    }
    setSubmitting(false)
  }

  return (
    <div className='container mx-auto max-w-screen-lg pt-10'>

      <Form onFormSubmit={handleOnFormSubmit}>

        {message && <ErrorMessage>{message}</ErrorMessage>}

        <Form.Title>Sign in to your account</Form.Title>
        <small className='font-secondary italic text-neutral-500'>Try with <span className='font-bold'>abc@mail.com - asdf1234</span> to test</small>
        <Form.Section>
          <Form.Input placeholder='johndoe@email.com' type='email' label='Email' name='email' />
          <Form.Input placeholder='amazing-potatoe-battles' type='password' label='Password' name='password' />
        </Form.Section>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <Form.SubmitBtn submitting={submitting}>
          {submitting
            ? 'Loggin in...'
            : 'Log in'}
        </Form.SubmitBtn>
      </Form>
    </div>
  )
}
export default Login
