import { Outlet, Navigate, useLocation } from 'react-router-dom'

const Auth = () => {
  const auth = window.localStorage.getItem('logged-in')
  const location = useLocation()

  if (!auth) {
    return (
      <Navigate
        to='/login'
        state={{ message: 'You must be logged in', pathFrom: location.pathname }}
        replace
      />
    )
  }

  return <Outlet />
}
export default Auth
