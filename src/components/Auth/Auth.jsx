import { Outlet, Navigate } from 'react-router-dom'

const Auth = () => {
  const auth = false

  if (!auth) return <Navigate to='/login' state={{ message: 'You must be logged in' }} />

  return <Outlet />
}
export default Auth
