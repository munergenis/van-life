const About = () => {
  return (
    <main className='flex-1 bg-yellow-50'>
      <div className='w-full h-96 bg-neutral-700' />
      <div className='px-8 py-16 w-full flex flex-col gap-8'>
        <h2 className='text-4xl font-bold'>Don't squeeze in a sedan when you could relax in a van.</h2>
        <div className='text-lg flex flex-col gap-4'>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are rectified beforee each trip to ensure your travel plans can go off without a hitch. <br /> (Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className='bg-orange-300 rounded-lg w-full p-10 flex flex-col gap-8 items-start'>
          <h2 className='font-bold text-3xl'>Your destination is waiting. <br />Your van is ready.</h2>
          <button className='text-lg font-bold text-white bg-black rounded-xl py-4 px-6'>Explore our vans</button>
        </div>
      </div>
    </main>
  )
}
export default About
