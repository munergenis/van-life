import PageMain from 'components/PageMain/PageMain'
import heroHomeImg from 'assets/img/hero-home-img.png'

const Home = () => {
  return (
    <PageMain img={heroHomeImg} className='flex flex-col gap-6 bg-neutral-700 px-10 py-24 text-white'>
      <h1 className='text-4xl font-black'>
        You got the travel plans,<br />
        we got the travel vans.
      </h1>
      <div className='text-lg font-light'>
        <p>Add adventure to your life by joining the #vanlife movement.</p>
        <p>Rent the perfect van to make your perfect road trip.</p>
      </div>
      <button className='mt-10 rounded-lg bg-yellow-500 py-8 text-2xl font-bold text-black'>Find your van</button>
    </PageMain>
  )
}
export default Home
