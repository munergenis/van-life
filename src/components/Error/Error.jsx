const Error = ({ error }) => {
  return (
    <div className='flex flex-col items-center gap-2 rounded-xl bg-orange-300 py-4 font-secondary'>
      <p>Ooops... {error.message}</p>
      <p>{`${error.status} | ${error.statusText}`}</p>
    </div>
  )
}
export default Error
