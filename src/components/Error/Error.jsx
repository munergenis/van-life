import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()

  return (
    <div>
      <h2>Ups...</h2>
      <p>Something went wrong</p>
      <p>{error.message}</p>
      <p>{`${error.status} - ${error.statusText}`}</p>
    </div>
  )
}
export default Error
