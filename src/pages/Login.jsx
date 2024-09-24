import Form from 'components/Form/index'
import { useLocation } from 'react-router-dom'

const Login = () => {
  const location = useLocation()
  const message = location.state?.message || null

  const handleOnFormSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='container mx-auto max-w-screen-lg pt-10'>

      <Form onFormSubmit={handleOnFormSubmit}>
        {message && <p className='text-center font-semibold text-red-700 underline'>{message}</p>}
        <Form.Title>Sign in to your account</Form.Title>
        <small className='font-secondary italic text-neutral-500'>Try with <span className='font-bold'>abc@mail.com - asdf1234</span> to test</small>
        <Form.Section>
          <Form.Input placeholder='johndoe@email.com' type='email' label='Email' name='email' />
          <Form.Input placeholder='amazing-potatoe-battles' type='password' label='Password' name='password' />
        </Form.Section>
        <Form.SubmitBtn>Log in</Form.SubmitBtn>
      </Form>
    </div>
  )
}
export default Login
