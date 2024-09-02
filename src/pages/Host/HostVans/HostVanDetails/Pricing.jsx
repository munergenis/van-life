import { useOutletContext } from 'react-router-dom'

const Pricing = () => {
  const { van: { price } } = useOutletContext()
  return (
    <p>
      <span className='text-xl font-semibold'>${price}</span>
      /day
    </p>
  )
}
export default Pricing
