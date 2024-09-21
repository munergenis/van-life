import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='m-auto flex max-w-screen-md flex-col gap-10 p-12'>
      <p className='text-5xl font-bold leading-tight'>Sorry, the page you were looking for was not found.</p>
      <Link
        to='/'
        className='rounded-lg bg-black p-6 text-center font-secondary text-2xl text-white'
      >Return to home
      </Link>
    </div>
  )
}
export default Page404
