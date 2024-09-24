const SubmitBtn = ({ submitting, children }) => {
  return (
    <button
      className={`rounded-xl bg-orange-500 py-6 text-2xl font-bold text-white ${submitting && 'opacity-70'}`}
      type='submit'
      disabled={submitting}
    >{children}
    </button>
  )
}
export default SubmitBtn
