const ErrorMessage = ({ children }) => {
  return (
    <p className='rounded-md bg-red-500 py-4 text-center text-lg font-semibold text-white'>{children}</p>
  )
}
export default ErrorMessage
