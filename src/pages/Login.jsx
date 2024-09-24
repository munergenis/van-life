import Form from 'components/Form/index'

const Login = () => {
  const handleOnFormSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className='container mx-auto max-w-screen-lg pt-10'>
      <Form onFormSubmit={handleOnFormSubmit}>
        <Form.Title>Sign in to your account</Form.Title>
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
