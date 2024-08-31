import heroAboutImg from 'assets/img/hero-about-img.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <img
        className='h-96 w-full bg-neutral-700 object-cover object-top'
        src={heroAboutImg}
      />
      <div className='mx-auto flex w-full max-w-screen-lg flex-col gap-8 px-8 py-16'>
        <h2 className='text-4xl font-bold'>Don't squeeze in a sedan when you could relax in a van.</h2>
        <div className='flex flex-col gap-8 p-10 font-secondary text-xl text-neutral-600'>
          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are rectified beforee each trip to ensure your travel plans can go off without a hitch. <br />
            (Hitch costs extra 😉)
          </p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className='flex w-full flex-col items-start gap-8 rounded-lg bg-orange-300 p-10'>
          <h2 className='text-3xl font-bold'>Your destination is waiting. <br />Your van is ready.</h2>
          <Link
            className='rounded-xl bg-black px-6 py-4 text-center text-lg font-bold text-white'
            to='/vans'
          >
            Explore our vans
          </Link>
        </div>
      </div>
    </>
  )
}
export default About
