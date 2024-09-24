const SubmitBtn = ({ children }) => {
  return (
    <button
      className='rounded-xl bg-orange-500 py-6 text-2xl font-bold text-white'
      type='submit'
    >{children}
    </button>
  )
}
export default SubmitBtn
