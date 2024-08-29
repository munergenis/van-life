const Home = () => {
  return (
    <main className='flex-1 bg-neutral-700 flex flex-col gap-6 px-10 py-24 text-white'>
      <h1 className='text-4xl font-black text-balance'>You got the travel plans, we got the travel vans.</h1>
      <div className='text-lg font-light'>
        <p>Add adventure to your life by joining the #vanlife movement.</p>
        <p>Rent the perfect van to make your perfect road trip.</p>
      </div>
      <button className='bg-yellow-500 py-8 text-black text-2xl font-bold mt-10 rounded-lg'>Find your van</button>
    </main>
  )
}
export default Home
