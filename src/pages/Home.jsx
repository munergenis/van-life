import heroHomeImg from 'assets/img/hero-home-img.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroHomeImg})` }}
      img={heroHomeImg}
      className='flex-1 bg-neutral-700 bg-cover bg-right px-10 py-24 text-white bg-blend-overlay'
    >
      <div className='mx-auto flex max-w-screen-lg flex-col gap-6'>
        <h1 className='text-4xl font-black'>
          You got the travel plans,<br />
          we got the travel vans.
        </h1>
        <div className='text-lg font-light'>
          <p>Add adventure to your life by joining the #vanlife movement.</p>
          <p>Rent the perfect van to make your perfect road trip.</p>
        </div>
        <Link
          className='mt-10 rounded-lg bg-yellow-500 py-8 text-center text-2xl font-bold text-black'
          to='/vans'
        >
          Find your van
        </Link>
      </div>
    </div>
  )
}
export default Home
